import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { IssuingTransactionFleetFuelPriceData } from './IssuingTransactionFleetFuelPriceData';
import { IssuingTransactionFleetFuelPriceDataSchema } from './IssuingTransactionFleetFuelPriceData';
import type { IssuingTransactionFleetNonFuelPriceData } from './IssuingTransactionFleetNonFuelPriceData';
import { IssuingTransactionFleetNonFuelPriceDataSchema } from './IssuingTransactionFleetNonFuelPriceData';
import type { IssuingTransactionFleetTaxData } from './IssuingTransactionFleetTaxData';
import { IssuingTransactionFleetTaxDataSchema } from './IssuingTransactionFleetTaxData';
/**
 * IssuingTransactionFleetReportedBreakdown
 *
 * 
 */
export interface IssuingTransactionFleetReportedBreakdown {
  /**
   * Breakdown of fuel portion of the purchase.
   */
  fuel?: IssuingTransactionFleetFuelPriceData;
  /**
   * Breakdown of non-fuel portion of the purchase.
   */
  nonFuel?: IssuingTransactionFleetNonFuelPriceData;
  /**
   * Information about tax included in this transaction.
   */
  tax?: IssuingTransactionFleetTaxData;
}

export const IssuingTransactionFleetReportedBreakdownSchema: TypedSchema<IssuingTransactionFleetReportedBreakdown> = typed<IssuingTransactionFleetReportedBreakdown>(object({
  get fuel() { return optional(IssuingTransactionFleetFuelPriceDataSchema) },
  get nonFuel() { return optional(IssuingTransactionFleetNonFuelPriceDataSchema) },
  get tax() { return optional(IssuingTransactionFleetTaxDataSchema) },
}));