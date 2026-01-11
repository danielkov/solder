import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostTerminalLocationsLocationRequestAddress } from './PostTerminalLocationsLocationRequestAddress';
import { PostTerminalLocationsLocationRequestAddressSchema } from './PostTerminalLocationsLocationRequestAddress';
import type { PostTerminalLocationsLocationRequestConfigurationOverrides } from './PostTerminalLocationsLocationRequestConfigurationOverrides';
import { PostTerminalLocationsLocationRequestConfigurationOverridesSchema } from './PostTerminalLocationsLocationRequestConfigurationOverrides';
import type { PostTerminalLocationsLocationRequestDisplayName } from './PostTerminalLocationsLocationRequestDisplayName';
import { PostTerminalLocationsLocationRequestDisplayNameSchema } from './PostTerminalLocationsLocationRequestDisplayName';
import type { PostTerminalLocationsLocationRequestDisplayNameKana } from './PostTerminalLocationsLocationRequestDisplayNameKana';
import { PostTerminalLocationsLocationRequestDisplayNameKanaSchema } from './PostTerminalLocationsLocationRequestDisplayNameKana';
import type { PostTerminalLocationsLocationRequestDisplayNameKanji } from './PostTerminalLocationsLocationRequestDisplayNameKanji';
import { PostTerminalLocationsLocationRequestDisplayNameKanjiSchema } from './PostTerminalLocationsLocationRequestDisplayNameKanji';
import type { PostTerminalLocationsLocationRequestPhone } from './PostTerminalLocationsLocationRequestPhone';
import { PostTerminalLocationsLocationRequestPhoneSchema } from './PostTerminalLocationsLocationRequestPhone';
import type { PostTerminalLocationsRequestAddressKana } from './PostTerminalLocationsRequestAddressKana';
import { PostTerminalLocationsRequestAddressKanaSchema } from './PostTerminalLocationsRequestAddressKana';
import type { PostTerminalLocationsRequestAddressKanji } from './PostTerminalLocationsRequestAddressKanji';
import { PostTerminalLocationsRequestAddressKanjiSchema } from './PostTerminalLocationsRequestAddressKanji';
export interface PostTerminalLocationsLocationRequest {
  /**
   * optional_fields_address
   *
   * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
   */
  address?: PostTerminalLocationsLocationRequestAddress;
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
  configurationOverrides?: PostTerminalLocationsLocationRequestConfigurationOverrides;
  /**
   * A name for the location.
   */
  displayName?: PostTerminalLocationsLocationRequestDisplayName;
  /**
   * The Kana variation of the name for the location (Japan only).
   */
  displayNameKana?: PostTerminalLocationsLocationRequestDisplayNameKana;
  /**
   * The Kanji variation of the name for the location (Japan only).
   */
  displayNameKanji?: PostTerminalLocationsLocationRequestDisplayNameKanji;
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
  phone?: PostTerminalLocationsLocationRequestPhone;
}

export const PostTerminalLocationsLocationRequestSchema: TypedSchema<PostTerminalLocationsLocationRequest> = typed<PostTerminalLocationsLocationRequest>(object({
  get address() { return optional(PostTerminalLocationsLocationRequestAddressSchema) },
  get addressKana() { return optional(PostTerminalLocationsRequestAddressKanaSchema) },
  get addressKanji() { return optional(PostTerminalLocationsRequestAddressKanjiSchema) },
  get configurationOverrides() { return optional(PostTerminalLocationsLocationRequestConfigurationOverridesSchema) },
  get displayName() { return optional(PostTerminalLocationsLocationRequestDisplayNameSchema) },
  get displayNameKana() { return optional(PostTerminalLocationsLocationRequestDisplayNameKanaSchema) },
  get displayNameKanji() { return optional(PostTerminalLocationsLocationRequestDisplayNameKanjiSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get phone() { return optional(PostTerminalLocationsLocationRequestPhoneSchema) },
}));