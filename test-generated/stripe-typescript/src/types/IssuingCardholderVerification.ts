import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { IssuingCardholderIdDocument } from './IssuingCardholderIdDocument';
import { IssuingCardholderIdDocumentSchema } from './IssuingCardholderIdDocument';
/**
 * IssuingCardholderVerification
 *
 * 
 */
export interface IssuingCardholderVerification {
  /**
   * An identifying document, either a passport or local ID card.
   */
  document?: IssuingCardholderIdDocument;
}

export const IssuingCardholderVerificationSchema: TypedSchema<IssuingCardholderVerification> = typed<IssuingCardholderVerification>(object({
  get document() { return optional(IssuingCardholderIdDocumentSchema) },
}));