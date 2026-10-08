import { contactConfig, InquiryTypeOption } from '../data/contact';

export interface ContactInquiryPayload {
  name: string;
  email: string;
  organization?: string;
  inquiryType: InquiryTypeOption;
  message: string;
}

export type ContactSubmissionResult =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      code: 'ENDPOINT_NOT_CONFIGURED' | 'NETWORK_ERROR' | 'SERVER_ERROR';
      message: string;
    };

/**
 * Contact Submission Service Abstraction (Phase 7 — Section 10)
 * Separates frontend form state and validation from transport/backend delivery.
 *
 * Strictly adheres to truthfulness requirements:
 * - Never fabricates successful email delivery or storage when no backend endpoint is configured.
 * - Only returns `{ ok: true }` when a real, configured endpoint responds with a 2xx status.
 */
export async function submitContactInquiry(
  payload: ContactInquiryPayload
): Promise<ContactSubmissionResult> {
  const endpoint = contactConfig.submissionEndpoint?.trim();

  if (!endpoint) {
    return {
      ok: false,
      code: 'ENDPOINT_NOT_CONFIGURED',
      message:
        'Your inquiry passed validation, but no backend submission service is currently connected to transmit or store messages. Configure submissionEndpoint in src/data/contact.ts (or VITE_CONTACT_API_URL) to enable live delivery.',
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        organization: payload.organization?.trim() || undefined,
        inquiryType: payload.inquiryType,
        message: payload.message.trim(),
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        code: 'SERVER_ERROR',
        message: `The submission service returned an error (HTTP ${response.status}). Please try again later.`,
      };
    }

    return {
      ok: true,
      message:
        'Your inquiry has been received by Piqqudim’s submission service. Thank you for reaching out.',
    };
  } catch {
    return {
      ok: false,
      code: 'NETWORK_ERROR',
      message:
        'Unable to reach the configured submission service. Please check your network connection and try again.',
    };
  }
}
