import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TestHelpersTestClock } from './TestHelpersTestClock';
import { TestHelpersTestClockSchema } from './TestHelpersTestClock';
export type TestClockOrRef = string | TestHelpersTestClock;

export const TestClockOrRefSchema: TypedSchema<TestClockOrRef> = typed<TestClockOrRef>(union(string(), TestHelpersTestClockSchema));