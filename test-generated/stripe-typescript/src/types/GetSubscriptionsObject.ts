import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * automatic_tax_filter_params
 */
export interface GetSubscriptionsObject {
  enabled: boolean;
}

export const GetSubscriptionsObjectSchema: TypedSchema<GetSubscriptionsObject> = typed<GetSubscriptionsObject>(object({
  enabled: boolean(),
}));