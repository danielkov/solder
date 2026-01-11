import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { PaginationMeta } from './PaginationMeta';
import { PaginationMetaSchema } from './PaginationMeta';
import type { TestItem } from './TestItem';
import { TestItemSchema } from './TestItem';
export interface TestResponse {
  items: Array<TestItem>;
  pagination: PaginationMeta;
}

export const TestResponseSchema: TypedSchema<TestResponse> = typed<TestResponse>(object({
  items: array(TestItemSchema),
  pagination: PaginationMetaSchema,
}));