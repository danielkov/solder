import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * GelatoRelatedPerson
 *
 * 
 */
export interface GelatoRelatedPerson {
  /**
   * Token referencing the associated Account of the related Person resource.
   */
  account: string;
  /**
   * Token referencing the related Person resource.
   */
  person: string;
}

export const GelatoRelatedPersonSchema: TypedSchema<GelatoRelatedPerson> = typed<GelatoRelatedPerson>(object({
  account: string(),
  person: string(),
}));