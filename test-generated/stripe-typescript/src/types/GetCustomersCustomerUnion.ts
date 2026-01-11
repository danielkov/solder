import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
import type { DeletedCustomer } from './DeletedCustomer';
import { DeletedCustomerSchema } from './DeletedCustomer';
export type GetCustomersCustomerUnion = Customer | DeletedCustomer;

export const GetCustomersCustomerUnionSchema: TypedSchema<GetCustomersCustomerUnion> = typed<GetCustomersCustomerUnion>(union(CustomerSchema, DeletedCustomerSchema));