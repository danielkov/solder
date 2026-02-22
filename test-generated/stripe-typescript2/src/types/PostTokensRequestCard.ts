import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTokensRequestCardObject } from './PostTokensRequestCardObject';
import { PostTokensRequestCardObjectSchema } from './PostTokensRequestCardObject';
/**
 * The card this token will represent. If you also pass in a customer, the card must be the ID of a card belonging to the customer. Otherwise, if you do not pass in a customer, this is a dictionary containing a user's credit card details, with the options described below.
 */
export type PostTokensRequestCard = PostTokensRequestCardObject | string;

export const PostTokensRequestCardSchema: TypedSchema<PostTokensRequestCard> = typed<PostTokensRequestCard>(union(PostTokensRequestCardObjectSchema, string()));
