import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * period
 *
 * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
 */
export interface PostInvoiceitemsRequestPeriod {
  end: number;
  start: number;
}

export const PostInvoiceitemsRequestPeriodSchema: TypedSchema<PostInvoiceitemsRequestPeriod> = typed<PostInvoiceitemsRequestPeriod>(object({
  end: number(),
  start: number(),
}));