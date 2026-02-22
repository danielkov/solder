import { array, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Model } from './Model';
import { ModelSchema } from './Model';
/**
 * List of available models
 */
export type ModelsListResponseData = Array<Model>;

export const ModelsListResponseDataSchema: TypedSchema<ModelsListResponseData> = typed<ModelsListResponseData>(array(ModelSchema));
