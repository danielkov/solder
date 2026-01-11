import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalSubscriptionCancellationReason
 *
 * 
 */
export interface PortalSubscriptionCancellationReason {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * Which cancellation reasons will be given as options to the customer.
   */
  options: Array<string>;
}

export const PortalSubscriptionCancellationReasonSchema: TypedSchema<PortalSubscriptionCancellationReason> = typed<PortalSubscriptionCancellationReason>(object({
  enabled: boolean(),
  options: array(string()),
}));