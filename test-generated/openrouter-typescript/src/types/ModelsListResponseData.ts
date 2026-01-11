import { TypedSchema, array, typed } from '@speakeasy-api/tonic';

import type { Model } from './Model';
import { ModelSchema } from './Model';
export type ModelsListResponseData = Array<Model>;

export const ModelsListResponseDataSchema: TypedSchema<ModelsListResponseData> = typed<ModelsListResponseData>(array(ModelSchema));