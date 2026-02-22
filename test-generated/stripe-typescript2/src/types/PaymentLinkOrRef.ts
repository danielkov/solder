import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PaymentLink } from './PaymentLink';
import { PaymentLinkSchema } from './PaymentLink';
/**
 * The ID of the Payment Link that created this Session.
 */
export type PaymentLinkOrRef = string | PaymentLink;

export const PaymentLinkOrRefSchema: TypedSchema<PaymentLinkOrRef> = typed<PaymentLinkOrRef>(union(string(), PaymentLinkSchema));
