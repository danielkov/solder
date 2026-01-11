import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostSourcesRequestMandate } from './PostSourcesRequestMandate';
import { PostSourcesRequestMandateSchema } from './PostSourcesRequestMandate';
import type { PostSourcesRequestOwner } from './PostSourcesRequestOwner';
import { PostSourcesRequestOwnerSchema } from './PostSourcesRequestOwner';
import type { PostSourcesRequestReceiver } from './PostSourcesRequestReceiver';
import { PostSourcesRequestReceiverSchema } from './PostSourcesRequestReceiver';
import type { PostSourcesRequestRedirect } from './PostSourcesRequestRedirect';
import { PostSourcesRequestRedirectSchema } from './PostSourcesRequestRedirect';
import type { PostSourcesRequestSourceOrder } from './PostSourcesRequestSourceOrder';
import { PostSourcesRequestSourceOrderSchema } from './PostSourcesRequestSourceOrder';
export interface PostSourcesRequest {
  /**
   * Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.
   */
  amount?: number;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
   */
  currency?: string;
  /**
   * The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
   */
  customer?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
   */
  flow?: string;
  /**
   * mandate_params
   *
   * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
   */
  mandate?: PostSourcesRequestMandate;
  metadata?: PostAccountsRequestMetadataObject;
  /**
   * The source to share.
   */
  originalSource?: string;
  /**
   * owner
   *
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: PostSourcesRequestOwner;
  /**
   * receiver_params
   *
   * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
   */
  receiver?: PostSourcesRequestReceiver;
  /**
   * redirect_params
   *
   * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
   */
  redirect?: PostSourcesRequestRedirect;
  /**
   * shallow_order_specs
   *
   * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
   */
  sourceOrder?: PostSourcesRequestSourceOrder;
  /**
   * An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
   */
  statementDescriptor?: string;
  /**
   * An optional token used to create the source. When passed, token properties will override source parameters.
   */
  token?: string;
  /**
   * The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
   */
  type?: string;
  usage?: string;
}

export const PostSourcesRequestSchema: TypedSchema<PostSourcesRequest> = typed<PostSourcesRequest>(object({
  amount: optional(number()),
  currency: optional(string()),
  customer: optional(string()),
  expand: optional(array(string())),
  flow: optional(string()),
  get mandate() { return optional(PostSourcesRequestMandateSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  originalSource: optional(string()),
  get owner() { return optional(PostSourcesRequestOwnerSchema) },
  get receiver() { return optional(PostSourcesRequestReceiverSchema) },
  get redirect() { return optional(PostSourcesRequestRedirectSchema) },
  get sourceOrder() { return optional(PostSourcesRequestSourceOrderSchema) },
  statementDescriptor: optional(string()),
  token: optional(string()),
  type: optional(string()),
  usage: optional(string()),
}));