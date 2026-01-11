import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * InvoiceSettingCustomField
 *
 * 
 */
export interface InvoiceSettingCustomField {
  /**
   * The name of the custom field.
   */
  name: string;
  /**
   * The value of the custom field.
   */
  value: string;
}

export const InvoiceSettingCustomFieldSchema: TypedSchema<InvoiceSettingCustomField> = typed<InvoiceSettingCustomField>(object({
  name: string(),
  value: string(),
}));