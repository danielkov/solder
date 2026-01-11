import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCreditNotesRequestLinesItemTaxAmountsObject } from './PostCreditNotesRequestLinesItemTaxAmountsObject';
import { PostCreditNotesRequestLinesItemTaxAmountsObjectSchema } from './PostCreditNotesRequestLinesItemTaxAmountsObject';
export type PostCreditNotesRequestLinesItemTaxAmounts = Array<PostCreditNotesRequestLinesItemTaxAmountsObject> | string;

export const PostCreditNotesRequestLinesItemTaxAmountsSchema: TypedSchema<PostCreditNotesRequestLinesItemTaxAmounts> = typed<PostCreditNotesRequestLinesItemTaxAmounts>(union(array(PostCreditNotesRequestLinesItemTaxAmountsObjectSchema), string()));