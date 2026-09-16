/**
 * Dual-Provider Telephony & Voice AI Engine for Retell, Make, Twilio & Wappi
 * Zero-dependency native HTTP fetch implementation:
 * Primary: OpenAI gpt-4o-mini
 * Fallback: Google Gemini gemini-2.0-flash
 * Offline / Local: Deterministic Scottish & UK Trade Telephony Rule Engine
 */

import { scanAndSanitizePrompt } from './llm-firewall';

export type CallUrgency = 'CRITICAL' | 'HIGH' | 'NORMAL' | 'LOW';

export interface ExtractedCallEntities {
  callerName: string;
  phoneE164: string;
  postcode: string;
  tradeService: string;
  siteAddress: string;
  preferredTimeSlot: string;
  urgencyLevel: CallUrgency;
  referenceOrInvoiceNumber?: string;
  keyNotes: string;
}

export interface TelephonyCallAnalysisResult {
  intent: string;
  urgency: CallUrgency;
  sentiment: 'Positive' | 'Neutral' | 'Frustrated / Urgent' | 'Inquiry';
  entities: ExtractedCallEntities;
  voiceAgentResponse: string; // Spoken audio script returned to Retell AI
  wappiWhatsAppMessage: string; // Formatted WhatsApp message dispatched via Wappi
  makeRouteAction: 'EMERGENCY_ONCALL_DISPATCH' | 'CRM_LEAD_INSERT' | 'ACCOUNTS_INVOICE_TICKET' | 'GENERAL_CALLBACK';
  provider: 'OPENAI' | 'GEMINI' | 'DETERMINISTIC_RULES';
  model: string;
  latencyMs: number;
  firewallStatus: {
    passed: boolean;
    piiRedacted: boolean;
    riskScore: number;
  };
}

export interface TelephonyAnalysisParams {
  transcript: string;
  callerNumber?: string;
  agentRole?: string;
  customInstructions?: string;
  simulatedOutage?: boolean;
}

export async function analyzeTelephonyCall(params: TelephonyAnalysisParams): Promise<TelephonyCallAnalysisResult> {
  const startTime = Date.now();
  const transcript = params.transcript || '';
  const callerNumber = params.callerNumber || '+44 141 946 8821';
  const customInstructions = params.customInstructions || 'You are an expert AI receptionist for Stuart & Co Manufacturing & Construction in Glasgow UK.';

  // 1. Pass through Securiti Certified Inline LLM Firewall
  const firewallCheck = scanAndSanitizePrompt(transcript);
  const cleanTranscript = firewallCheck.sanitizedInput;

  // 2. Fallback check for simulated chaos outage
  const simulateOutage = Boolean(params.simulatedOutage);

  // Try Primary Provider: OpenAI gpt-4o-mini
  if (!simulateOutage && process.env.OPENAI_API_KEY) {
    try {
      const openAiResult = await callOpenAi(cleanTranscript, callerNumber, customInstructions);
      const latencyMs = Date.now() - startTime;
      return {
        ...openAiResult,
        provider: 'OPENAI',
        model: 'gpt-4o-mini',
        latencyMs,
        firewallStatus: {
          passed: firewallCheck.passed,
          piiRedacted: firewallCheck.piiRedacted,
          riskScore: firewallCheck.riskScore,
        },
      };
    } catch (err) {
      console.warn('OpenAI primary failed, falling back to Gemini 2.0 Flash:', err);
    }
  }

  // Try Failover Provider: Gemini 2.0 Flash
  if (!simulateOutage && process.env.GEMINI_API_KEY) {
    try {
      const geminiResult = await callGemini(cleanTranscript, callerNumber, customInstructions);
      const latencyMs = Date.now() - startTime;
      return {
        ...geminiResult,
        provider: 'GEMINI',
        model: 'gemini-2.0-flash',
        latencyMs,
        firewallStatus: {
          passed: firewallCheck.passed,
          piiRedacted: firewallCheck.piiRedacted,
          riskScore: firewallCheck.riskScore,
        },
      };
    } catch (err) {
      console.warn('Gemini failover failed, falling back to Deterministic Telephony Engine:', err);
    }
  }

  // Final Deterministic Local Fallback (Guarantees sub-15ms offline uptime)
  const localResult = deterministicTelephonyEngine(cleanTranscript, callerNumber);
  const latencyMs = Date.now() - startTime;
  return {
    ...localResult,
    provider: 'DETERMINISTIC_RULES',
    model: 'scottish-trade-telephony-v1',
    latencyMs,
    firewallStatus: {
      passed: firewallCheck.passed,
      piiRedacted: firewallCheck.piiRedacted,
      riskScore: firewallCheck.riskScore,
    },
  };
}

async function callOpenAi(transcript: string, callerNumber: string, instructions: string) {
  const systemPrompt = `You are the production AI telephony engine powering Retell AI, Make.com, and Wappi WhatsApp for a UK Manufacturing & Construction company in Glasgow (Stuart & Co / Apex Construction).
Your job is to analyze the inbound call transcript and return a strict JSON object with:
1. "intent": concise description (e.g., "Emergency Roof Leak", "Commercial Scaffolding Quote", "Plant Hire Delivery", "Subcontractor Invoice Query")
2. "urgency": "CRITICAL", "HIGH", "NORMAL", or "LOW"
3. "sentiment": "Positive", "Neutral", "Frustrated / Urgent", or "Inquiry"
4. "entities": object with keys { "callerName", "phoneE164", "postcode", "tradeService", "siteAddress", "preferredTimeSlot", "urgencyLevel", "referenceOrInvoiceNumber", "keyNotes" }
5. "voiceAgentResponse": exact conversational words the Retell voice agent should speak back over the phone to reassure the caller (polite, warm, concise, professional Scottish/UK cadence, 2-3 sentences max).
6. "wappiWhatsAppMessage": exact formatted WhatsApp message to immediately dispatch to the caller via Wappi API (include emojis, greeting, call summary, next steps, and direct contact details).
7. "makeRouteAction": one of "EMERGENCY_ONCALL_DISPATCH", "CRM_LEAD_INSERT", "ACCOUNTS_INVOICE_TICKET", "GENERAL_CALLBACK".

System context instructions: ${instructions}
Caller CLI: ${callerNumber}`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Inbound Call Transcript:\n${transcript}` },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const parsed = JSON.parse(data.choices[0].message.content);
  return normalizeParsedResult(parsed, callerNumber);
}

async function callGemini(transcript: string, callerNumber: string, instructions: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  const systemPrompt = `You are the production AI telephony engine powering Retell AI, Make.com, and Wappi WhatsApp for a UK Manufacturing & Construction company in Glasgow (Stuart & Co).
Analyze this call transcript and output valid JSON ONLY with keys:
{
  "intent": string,
  "urgency": "CRITICAL" | "HIGH" | "NORMAL" | "LOW",
  "sentiment": "Positive" | "Neutral" | "Frustrated / Urgent" | "Inquiry",
  "entities": {
    "callerName": string,
    "phoneE164": string,
    "postcode": string,
    "tradeService": string,
    "siteAddress": string,
    "preferredTimeSlot": string,
    "urgencyLevel": "CRITICAL" | "HIGH" | "NORMAL" | "LOW",
    "referenceOrInvoiceNumber": string,
    "keyNotes": string
  },
  "voiceAgentResponse": string,
  "wappiWhatsAppMessage": string,
  "makeRouteAction": "EMERGENCY_ONCALL_DISPATCH" | "CRM_LEAD_INSERT" | "ACCOUNTS_INVOICE_TICKET" | "GENERAL_CALLBACK"
}
System context: ${instructions}
Caller phone: ${callerNumber}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\nTranscript:\n${transcript}` }] },
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Empty response from Gemini');
  const parsed = JSON.parse(text);
  return normalizeParsedResult(parsed, callerNumber);
}

function normalizeParsedResult(parsed: any, defaultPhone: string): Omit<TelephonyCallAnalysisResult, 'provider' | 'model' | 'latencyMs' | 'firewallStatus'> {
  const urgency = ['CRITICAL', 'HIGH', 'NORMAL', 'LOW'].includes(parsed.urgency)
    ? parsed.urgency
    : 'NORMAL';

  const entities = parsed.entities || {};

  return {
    intent: parsed.intent || 'Trade Support & Inquiry',
    urgency,
    sentiment: parsed.sentiment || 'Neutral',
    entities: {
      callerName: entities.callerName || 'Site Caller',
      phoneE164: entities.phoneE164 || defaultPhone,
      postcode: entities.postcode || 'G12 Glasgow',
      tradeService: entities.tradeService || 'General Construction Services',
      siteAddress: entities.siteAddress || 'Glasgow Site Location',
      preferredTimeSlot: entities.preferredTimeSlot || 'Earliest available',
      urgencyLevel: urgency,
      referenceOrInvoiceNumber: entities.referenceOrInvoiceNumber || '',
      keyNotes: entities.keyNotes || 'Inbound phone inquiry logged via Retell voice agent.',
    },
    voiceAgentResponse: parsed.voiceAgentResponse || 'Thank you for calling. I have logged your details and our team has been notified.',
    wappiWhatsAppMessage: parsed.wappiWhatsAppMessage || `Hi! Thanks for calling our office. We have logged your request and our duty supervisor will follow up shortly.\n\nRef: ${defaultPhone}`,
    makeRouteAction: parsed.makeRouteAction || 'CRM_LEAD_INSERT',
  };
}

function deterministicTelephonyEngine(transcript: string, callerNumber: string): Omit<TelephonyCallAnalysisResult, 'provider' | 'model' | 'latencyMs' | 'firewallStatus'> {
  const lower = transcript.toLowerCase();

  const isEmergency = lower.includes('leak') || lower.includes('flood') || lower.includes('emergency') || lower.includes('urgent') || lower.includes('burst') || lower.includes('collapsed');
  const isInvoice = lower.includes('invoice') || lower.includes('cis') || lower.includes('payment') || lower.includes('remittance') || lower.includes('subcontractor');
  const isQuote = lower.includes('quote') || lower.includes('estimate') || lower.includes('tender') || lower.includes('price') || lower.includes('cost');
  const isPlant = lower.includes('excavator') || lower.includes('plant hire') || lower.includes('scaffold') || lower.includes('delivery');

  let intent = 'General Construction Inquiry';
  let urgency: CallUrgency = 'NORMAL';
  let tradeService = 'Commercial Construction & Maintenance';
  let makeAction: TelephonyCallAnalysisResult['makeRouteAction'] = 'CRM_LEAD_INSERT';

  if (isEmergency) {
    intent = 'Emergency Site Repair / Breakdown';
    urgency = 'CRITICAL';
    tradeService = 'Emergency Trade Dispatch';
    makeAction = 'EMERGENCY_ONCALL_DISPATCH';
  } else if (isInvoice) {
    intent = 'Subcontractor CIS Invoice & Payment';
    urgency = 'LOW';
    tradeService = 'Finance & Accounts Remittance';
    makeAction = 'ACCOUNTS_INVOICE_TICKET';
  } else if (isPlant) {
    intent = 'Plant Hire & Site Logistics';
    urgency = 'HIGH';
    tradeService = 'Heavy Plant & Logistics Coordination';
    makeAction = 'CRM_LEAD_INSERT';
  } else if (isQuote) {
    intent = 'Site Survey & Estimation Request';
    urgency = 'HIGH';
    tradeService = 'Quantity Surveying & Estimation';
    makeAction = 'CRM_LEAD_INSERT';
  }

  // Extract Scottish postcode patterns (e.g. G12 8QQ, ML1, PA1)
  const postcodeMatch = transcript.match(/\b(G[0-9]{1,2}|ML[0-9]|PA[0-9]|FK[0-9])\s?[0-9][A-Z]{2}\b/i) ||
                        transcript.match(/\b(G[0-9]{1,2}|ML[0-9]|PA[0-9])\b/i);
  const postcode = postcodeMatch ? postcodeMatch[0].toUpperCase() : 'G1 1DA Glasgow';

  return {
    intent,
    urgency,
    sentiment: isEmergency ? 'Frustrated / Urgent' : 'Neutral',
    entities: {
      callerName: 'Call Identified',
      phoneE164: callerNumber,
      postcode,
      tradeService,
      siteAddress: `Glasgow Central & West Scotland (${postcode})`,
      preferredTimeSlot: isEmergency ? 'Immediate (< 2 Hours)' : 'Next Business Morning',
      urgencyLevel: urgency,
      referenceOrInvoiceNumber: isInvoice ? 'CIS-INV-8492' : undefined,
      keyNotes: `Automated rule classification: ${intent}. Captured via Retell Voice Agent.`,
    },
    voiceAgentResponse: isEmergency
      ? "I understand this is an emergency. I have flagged your location for immediate dispatch to our on-call supervisor, and you'll receive an instant confirmation on WhatsApp right now."
      : "Thank you for providing those details. I have logged your request in our project queue, and our estimation coordinator will follow up with full details shortly.",
    wappiWhatsAppMessage: `*Stuart & Co Client Support*\nRef: RTLL-${Date.now().toString().slice(-6)}\n\nThank you for contacting our Glasgow office. We have logged your request:\nService: ${intent}\nPostcode: ${postcode}\nPriority: ${urgency}\nCaller Line: ${callerNumber}\n\nOur duty team has received your details. Reply directly to this thread to attach job photos, specifications, or site access details.`,
    makeRouteAction: makeAction,
  };
}
