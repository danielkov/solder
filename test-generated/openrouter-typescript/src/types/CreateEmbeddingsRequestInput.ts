import { TypedSchema, array, number, string, typed, union } from '@speakeasy-api/tonic';

import type { CreateEmbeddingsRequestInputObject } from './CreateEmbeddingsRequestInputObject';
import { CreateEmbeddingsRequestInputObjectSchema } from './CreateEmbeddingsRequestInputObject';
export type CreateEmbeddingsRequestInput = string | Array<string> | Array<number> | Array<Array<number>> | Array<CreateEmbeddingsRequestInputObject>;

export const CreateEmbeddingsRequestInputSchema: TypedSchema<CreateEmbeddingsRequestInput> = typed<CreateEmbeddingsRequestInput>(union(string(), array(string()), array(number()), array(array(number())), array(CreateEmbeddingsRequestInputObjectSchema)));