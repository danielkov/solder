import { typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SourceUnionObject } from './SourceUnionObject';
import { SourceUnionObjectSchema } from './SourceUnionObject';
import type { SourceUnionObject2 } from './SourceUnionObject2';
import { SourceUnionObject2Schema } from './SourceUnionObject2';
/**
 * The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.
 */
export type SourceUnion = SourceUnionObject | SourceUnionObject2;

export const SourceUnionSchema: TypedSchema<SourceUnion> = typed<SourceUnion>(union(SourceUnionObjectSchema, SourceUnionObject2Schema));
