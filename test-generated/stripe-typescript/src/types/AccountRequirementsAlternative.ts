import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountRequirementsAlternative
 *
 * 
 */
export interface AccountRequirementsAlternative {
  /**
   * Fields that can be provided to satisfy all fields in `original_fields_due`.
   */
  alternativeFieldsDue: Array<string>;
  /**
   * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
   */
  originalFieldsDue: Array<string>;
}

export const AccountRequirementsAlternativeSchema: TypedSchema<AccountRequirementsAlternative> = typed<AccountRequirementsAlternative>(object({
  alternativeFieldsDue: array(string()),
  originalFieldsDue: array(string()),
}));