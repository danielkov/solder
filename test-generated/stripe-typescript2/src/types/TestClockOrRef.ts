import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { TestHelpersTestClock } from './TestHelpersTestClock';
import { TestHelpersTestClockSchema } from './TestHelpersTestClock';
/**
 * ID of the test clock this credit balance transaction belongs to.
 */
export type TestClockOrRef = string | TestHelpersTestClock;

export const TestClockOrRefSchema: TypedSchema<TestClockOrRef> = typed<TestClockOrRef>(union(string(), TestHelpersTestClockSchema));
