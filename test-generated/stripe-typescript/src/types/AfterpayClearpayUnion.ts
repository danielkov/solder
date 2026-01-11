import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsAfterpayClearpay } from './PaymentMethodOptionsAfterpayClearpay';
import { PaymentMethodOptionsAfterpayClearpaySchema } from './PaymentMethodOptionsAfterpayClearpay';
export type AfterpayClearpayUnion = PaymentMethodOptionsAfterpayClearpay | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const AfterpayClearpayUnionSchema: TypedSchema<AfterpayClearpayUnion> = typed<AfterpayClearpayUnion>(union(PaymentMethodOptionsAfterpayClearpaySchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));