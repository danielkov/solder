import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
import type { DeletedCustomer } from './DeletedCustomer';
import { DeletedCustomerSchema } from './DeletedCustomer';
export type CustomerUnion = string | Customer | DeletedCustomer;

export const CustomerUnionSchema: TypedSchema<CustomerUnion> = typed<CustomerUnion>(union(string(), CustomerSchema, DeletedCustomerSchema));