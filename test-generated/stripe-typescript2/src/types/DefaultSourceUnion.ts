import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
/**
 * ID of the default payment source for the customer.

If you use payment methods created through the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
 */
export type DefaultSourceUnion = string | BankAccount | Card | Source;

export const DefaultSourceUnionSchema: TypedSchema<DefaultSourceUnion> = typed<DefaultSourceUnion>(union(string(), BankAccountSchema, CardSchema, SourceSchema));
