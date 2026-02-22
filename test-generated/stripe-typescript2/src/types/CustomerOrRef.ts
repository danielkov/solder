import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
/**
 * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
 */
export type CustomerOrRef = string | Customer;

export const CustomerOrRefSchema: TypedSchema<CustomerOrRef> = typed<CustomerOrRef>(union(string(), CustomerSchema));
