import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { GelatoReportDocumentOptions } from './GelatoReportDocumentOptions';
import { GelatoReportDocumentOptionsSchema } from './GelatoReportDocumentOptions';
import type { GelatoReportIdNumberOptions } from './GelatoReportIdNumberOptions';
import { GelatoReportIdNumberOptionsSchema } from './GelatoReportIdNumberOptions';
/**
 * GelatoVerificationReportOptions
 *
 * 
 */
export interface GelatoVerificationReportOptions {
  /**
   * GelatoReportDocumentOptions
   *
   * 
   */
  document?: GelatoReportDocumentOptions;
  /**
   * GelatoReportIdNumberOptions
   *
   * 
   */
  idNumber?: GelatoReportIdNumberOptions;
}

export const GelatoVerificationReportOptionsSchema: TypedSchema<GelatoVerificationReportOptions> = typed<GelatoVerificationReportOptions>(object({
  get document() { return optional(GelatoReportDocumentOptionsSchema) },
  get idNumber() { return optional(GelatoReportIdNumberOptionsSchema) },
}));