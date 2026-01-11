import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Currencies that can be accepted in the specific country (for transfers).
 */
export interface SupportedBankAccountCurrenciesProperty {
}

export const SupportedBankAccountCurrenciesPropertySchema: TypedSchema<SupportedBankAccountCurrenciesProperty> = typed<SupportedBankAccountCurrenciesProperty>(object({
}));