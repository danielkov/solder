import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PaymentLink } from './PaymentLink';
import { PaymentLinkSchema } from './PaymentLink';
export type PaymentLinkOrRef = string | PaymentLink;

export const PaymentLinkOrRefSchema: TypedSchema<PaymentLinkOrRef> = typed<PaymentLinkOrRef>(union(string(), PaymentLinkSchema));