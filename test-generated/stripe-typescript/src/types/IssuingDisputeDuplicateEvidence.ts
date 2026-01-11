import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
import type { CardStatementOrRef } from './CardStatementOrRef';
import { CardStatementOrRefSchema } from './CardStatementOrRef';
import type { CashReceiptOrRef } from './CashReceiptOrRef';
import { CashReceiptOrRefSchema } from './CashReceiptOrRef';
import type { CheckImageOrRef } from './CheckImageOrRef';
import { CheckImageOrRefSchema } from './CheckImageOrRef';
/**
 * IssuingDisputeDuplicateEvidence
 *
 * 
 */
export interface IssuingDisputeDuplicateEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
   */
  cardStatement?: CardStatementOrRef;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
   */
  cashReceipt?: CashReceiptOrRef;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
   */
  checkImage?: CheckImageOrRef;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string;
  /**
   * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
   */
  originalTransaction?: string;
}

export const IssuingDisputeDuplicateEvidenceSchema: TypedSchema<IssuingDisputeDuplicateEvidence> = typed<IssuingDisputeDuplicateEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  get cardStatement() { return optional(CardStatementOrRefSchema) },
  get cashReceipt() { return optional(CashReceiptOrRefSchema) },
  get checkImage() { return optional(CheckImageOrRefSchema) },
  explanation: optional(string()),
  originalTransaction: optional(string()),
}));