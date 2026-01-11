import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.
 */
export interface RatesProperty {
}

export const RatesPropertySchema: TypedSchema<RatesProperty> = typed<RatesProperty>(object({
}));