import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * customer_details_params
 */
export interface GetCheckoutSessionsObject {
  email: string;
}

export const GetCheckoutSessionsObjectSchema: TypedSchema<GetCheckoutSessionsObject> = typed<GetCheckoutSessionsObject>(object({ email: string() }));
