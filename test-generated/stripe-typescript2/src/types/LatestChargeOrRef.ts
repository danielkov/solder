import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
/**
 * ID of the latest [Charge object](https://stripe.com/docs/api/charges) created by this PaymentIntent. This property is `null` until PaymentIntent confirmation is attempted.
 */
export type LatestChargeOrRef = string | Charge;

export const LatestChargeOrRefSchema: TypedSchema<LatestChargeOrRef> = typed<LatestChargeOrRef>(union(string(), ChargeSchema));
