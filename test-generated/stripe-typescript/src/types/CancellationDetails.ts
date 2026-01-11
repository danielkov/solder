import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CancellationDetails
 *
 * 
 */
export interface CancellationDetails {
  /**
   * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
   */
  comment?: string;
  /**
   * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
   */
  feedback?: string;
  /**
   * Why this subscription was canceled.
   */
  reason?: string;
}

export const CancellationDetailsSchema: TypedSchema<CancellationDetails> = typed<CancellationDetails>(object({
  comment: optional(string()),
  feedback: optional(string()),
  reason: optional(string()),
}));