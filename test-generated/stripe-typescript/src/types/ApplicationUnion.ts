import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Application } from './Application';
import { ApplicationSchema } from './Application';
import type { DeletedApplication } from './DeletedApplication';
import { DeletedApplicationSchema } from './DeletedApplication';
export type ApplicationUnion = string | Application | DeletedApplication;

export const ApplicationUnionSchema: TypedSchema<ApplicationUnion> = typed<ApplicationUnion>(union(string(), ApplicationSchema, DeletedApplicationSchema));