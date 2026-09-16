import { NextRequest, NextResponse } from 'next/server';
import { analyzeTelephonyCall, TelephonyAnalysisParams } from '@/lib/ai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const params: TelephonyAnalysisParams = {
      transcript: String(body.transcript || ''),
      callerNumber: String(body.callerNumber || '+44 141 946 8821'),
      agentRole: typeof body.agentRole === 'string' ? body.agentRole : undefined,
      customInstructions: typeof body.customInstructions === 'string' ? body.customInstructions : undefined,
      simulatedOutage: Boolean(body.simulatedOutage),
    };

    const result = await analyzeTelephonyCall(params);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown telephony analysis error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
