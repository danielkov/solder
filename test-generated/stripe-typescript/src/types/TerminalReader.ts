import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LocationOrRef } from './LocationOrRef';
import { LocationOrRefSchema } from './LocationOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TerminalReaderReaderResourceReaderAction } from './TerminalReaderReaderResourceReaderAction';
import { TerminalReaderReaderResourceReaderActionSchema } from './TerminalReaderReaderResourceReaderAction';
/**
 * TerminalReaderReader
 *
 * A Reader represents a physical device for accepting payment details.

Related guide: [Connecting to a reader](https://stripe.com/docs/terminal/payments/connect-reader)
 */
export interface TerminalReader {
  /**
   * The most recent action performed by the reader.
   */
  action?: TerminalReaderReaderResourceReaderAction;
  /**
   * The current software version of the reader.
   */
  deviceSwVersion?: string;
  /**
   * Device type of the reader.
   */
  deviceType: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The local IP address of the reader.
   */
  ipAddress?: string;
  /**
   * Custom label given to the reader for easier identification.
   */
  label: string;
  /**
   * The last time this reader reported to Stripe backend.
   */
  lastSeenAt?: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The location identifier of the reader.
   */
  location?: LocationOrRef;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Serial number of the reader.
   */
  serialNumber: string;
  /**
   * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
   */
  status?: string;
}

export const TerminalReaderSchema: TypedSchema<TerminalReader> = typed<TerminalReader>(object({
  get action() { return optional(TerminalReaderReaderResourceReaderActionSchema) },
  deviceSwVersion: optional(string()),
  deviceType: string(),
  id: string(),
  ipAddress: optional(string()),
  label: string(),
  lastSeenAt: optional(number()),
  livemode: boolean(),
  get location() { return optional(LocationOrRefSchema) },
  metadata: MetadataPropertySchema,
  object: string(),
  serialNumber: string(),
  status: optional(string()),
}));