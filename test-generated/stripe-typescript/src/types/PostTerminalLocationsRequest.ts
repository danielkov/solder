import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostTerminalLocationsRequestAddress } from './PostTerminalLocationsRequestAddress';
import { PostTerminalLocationsRequestAddressSchema } from './PostTerminalLocationsRequestAddress';
import type { PostTerminalLocationsRequestAddressKana } from './PostTerminalLocationsRequestAddressKana';
import { PostTerminalLocationsRequestAddressKanaSchema } from './PostTerminalLocationsRequestAddressKana';
import type { PostTerminalLocationsRequestAddressKanji } from './PostTerminalLocationsRequestAddressKanji';
import { PostTerminalLocationsRequestAddressKanjiSchema } from './PostTerminalLocationsRequestAddressKanji';
export interface PostTerminalLocationsRequest {
  /**
   * create_location_address_param
   *
   * The full address of the location.
   */
  address?: PostTerminalLocationsRequestAddress;
  /**
   * japan_address_kana_specs
   *
   * The Kana variation of the full address of the location (Japan only).
   */
  addressKana?: PostTerminalLocationsRequestAddressKana;
  /**
   * japan_address_kanji_specs
   *
   * The Kanji variation of the full address of the location (Japan only).
   */
  addressKanji?: PostTerminalLocationsRequestAddressKanji;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: string;
  /**
   * A name for the location. Maximum length is 1000 characters.
   */
  displayName?: string;
  /**
   * The Kana variation of the name for the location (Japan only). Maximum length is 1000 characters.
   */
  displayNameKana?: string;
  /**
   * The Kanji variation of the name for the location (Japan only). Maximum length is 1000 characters.
   */
  displayNameKanji?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The phone number for the location.
   */
  phone?: string;
}

export const PostTerminalLocationsRequestSchema: TypedSchema<PostTerminalLocationsRequest> = typed<PostTerminalLocationsRequest>(object({
  get address() { return optional(PostTerminalLocationsRequestAddressSchema) },
  get addressKana() { return optional(PostTerminalLocationsRequestAddressKanaSchema) },
  get addressKanji() { return optional(PostTerminalLocationsRequestAddressKanjiSchema) },
  configurationOverrides: optional(string()),
  displayName: optional(string()),
  displayNameKana: optional(string()),
  displayNameKanji: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  phone: optional(string()),
}));