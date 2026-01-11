import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { GelatoSessionDocumentOptions } from './GelatoSessionDocumentOptions';
import { GelatoSessionDocumentOptionsSchema } from './GelatoSessionDocumentOptions';
import type { GelatoSessionEmailOptions } from './GelatoSessionEmailOptions';
import { GelatoSessionEmailOptionsSchema } from './GelatoSessionEmailOptions';
import type { GelatoSessionIdNumberOptions } from './GelatoSessionIdNumberOptions';
import { GelatoSessionIdNumberOptionsSchema } from './GelatoSessionIdNumberOptions';
import type { GelatoSessionMatchingOptions } from './GelatoSessionMatchingOptions';
import { GelatoSessionMatchingOptionsSchema } from './GelatoSessionMatchingOptions';
import type { GelatoSessionPhoneOptions } from './GelatoSessionPhoneOptions';
import { GelatoSessionPhoneOptionsSchema } from './GelatoSessionPhoneOptions';
/**
 * GelatoVerificationSessionOptions
 *
 * 
 */
export interface GelatoVerificationSessionOptions {
  /**
   * GelatoSessionDocumentOptions
   *
   * 
   */
  document?: GelatoSessionDocumentOptions;
  /**
   * GelatoSessionEmailOptions
   *
   * 
   */
  email?: GelatoSessionEmailOptions;
  /**
   * GelatoSessionIdNumberOptions
   *
   * 
   */
  idNumber?: GelatoSessionIdNumberOptions;
  /**
   * GelatoSessionMatchingOptions
   *
   * 
   */
  matching?: GelatoSessionMatchingOptions;
  /**
   * GelatoSessionPhoneOptions
   *
   * 
   */
  phone?: GelatoSessionPhoneOptions;
}

export const GelatoVerificationSessionOptionsSchema: TypedSchema<GelatoVerificationSessionOptions> = typed<GelatoVerificationSessionOptions>(object({
  get document() { return optional(GelatoSessionDocumentOptionsSchema) },
  get email() { return optional(GelatoSessionEmailOptionsSchema) },
  get idNumber() { return optional(GelatoSessionIdNumberOptionsSchema) },
  get matching() { return optional(GelatoSessionMatchingOptionsSchema) },
  get phone() { return optional(GelatoSessionPhoneOptionsSchema) },
}));