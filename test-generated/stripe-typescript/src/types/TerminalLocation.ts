import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { LegalEntityJapanAddress } from './LegalEntityJapanAddress';
import { LegalEntityJapanAddressSchema } from './LegalEntityJapanAddress';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * TerminalLocationLocation
 *
 * A Location represents a grouping of readers.

Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
 */
export interface TerminalLocation {
  /**
   * Address
   *
   * 
   */
  address: Address;
  /**
   * LegalEntityJapanAddress
   *
   * 
   */
  addressKana?: LegalEntityJapanAddress;
  /**
   * LegalEntityJapanAddress
   *
   * 
   */
  addressKanji?: LegalEntityJapanAddress;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: string;
  /**
   * The display name of the location.
   */
  displayName: string;
  /**
   * The Kana variation of the display name of the location.
   */
  displayNameKana?: string;
  /**
   * The Kanji variation of the display name of the location.
   */
  displayNameKanji?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The phone number of the location.
   */
  phone?: string;
}

export const TerminalLocationSchema: TypedSchema<TerminalLocation> = typed<TerminalLocation>(object({
  address: AddressSchema,
  get addressKana() { return optional(LegalEntityJapanAddressSchema) },
  get addressKanji() { return optional(LegalEntityJapanAddressSchema) },
  configurationOverrides: optional(string()),
  displayName: string(),
  displayNameKana: optional(string()),
  displayNameKanji: optional(string()),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  phone: optional(string()),
}));