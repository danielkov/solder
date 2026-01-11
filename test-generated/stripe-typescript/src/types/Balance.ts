import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceAmount } from './BalanceAmount';
import { BalanceAmountSchema } from './BalanceAmount';
import type { BalanceAmountNet } from './BalanceAmountNet';
import { BalanceAmountNetSchema } from './BalanceAmountNet';
import type { BalanceDetail } from './BalanceDetail';
import { BalanceDetailSchema } from './BalanceDetail';
import type { BalanceDetailUngated } from './BalanceDetailUngated';
import { BalanceDetailUngatedSchema } from './BalanceDetailUngated';
/**
 * Balance
 *
 * This is an object representing your Stripe balance. You can retrieve it to see
the balance currently on your Stripe account.

The top-level `available` and `pending` comprise your "payments balance."

Related guide: [Balances and settlement time](https://stripe.com/docs/payments/balances), [Understanding Connect account balances](https://stripe.com/docs/connect/account-balances)
 */
export interface Balance {
  /**
   * Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). You can find the available balance for each currency and payment type in the `source_types` property.
   */
  available: Array<BalanceAmount>;
  /**
   * Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. You can find the connect reserve balance for each currency and payment type in the `source_types` property.
   */
  connectReserved?: Array<BalanceAmount>;
  /**
   * Funds that you can pay out using Instant Payouts.
   */
  instantAvailable?: Array<BalanceAmountNet>;
  /**
   * BalanceDetail
   *
   * 
   */
  issuing?: BalanceDetail;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Funds that aren't available in the balance yet. You can find the pending balance for each currency and each payment type in the `source_types` property.
   */
  pending: Array<BalanceAmount>;
  /**
   * BalanceDetailUngated
   *
   * 
   */
  refundAndDisputePrefunding?: BalanceDetailUngated;
}

export const BalanceSchema: TypedSchema<Balance> = typed<Balance>(object({
  available: array(BalanceAmountSchema),
  get connectReserved() { return optional(array(BalanceAmountSchema)) },
  get instantAvailable() { return optional(array(BalanceAmountNetSchema)) },
  get issuing() { return optional(BalanceDetailSchema) },
  livemode: boolean(),
  object: string(),
  pending: array(BalanceAmountSchema),
  get refundAndDisputePrefunding() { return optional(BalanceDetailUngatedSchema) },
}));