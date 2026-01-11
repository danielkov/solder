import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { SourceCodeVerificationFlow } from './SourceCodeVerificationFlow';
import { SourceCodeVerificationFlowSchema } from './SourceCodeVerificationFlow';
import type { SourceOrder } from './SourceOrder';
import { SourceOrderSchema } from './SourceOrder';
import type { SourceOwner } from './SourceOwner';
import { SourceOwnerSchema } from './SourceOwner';
import type { SourceReceiverFlow } from './SourceReceiverFlow';
import { SourceReceiverFlowSchema } from './SourceReceiverFlow';
import type { SourceRedirectFlow } from './SourceRedirectFlow';
import { SourceRedirectFlowSchema } from './SourceRedirectFlow';
import type { SourceTypeAchCreditTransfer } from './SourceTypeAchCreditTransfer';
import { SourceTypeAchCreditTransferSchema } from './SourceTypeAchCreditTransfer';
import type { SourceTypeAchDebit } from './SourceTypeAchDebit';
import { SourceTypeAchDebitSchema } from './SourceTypeAchDebit';
import type { SourceTypeAcssDebit } from './SourceTypeAcssDebit';
import { SourceTypeAcssDebitSchema } from './SourceTypeAcssDebit';
import type { SourceTypeAlipay } from './SourceTypeAlipay';
import { SourceTypeAlipaySchema } from './SourceTypeAlipay';
import type { SourceTypeAuBecsDebit } from './SourceTypeAuBecsDebit';
import { SourceTypeAuBecsDebitSchema } from './SourceTypeAuBecsDebit';
import type { SourceTypeBancontact } from './SourceTypeBancontact';
import { SourceTypeBancontactSchema } from './SourceTypeBancontact';
import type { SourceTypeCard } from './SourceTypeCard';
import { SourceTypeCardSchema } from './SourceTypeCard';
import type { SourceTypeCardPresent } from './SourceTypeCardPresent';
import { SourceTypeCardPresentSchema } from './SourceTypeCardPresent';
import type { SourceTypeEps } from './SourceTypeEps';
import { SourceTypeEpsSchema } from './SourceTypeEps';
import type { SourceTypeGiropay } from './SourceTypeGiropay';
import { SourceTypeGiropaySchema } from './SourceTypeGiropay';
import type { SourceTypeIdeal } from './SourceTypeIdeal';
import { SourceTypeIdealSchema } from './SourceTypeIdeal';
import type { SourceTypeKlarna } from './SourceTypeKlarna';
import { SourceTypeKlarnaSchema } from './SourceTypeKlarna';
import type { SourceTypeMultibanco } from './SourceTypeMultibanco';
import { SourceTypeMultibancoSchema } from './SourceTypeMultibanco';
import type { SourceTypeP24 } from './SourceTypeP24';
import { SourceTypeP24Schema } from './SourceTypeP24';
import type { SourceTypeSepaDebit } from './SourceTypeSepaDebit';
import { SourceTypeSepaDebitSchema } from './SourceTypeSepaDebit';
import type { SourceTypeSofort } from './SourceTypeSofort';
import { SourceTypeSofortSchema } from './SourceTypeSofort';
import type { SourceTypeThreeDSecure } from './SourceTypeThreeDSecure';
import { SourceTypeThreeDSecureSchema } from './SourceTypeThreeDSecure';
import type { SourceTypeWechat } from './SourceTypeWechat';
import { SourceTypeWechatSchema } from './SourceTypeWechat';
/**
 * Source
 *
 * `Source` objects allow you to accept a variety of payment methods. They
represent a customer's payment instrument, and can be used with the Stripe API
just like a `Card` object: once chargeable, they can be charged, or can be
attached to customers.

Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
This newer API provides access to our latest features and payment method types.

Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
 */
export interface Source {
  achCreditTransfer?: SourceTypeAchCreditTransfer;
  achDebit?: SourceTypeAchDebit;
  acssDebit?: SourceTypeAcssDebit;
  alipay?: SourceTypeAlipay;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
   */
  allowRedisplay?: string;
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
   */
  amount?: number;
  auBecsDebit?: SourceTypeAuBecsDebit;
  bancontact?: SourceTypeBancontact;
  card?: SourceTypeCard;
  cardPresent?: SourceTypeCardPresent;
  /**
   * The client secret of the source. Used for client-side retrieval using a publishable key.
   */
  clientSecret: string;
  /**
   * SourceCodeVerificationFlow
   *
   * 
   */
  codeVerification?: SourceCodeVerificationFlow;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
   */
  currency?: string;
  /**
   * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
   */
  customer?: string;
  eps?: SourceTypeEps;
  /**
   * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
   */
  flow: string;
  giropay?: SourceTypeGiropay;
  /**
   * Unique identifier for the object.
   */
  id: string;
  ideal?: SourceTypeIdeal;
  klarna?: SourceTypeKlarna;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  multibanco?: SourceTypeMultibanco;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: SourceOwner;
  p24?: SourceTypeP24;
  /**
   * SourceReceiverFlow
   *
   * 
   */
  receiver?: SourceReceiverFlow;
  /**
   * SourceRedirectFlow
   *
   * 
   */
  redirect?: SourceRedirectFlow;
  sepaDebit?: SourceTypeSepaDebit;
  sofort?: SourceTypeSofort;
  /**
   * SourceOrder
   *
   * 
   */
  sourceOrder?: SourceOrder;
  /**
   * Extra information about a source. This will appear on your customer's statement every time you charge the source.
   */
  statementDescriptor?: string;
  /**
   * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
   */
  status: string;
  threeDSecure?: SourceTypeThreeDSecure;
  /**
   * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
   */
  type: string;
  /**
   * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
   */
  usage?: string;
  wechat?: SourceTypeWechat;
}

export const SourceSchema: TypedSchema<Source> = typed<Source>(object({
  get achCreditTransfer() { return optional(SourceTypeAchCreditTransferSchema) },
  get achDebit() { return optional(SourceTypeAchDebitSchema) },
  get acssDebit() { return optional(SourceTypeAcssDebitSchema) },
  get alipay() { return optional(SourceTypeAlipaySchema) },
  allowRedisplay: optional(string()),
  amount: optional(number()),
  get auBecsDebit() { return optional(SourceTypeAuBecsDebitSchema) },
  get bancontact() { return optional(SourceTypeBancontactSchema) },
  get card() { return optional(SourceTypeCardSchema) },
  get cardPresent() { return optional(SourceTypeCardPresentSchema) },
  clientSecret: string(),
  get codeVerification() { return optional(SourceCodeVerificationFlowSchema) },
  created: number(),
  currency: optional(string()),
  customer: optional(string()),
  get eps() { return optional(SourceTypeEpsSchema) },
  flow: string(),
  get giropay() { return optional(SourceTypeGiropaySchema) },
  id: string(),
  get ideal() { return optional(SourceTypeIdealSchema) },
  get klarna() { return optional(SourceTypeKlarnaSchema) },
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  get multibanco() { return optional(SourceTypeMultibancoSchema) },
  object: string(),
  get owner() { return optional(SourceOwnerSchema) },
  get p24() { return optional(SourceTypeP24Schema) },
  get receiver() { return optional(SourceReceiverFlowSchema) },
  get redirect() { return optional(SourceRedirectFlowSchema) },
  get sepaDebit() { return optional(SourceTypeSepaDebitSchema) },
  get sofort() { return optional(SourceTypeSofortSchema) },
  get sourceOrder() { return optional(SourceOrderSchema) },
  statementDescriptor: optional(string()),
  status: string(),
  get threeDSecure() { return optional(SourceTypeThreeDSecureSchema) },
  type: string(),
  usage: optional(string()),
  get wechat() { return optional(SourceTypeWechatSchema) },
}));