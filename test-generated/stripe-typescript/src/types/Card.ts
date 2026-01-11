import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TokenCardNetworks } from './TokenCardNetworks';
import { TokenCardNetworksSchema } from './TokenCardNetworks';
/**
 * Card
 *
 * You can store multiple cards on a customer in order to charge the customer
later. You can also store multiple debit cards on a recipient in order to
transfer to those cards later.

Related guide: [Card payments with Sources](https://stripe.com/docs/sources/cards)
 */
export interface Card {
  account?: AccountOrRef;
  /**
   * City/District/Suburb/Town/Village.
   */
  addressCity?: string;
  /**
   * Billing address country, if provided when creating card.
   */
  addressCountry?: string;
  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  addressLine1?: string;
  /**
   * If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressLine1Check?: string;
  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  addressLine2?: string;
  /**
   * State/County/Province/Region.
   */
  addressState?: string;
  /**
   * ZIP or postal code.
   */
  addressZip?: string;
  /**
   * If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressZipCheck?: string;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
   */
  allowRedisplay?: string;
  /**
   * A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.
   */
  availablePayoutMethods?: Array<string>;
  /**
   * Card brand. Can be `American Express`, `Cartes Bancaires`, `Diners Club`, `Discover`, `Eftpos Australia`, `Girocard`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
   */
  brand: string;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string;
  /**
   * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency. This property is only available when returned as an [External Account](/api/external_account_cards/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
   */
  currency?: string;
  /**
   * The customer that this card belongs to. This attribute will not be in the card object if the card belongs to an account or recipient instead.
   */
  customer?: CustomerUnion;
  /**
   * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn't been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
   */
  cvcCheck?: string;
  /**
   * Whether this card is the default external account for its currency. This property is only available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  defaultForCurrency?: boolean;
  /**
   * (For tokenized numbers only.) The last four digits of the device account number.
   */
  dynamicLast4?: string;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.

*As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Issuer identification number of the card.
   */
  iin?: string;
  /**
   * The last four digits of the card.
   */
  last4: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * Cardholder name.
   */
  name?: string;
  /**
   * token_card_networks
   *
   * 
   */
  networks?: TokenCardNetworks;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Status of a card based on the card issuer.
   */
  regulatedStatus?: string;
  /**
   * For external accounts that are cards, possible values are `new` and `errored`. If a payout fails, the status is set to `errored` and [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule) are stopped until account details are updated.
   */
  status?: string;
  /**
   * If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.
   */
  tokenizationMethod?: string;
}

export const CardSchema: TypedSchema<Card> = typed<Card>(object({
  get account() { return optional(AccountOrRefSchema) },
  addressCity: optional(string()),
  addressCountry: optional(string()),
  addressLine1: optional(string()),
  addressLine1Check: optional(string()),
  addressLine2: optional(string()),
  addressState: optional(string()),
  addressZip: optional(string()),
  addressZipCheck: optional(string()),
  allowRedisplay: optional(string()),
  availablePayoutMethods: optional(array(string())),
  brand: string(),
  country: optional(string()),
  currency: optional(string()),
  get customer() { return optional(CustomerUnionSchema) },
  cvcCheck: optional(string()),
  defaultForCurrency: optional(boolean()),
  dynamicLast4: optional(string()),
  expMonth: number(),
  expYear: number(),
  fingerprint: optional(string()),
  funding: string(),
  id: string(),
  iin: optional(string()),
  last4: string(),
  get metadata() { return optional(MetadataPropertySchema) },
  name: optional(string()),
  get networks() { return optional(TokenCardNetworksSchema) },
  object: string(),
  regulatedStatus: optional(string()),
  status: optional(string()),
  tokenizationMethod: optional(string()),
}));