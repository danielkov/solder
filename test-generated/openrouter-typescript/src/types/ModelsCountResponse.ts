import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { DataProperty2 } from './DataProperty2';
import { DataProperty2Schema } from './DataProperty2';
/**
 * Model count data
 */
export interface ModelsCountResponse {
  /**
   * Model count data
   */
  data: DataProperty2;
}

export const ModelsCountResponseSchema: TypedSchema<ModelsCountResponse> = typed<ModelsCountResponse>(object({
  data: DataProperty2Schema,
}));