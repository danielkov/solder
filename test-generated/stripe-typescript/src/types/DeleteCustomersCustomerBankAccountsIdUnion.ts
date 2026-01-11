import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DeletedPaymentSource } from './DeletedPaymentSource';
import { DeletedPaymentSourceSchema } from './DeletedPaymentSource';
import type { PaymentSource } from './PaymentSource';
import { PaymentSourceSchema } from './PaymentSource';
export type DeleteCustomersCustomerBankAccountsIdUnion = PaymentSource | DeletedPaymentSource;

export const DeleteCustomersCustomerBankAccountsIdUnionSchema: TypedSchema<DeleteCustomersCustomerBankAccountsIdUnion> = typed<DeleteCustomersCustomerBankAccountsIdUnion>(union(PaymentSourceSchema, DeletedPaymentSourceSchema));