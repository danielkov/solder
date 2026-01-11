import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TerminalReaderReaderResourceInput } from './TerminalReaderReaderResourceInput';
import { TerminalReaderReaderResourceInputSchema } from './TerminalReaderReaderResourceInput';
/**
 * TerminalReaderReaderResourceCollectInputsAction
 *
 * Represents a reader action to collect customer inputs
 */
export interface TerminalReaderReaderResourceCollectInputsAction {
  /**
   * List of inputs to be collected.
   */
  inputs: Array<TerminalReaderReaderResourceInput>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
}

export const TerminalReaderReaderResourceCollectInputsActionSchema: TypedSchema<TerminalReaderReaderResourceCollectInputsAction> = typed<TerminalReaderReaderResourceCollectInputsAction>(object({
  inputs: array(TerminalReaderReaderResourceInputSchema),
  get metadata() { return optional(MetadataPropertySchema) },
}));