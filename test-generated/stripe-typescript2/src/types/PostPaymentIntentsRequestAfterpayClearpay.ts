import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestAfterpayClearpayObject } from './PostPaymentIntentsRequestAfterpayClearpayObject';
import { PostPaymentIntentsRequestAfterpayClearpayObjectSchema } from './PostPaymentIntentsRequestAfterpayClearpayObject';
export type PostPaymentIntentsRequestAfterpayClearpay = PostPaymentIntentsRequestAfterpayClearpayObject | string;

export const PostPaymentIntentsRequestAfterpayClearpaySchema: TypedSchema<PostPaymentIntentsRequestAfterpayClearpay> = typed<PostPaymentIntentsRequestAfterpayClearpay>(union(PostPaymentIntentsRequestAfterpayClearpayObjectSchema, string()));
