import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CashProperty } from './CashProperty';
import { CashPropertySchema } from './CashProperty';
import type { InboundPendingProperty } from './InboundPendingProperty';
import { InboundPendingPropertySchema } from './InboundPendingProperty';
import type { OutboundPendingProperty } from './OutboundPendingProperty';
import { OutboundPendingPropertySchema } from './OutboundPendingProperty';
/**
 * TreasuryFinancialAccountsResourceBalance
 *
 * Balance information for the FinancialAccount
 */
export interface TreasuryFinancialAccountsResourceBalance {
  /**
   * Funds the user can spend right now.
   */
  cash: CashProperty;
  /**
   * Funds not spendable yet, but will become available at a later time.
   */
  inboundPending: InboundPendingProperty;
  /**
   * Funds in the account, but not spendable because they are being held for pending outbound flows.
   */
  outboundPending: OutboundPendingProperty;
}

export const TreasuryFinancialAccountsResourceBalanceSchema: TypedSchema<TreasuryFinancialAccountsResourceBalance> = typed<TreasuryFinancialAccountsResourceBalance>(object({
  cash: CashPropertySchema,
  inboundPending: InboundPendingPropertySchema,
  outboundPending: OutboundPendingPropertySchema,
}));