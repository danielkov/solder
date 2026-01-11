import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { RefundNextActionDisplayDetails } from './RefundNextActionDisplayDetails';
import { RefundNextActionDisplayDetailsSchema } from './RefundNextActionDisplayDetails';
/**
 * RefundNextAction
 *
 * 
 */
export interface RefundNextAction {
  /**
   * RefundNextActionDisplayDetails
   *
   * 
   */
  displayDetails?: RefundNextActionDisplayDetails;
  /**
   * Type of the next action to perform.
   */
  type: string;
}

export const RefundNextActionSchema: TypedSchema<RefundNextAction> = typed<RefundNextAction>(object({
  get displayDetails() { return optional(RefundNextActionDisplayDetailsSchema) },
  type: string(),
}));