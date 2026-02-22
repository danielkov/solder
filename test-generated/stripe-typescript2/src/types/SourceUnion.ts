import { typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
/**
 * The [source object](https://stripe.com/docs/api/sources/object) for errors returned on a request involving a source.
 */
export type SourceUnion = BankAccount | Card | Source;

export const SourceUnionSchema: TypedSchema<SourceUnion> = typed<SourceUnion>(union(BankAccountSchema, CardSchema, SourceSchema));
