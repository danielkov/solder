import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsLink } from './PaymentIntentPaymentMethodOptionsLink';
import { PaymentIntentPaymentMethodOptionsLinkSchema } from './PaymentIntentPaymentMethodOptionsLink';
import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
export type LinkUnion = PaymentIntentPaymentMethodOptionsLink | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const LinkUnionSchema: TypedSchema<LinkUnion> = typed<LinkUnion>(union(PaymentIntentPaymentMethodOptionsLinkSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));