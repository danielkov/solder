import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Funds not spendable yet, but will become available at a later time.
 */
export interface InboundPendingProperty {}

export const InboundPendingPropertySchema: TypedSchema<InboundPendingProperty> = typed<InboundPendingProperty>(object({}));
