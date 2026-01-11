import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Funds the user can spend right now.
 */
export interface CashProperty {
}

export const CashPropertySchema: TypedSchema<CashProperty> = typed<CashProperty>(object({
}));