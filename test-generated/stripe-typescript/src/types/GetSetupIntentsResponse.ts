import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { SetupIntent } from './SetupIntent';
import { SetupIntentSchema } from './SetupIntent';
/**
 * PaymentFlowsSetupIntentList
 *
 * 
 */
export interface GetSetupIntentsResponse {
  data: Array<SetupIntent>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetSetupIntentsResponseSchema: TypedSchema<GetSetupIntentsResponse> = typed<GetSetupIntentsResponse>(object({
  data: array(SetupIntentSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));