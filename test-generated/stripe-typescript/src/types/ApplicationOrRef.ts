import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Application } from './Application';
import { ApplicationSchema } from './Application';
export type ApplicationOrRef = string | Application;

export const ApplicationOrRefSchema: TypedSchema<ApplicationOrRef> = typed<ApplicationOrRef>(union(string(), ApplicationSchema));