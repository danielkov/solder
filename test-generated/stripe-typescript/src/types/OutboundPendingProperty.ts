import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Funds in the account, but not spendable because they are being held for pending outbound flows.
 */
export interface OutboundPendingProperty {
}

export const OutboundPendingPropertySchema: TypedSchema<OutboundPendingProperty> = typed<OutboundPendingProperty>(object({
}));