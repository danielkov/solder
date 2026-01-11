import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorizationFleetFuelPriceData } from './IssuingAuthorizationFleetFuelPriceData';
import { IssuingAuthorizationFleetFuelPriceDataSchema } from './IssuingAuthorizationFleetFuelPriceData';
import type { IssuingAuthorizationFleetNonFuelPriceData } from './IssuingAuthorizationFleetNonFuelPriceData';
import { IssuingAuthorizationFleetNonFuelPriceDataSchema } from './IssuingAuthorizationFleetNonFuelPriceData';
import type { IssuingAuthorizationFleetTaxData } from './IssuingAuthorizationFleetTaxData';
import { IssuingAuthorizationFleetTaxDataSchema } from './IssuingAuthorizationFleetTaxData';
/**
 * IssuingAuthorizationFleetReportedBreakdown
 *
 * 
 */
export interface IssuingAuthorizationFleetReportedBreakdown {
  /**
   * Breakdown of fuel portion of the purchase.
   */
  fuel?: IssuingAuthorizationFleetFuelPriceData;
  /**
   * Breakdown of non-fuel portion of the purchase.
   */
  nonFuel?: IssuingAuthorizationFleetNonFuelPriceData;
  /**
   * Information about tax included in this transaction.
   */
  tax?: IssuingAuthorizationFleetTaxData;
}

export const IssuingAuthorizationFleetReportedBreakdownSchema: TypedSchema<IssuingAuthorizationFleetReportedBreakdown> = typed<IssuingAuthorizationFleetReportedBreakdown>(object({
  get fuel() { return optional(IssuingAuthorizationFleetFuelPriceDataSchema) },
  get nonFuel() { return optional(IssuingAuthorizationFleetNonFuelPriceDataSchema) },
  get tax() { return optional(IssuingAuthorizationFleetTaxDataSchema) },
}));