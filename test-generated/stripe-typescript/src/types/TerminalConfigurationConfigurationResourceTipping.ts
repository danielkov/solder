import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TerminalConfigurationConfigurationResourceCurrencySpecificConfig } from './TerminalConfigurationConfigurationResourceCurrencySpecificConfig';
import { TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema } from './TerminalConfigurationConfigurationResourceCurrencySpecificConfig';
/**
 * TerminalConfigurationConfigurationResourceTipping
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceTipping {
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  aed?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  aud?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  bgn?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  cad?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  chf?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  czk?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  dkk?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  eur?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  gbp?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  gip?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  hkd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  huf?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  jpy?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  mxn?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  myr?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  nok?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  nzd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  pln?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  ron?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  sek?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  sgd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
   *
   * 
   */
  usd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
}

export const TerminalConfigurationConfigurationResourceTippingSchema: TypedSchema<TerminalConfigurationConfigurationResourceTipping> = typed<TerminalConfigurationConfigurationResourceTipping>(object({
  get aed() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get aud() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get bgn() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get cad() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get chf() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get czk() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get dkk() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get eur() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get gbp() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get gip() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get hkd() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get huf() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get jpy() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get mxn() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get myr() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get nok() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get nzd() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get pln() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get ron() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get sek() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get sgd() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
  get usd() { return optional(TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema) },
}));