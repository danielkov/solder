import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
export type CustomerOrRef = string | Customer;

export const CustomerOrRefSchema: TypedSchema<CustomerOrRef> = typed<CustomerOrRef>(union(string(), CustomerSchema));