import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Charge } from './Charge';
import { ChargeSchema } from './Charge';
/**
 * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
 */
export type DestinationPaymentOrRef = string | Charge;

export const DestinationPaymentOrRefSchema: TypedSchema<DestinationPaymentOrRef> = typed<DestinationPaymentOrRef>(union(string(), ChargeSchema));
