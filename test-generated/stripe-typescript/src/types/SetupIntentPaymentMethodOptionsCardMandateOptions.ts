import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * setup_intent_payment_method_options_card_mandate_options
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsCardMandateOptions {
  /**
   * Amount to be charged for future payments.
   */
  amount: number;
  /**
   * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
   */
  amountType: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * A description of the mandate or subscription that is meant to be displayed to the customer.
   */
  description?: string;
  /**
   * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
   */
  endDate?: number;
  /**
   * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
   */
  interval: string;
  /**
   * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
   */
  intervalCount?: number;
  /**
   * Unique identifier for the mandate or subscription.
   */
  reference: string;
  /**
   * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
   */
  startDate: number;
  /**
   * Specifies the type of mandates supported. Possible values are `india`.
   */
  supportedTypes?: Array<string>;
}

export const SetupIntentPaymentMethodOptionsCardMandateOptionsSchema: TypedSchema<SetupIntentPaymentMethodOptionsCardMandateOptions> = typed<SetupIntentPaymentMethodOptionsCardMandateOptions>(object({
  amount: number(),
  amountType: string(),
  currency: string(),
  description: optional(string()),
  endDate: optional(number()),
  interval: string(),
  intervalCount: optional(number()),
  reference: string(),
  startDate: number(),
  supportedTypes: optional(array(string())),
}));