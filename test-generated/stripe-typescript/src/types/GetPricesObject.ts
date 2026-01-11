import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * all_prices_recurring_params
 */
export interface GetPricesObject {
  interval?: string;
  meter?: string;
  usageType?: string;
}

export const GetPricesObjectSchema: TypedSchema<GetPricesObject> = typed<GetPricesObject>(object({
  interval: optional(string()),
  meter: optional(string()),
  usageType: optional(string()),
}));