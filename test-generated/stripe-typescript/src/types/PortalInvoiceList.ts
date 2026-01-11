import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PortalInvoiceList
 *
 * 
 */
export interface PortalInvoiceList {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
}

export const PortalInvoiceListSchema: TypedSchema<PortalInvoiceList> = typed<PortalInvoiceList>(object({
  enabled: boolean(),
}));