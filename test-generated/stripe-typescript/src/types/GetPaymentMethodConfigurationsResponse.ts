import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodConfiguration } from './PaymentMethodConfiguration';
import { PaymentMethodConfigurationSchema } from './PaymentMethodConfiguration';
/**
 * PaymentMethodConfigResourcePaymentMethodConfigurationsList
 *
 * 
 */
export interface GetPaymentMethodConfigurationsResponse {
  data: Array<PaymentMethodConfiguration>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetPaymentMethodConfigurationsResponseSchema: TypedSchema<GetPaymentMethodConfigurationsResponse> = typed<GetPaymentMethodConfigurationsResponse>(object({
  data: array(PaymentMethodConfigurationSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));