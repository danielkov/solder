import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * mandate_options_param
 */
export interface DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions {
  collectionMethod?: string;
}

export const DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptionsSchema: TypedSchema<DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions> = typed<DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions>(object({ collectionMethod: optional(string()) }));
