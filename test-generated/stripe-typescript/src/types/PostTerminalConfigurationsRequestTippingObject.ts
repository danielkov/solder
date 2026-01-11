import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestTippingObjectAed } from './PostTerminalConfigurationsRequestTippingObjectAed';
import { PostTerminalConfigurationsRequestTippingObjectAedSchema } from './PostTerminalConfigurationsRequestTippingObjectAed';
/**
 * tipping
 */
export interface PostTerminalConfigurationsRequestTippingObject {
  /**
   * currency_specific_config
   */
  aed?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  aud?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  bgn?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  cad?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  chf?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  czk?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  dkk?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  eur?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  gbp?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  gip?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  hkd?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  huf?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  jpy?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  mxn?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  myr?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  nok?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  nzd?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  pln?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  ron?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  sek?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  sgd?: PostTerminalConfigurationsRequestTippingObjectAed;
  /**
   * currency_specific_config
   */
  usd?: PostTerminalConfigurationsRequestTippingObjectAed;
}

export const PostTerminalConfigurationsRequestTippingObjectSchema: TypedSchema<PostTerminalConfigurationsRequestTippingObject> = typed<PostTerminalConfigurationsRequestTippingObject>(object({
  get aed() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get aud() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get bgn() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get cad() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get chf() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get czk() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get dkk() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get eur() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get gbp() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get gip() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get hkd() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get huf() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get jpy() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get mxn() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get myr() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get nok() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get nzd() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get pln() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get ron() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get sek() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get sgd() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
  get usd() { return optional(PostTerminalConfigurationsRequestTippingObjectAedSchema) },
}));