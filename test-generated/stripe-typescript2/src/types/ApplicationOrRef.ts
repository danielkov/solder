import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Application } from './Application';
import { ApplicationSchema } from './Application';
/**
 * ID of the Connect application that earned the fee.
 */
export type ApplicationOrRef = string | Application;

export const ApplicationOrRefSchema: TypedSchema<ApplicationOrRef> = typed<ApplicationOrRef>(union(string(), ApplicationSchema));
