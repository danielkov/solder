import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceCustomText } from './TerminalReaderReaderResourceCustomText';
import { TerminalReaderReaderResourceCustomTextSchema } from './TerminalReaderReaderResourceCustomText';
import type { TerminalReaderReaderResourceEmail } from './TerminalReaderReaderResourceEmail';
import { TerminalReaderReaderResourceEmailSchema } from './TerminalReaderReaderResourceEmail';
import type { TerminalReaderReaderResourceNumeric } from './TerminalReaderReaderResourceNumeric';
import { TerminalReaderReaderResourceNumericSchema } from './TerminalReaderReaderResourceNumeric';
import type { TerminalReaderReaderResourcePhone } from './TerminalReaderReaderResourcePhone';
import { TerminalReaderReaderResourcePhoneSchema } from './TerminalReaderReaderResourcePhone';
import type { TerminalReaderReaderResourceSelection } from './TerminalReaderReaderResourceSelection';
import { TerminalReaderReaderResourceSelectionSchema } from './TerminalReaderReaderResourceSelection';
import type { TerminalReaderReaderResourceSignature } from './TerminalReaderReaderResourceSignature';
import { TerminalReaderReaderResourceSignatureSchema } from './TerminalReaderReaderResourceSignature';
import type { TerminalReaderReaderResourceText } from './TerminalReaderReaderResourceText';
import { TerminalReaderReaderResourceTextSchema } from './TerminalReaderReaderResourceText';
import type { TerminalReaderReaderResourceToggle } from './TerminalReaderReaderResourceToggle';
import { TerminalReaderReaderResourceToggleSchema } from './TerminalReaderReaderResourceToggle';
/**
 * TerminalReaderReaderResourceInput
 *
 * Represents an input to be collected using the reader
 */
export interface TerminalReaderReaderResourceInput {
  /**
   * Default text of input being collected.
   */
  customText?: TerminalReaderReaderResourceCustomText;
  /**
   * TerminalReaderReaderResourceEmail
   *
   * Information about a email being collected using a reader
   */
  email?: TerminalReaderReaderResourceEmail;
  /**
   * TerminalReaderReaderResourceNumeric
   *
   * Information about a number being collected using a reader
   */
  numeric?: TerminalReaderReaderResourceNumeric;
  /**
   * TerminalReaderReaderResourcePhone
   *
   * Information about a phone number being collected using a reader
   */
  phone?: TerminalReaderReaderResourcePhone;
  /**
   * Indicate that this input is required, disabling the skip button.
   */
  required?: boolean;
  /**
   * TerminalReaderReaderResourceSelection
   *
   * Information about a selection being collected using a reader
   */
  selection?: TerminalReaderReaderResourceSelection;
  /**
   * TerminalReaderReaderResourceSignature
   *
   * Information about a signature being collected using a reader
   */
  signature?: TerminalReaderReaderResourceSignature;
  /**
   * Indicate that this input was skipped by the user.
   */
  skipped?: boolean;
  /**
   * TerminalReaderReaderResourceText
   *
   * Information about text being collected using a reader
   */
  text?: TerminalReaderReaderResourceText;
  /**
   * List of toggles being collected. Values are present if collection is complete.
   */
  toggles?: Array<TerminalReaderReaderResourceToggle>;
  /**
   * Type of input being collected.
   */
  type: string;
}

export const TerminalReaderReaderResourceInputSchema: TypedSchema<TerminalReaderReaderResourceInput> = typed<TerminalReaderReaderResourceInput>(object({
  get customText() { return optional(TerminalReaderReaderResourceCustomTextSchema) },
  get email() { return optional(TerminalReaderReaderResourceEmailSchema) },
  get numeric() { return optional(TerminalReaderReaderResourceNumericSchema) },
  get phone() { return optional(TerminalReaderReaderResourcePhoneSchema) },
  required: optional(boolean()),
  get selection() { return optional(TerminalReaderReaderResourceSelectionSchema) },
  get signature() { return optional(TerminalReaderReaderResourceSignatureSchema) },
  skipped: optional(boolean()),
  get text() { return optional(TerminalReaderReaderResourceTextSchema) },
  get toggles() { return optional(array(TerminalReaderReaderResourceToggleSchema)) },
  type: string(),
}));