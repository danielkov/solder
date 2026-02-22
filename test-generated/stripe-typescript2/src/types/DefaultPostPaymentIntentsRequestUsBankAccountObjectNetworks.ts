import { array, object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * networks_options_param
 */
export interface DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks {
  requested?: Array<string>;
}

export const DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworksSchema: TypedSchema<DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks> = typed<DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks>(object({ requested: optional(array(string())) }));
