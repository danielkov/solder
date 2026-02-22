import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * token_params
 */
export interface DefaultPostPaymentMethodsRequestCardObject {
  token: string;
}

export const DefaultPostPaymentMethodsRequestCardObjectSchema: TypedSchema<DefaultPostPaymentMethodsRequestCardObject> = typed<DefaultPostPaymentMethodsRequestCardObject>(object({ token: string() }));
