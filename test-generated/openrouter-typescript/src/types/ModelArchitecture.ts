import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InputModality } from './InputModality';
import { InputModalitySchema } from './InputModality';
import type { ModelGroup } from './ModelGroup';
import { ModelGroupSchema } from './ModelGroup';
import type { OutputModality } from './OutputModality';
import { OutputModalitySchema } from './OutputModality';
/**
 * Model architecture information
 */
export interface ModelArchitecture {
  /**
   * Supported input modalities
   */
  inputModalities: Array<InputModality>;
  /**
   * Instruction format type
   */
  instructType?: string;
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
  tokenizer?: ModelGroup;
}

export const ModelArchitectureSchema: TypedSchema<ModelArchitecture> = typed<ModelArchitecture>(object({
  inputModalities: array(InputModalitySchema),
  instructType: optional(string()),
  modality: string(),
  outputModalities: array(OutputModalitySchema),
  get tokenizer() { return optional(ModelGroupSchema) },
}));