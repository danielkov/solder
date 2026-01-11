import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductRegistrationsResourceCountryOptionsDefaultStandard } from './TaxProductRegistrationsResourceCountryOptionsDefaultStandard';
import { TaxProductRegistrationsResourceCountryOptionsDefaultStandardSchema } from './TaxProductRegistrationsResourceCountryOptionsDefaultStandard';
/**
 * TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods {
  /**
   * TaxProductRegistrationsResourceCountryOptionsDefaultStandard
   *
   * 
   */
  standard?: TaxProductRegistrationsResourceCountryOptionsDefaultStandard;
  /**
   * Type of registration in `country`.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoodsSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods> = typed<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>(object({
  get standard() { return optional(TaxProductRegistrationsResourceCountryOptionsDefaultStandardSchema) },
  type: string(),
}));