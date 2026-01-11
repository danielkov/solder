import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';

import type { InputModality } from './InputModality';
import { InputModalitySchema } from './InputModality';
import type { ModelGroup } from './ModelGroup';
import { ModelGroupSchema } from './ModelGroup';
import type { OutputModality } from './OutputModality';
import { OutputModalitySchema } from './OutputModality';
export interface ArchitectureUnion {
  /**
   * Supported input modalities
   */
  inputModalities: Array<InputModality>;
  /**
   * Instruction format type
   */
  instructType: string;
  /**
   * Primary modality of the model
   */
  modality: string;
  /**
   * Supported output modalities
   */
  outputModalities: Array<OutputModality>;
  /**
   * Tokenizer type used by the model
   */
  tokenizer: ModelGroup;
}

export const ArchitectureUnionSchema: TypedSchema<ArchitectureUnion> = typed<ArchitectureUnion>(object({
  inputModalities: array(InputModalitySchema),
  instructType: string(),
  modality: string(),
  outputModalities: array(OutputModalitySchema),
  tokenizer: ModelGroupSchema,
}));