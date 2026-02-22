import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface TestItem {
  id?: string;
  name?: string;
}

export const TestItemSchema: TypedSchema<TestItem> = typed<TestItem>(object({ id: optional(string()), name: optional(string()) }));
