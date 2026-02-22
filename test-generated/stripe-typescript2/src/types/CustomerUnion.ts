import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
import type { DeletedCustomer } from './DeletedCustomer';
import { DeletedCustomerSchema } from './DeletedCustomer';
/**
 * The ID of the customer that the bank account is associated with.
 */
export type CustomerUnion = string | Customer | DeletedCustomer;

export const CustomerUnionSchema: TypedSchema<CustomerUnion> = typed<CustomerUnion>(union(string(), CustomerSchema, DeletedCustomerSchema));
