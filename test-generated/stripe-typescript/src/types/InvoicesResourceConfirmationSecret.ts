import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * InvoicesResourceConfirmationSecret
 *
 * 
 */
export interface InvoicesResourceConfirmationSecret {
  /**
   * The client_secret of the payment that Stripe creates for the invoice after finalization.
   */
  clientSecret: string;
  /**
   * The type of client_secret. Currently this is always payment_intent, referencing the default payment_intent that Stripe creates during invoice finalization
   */
  type: string;
}

export const InvoicesResourceConfirmationSecretSchema: TypedSchema<InvoicesResourceConfirmationSecret> = typed<InvoicesResourceConfirmationSecret>(object({
  clientSecret: string(),
  type: string(),
}));