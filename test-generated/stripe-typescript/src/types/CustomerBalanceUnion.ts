import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema } from './PaymentIntentTypeSpecificPaymentMethodOptionsClient';
import type { PaymentMethodOptionsCustomerBalance } from './PaymentMethodOptionsCustomerBalance';
import { PaymentMethodOptionsCustomerBalanceSchema } from './PaymentMethodOptionsCustomerBalance';
export type CustomerBalanceUnion = PaymentMethodOptionsCustomerBalance | PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export const CustomerBalanceUnionSchema: TypedSchema<CustomerBalanceUnion> = typed<CustomerBalanceUnion>(union(PaymentMethodOptionsCustomerBalanceSchema, PaymentIntentTypeSpecificPaymentMethodOptionsClientSchema));