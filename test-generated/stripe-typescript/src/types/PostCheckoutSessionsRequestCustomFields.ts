import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsObject } from './PostCheckoutSessionsRequestCustomFieldsObject';
import { PostCheckoutSessionsRequestCustomFieldsObjectSchema } from './PostCheckoutSessionsRequestCustomFieldsObject';
export type PostCheckoutSessionsRequestCustomFields = Array<PostCheckoutSessionsRequestCustomFieldsObject> | string;

export const PostCheckoutSessionsRequestCustomFieldsSchema: TypedSchema<PostCheckoutSessionsRequestCustomFields> = typed<PostCheckoutSessionsRequestCustomFields>(union(array(PostCheckoutSessionsRequestCustomFieldsObjectSchema), string()));