import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalCustomerUpdate
 *
 * 
 */
export interface PortalCustomerUpdate {
  /**
   * The types of customer updates that are supported. When empty, customers are not updateable.
   */
  allowedUpdates: Array<string>;
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
}

export const PortalCustomerUpdateSchema: TypedSchema<PortalCustomerUpdate> = typed<PortalCustomerUpdate>(object({
  allowedUpdates: array(string()),
  enabled: boolean(),
}));