import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestBacsDebitPayments } from './PostAccountsRequestBacsDebitPayments';
import { PostAccountsRequestBacsDebitPaymentsSchema } from './PostAccountsRequestBacsDebitPayments';
import type { PostAccountsRequestBranding } from './PostAccountsRequestBranding';
import { PostAccountsRequestBrandingSchema } from './PostAccountsRequestBranding';
import type { PostAccountsRequestCardIssuing } from './PostAccountsRequestCardIssuing';
import { PostAccountsRequestCardIssuingSchema } from './PostAccountsRequestCardIssuing';
import type { PostAccountsRequestCardPayments } from './PostAccountsRequestCardPayments';
import { PostAccountsRequestCardPaymentsSchema } from './PostAccountsRequestCardPayments';
import type { PostAccountsRequestInvoices } from './PostAccountsRequestInvoices';
import { PostAccountsRequestInvoicesSchema } from './PostAccountsRequestInvoices';
import type { PostAccountsRequestPayments } from './PostAccountsRequestPayments';
import { PostAccountsRequestPaymentsSchema } from './PostAccountsRequestPayments';
import type { PostAccountsRequestPayouts } from './PostAccountsRequestPayouts';
import { PostAccountsRequestPayoutsSchema } from './PostAccountsRequestPayouts';
import type { PostAccountsRequestTreasury } from './PostAccountsRequestTreasury';
import { PostAccountsRequestTreasurySchema } from './PostAccountsRequestTreasury';
/**
 * settings_specs
 *
 * Options for customizing how the account functions within Stripe.
 */
export interface PostAccountsRequestSettings {
  /**
   * bacs_debit_payments_specs
   */
  bacsDebitPayments?: PostAccountsRequestBacsDebitPayments;
  /**
   * branding_settings_specs
   */
  branding?: PostAccountsRequestBranding;
  /**
   * card_issuing_settings_specs
   */
  cardIssuing?: PostAccountsRequestCardIssuing;
  /**
   * card_payments_settings_specs
   */
  cardPayments?: PostAccountsRequestCardPayments;
  /**
   * invoices_settings_specs_create
   */
  invoices?: PostAccountsRequestInvoices;
  /**
   * payments_settings_specs
   */
  payments?: PostAccountsRequestPayments;
  /**
   * payout_settings_specs
   */
  payouts?: PostAccountsRequestPayouts;
  /**
   * treasury_settings_specs
   */
  treasury?: PostAccountsRequestTreasury;
}

export const PostAccountsRequestSettingsSchema: TypedSchema<PostAccountsRequestSettings> = typed<PostAccountsRequestSettings>(object({
  get bacsDebitPayments() { return optional(PostAccountsRequestBacsDebitPaymentsSchema) },
  get branding() { return optional(PostAccountsRequestBrandingSchema) },
  get cardIssuing() { return optional(PostAccountsRequestCardIssuingSchema) },
  get cardPayments() { return optional(PostAccountsRequestCardPaymentsSchema) },
  get invoices() { return optional(PostAccountsRequestInvoicesSchema) },
  get payments() { return optional(PostAccountsRequestPaymentsSchema) },
  get payouts() { return optional(PostAccountsRequestPayoutsSchema) },
  get treasury() { return optional(PostAccountsRequestTreasurySchema) },
}));