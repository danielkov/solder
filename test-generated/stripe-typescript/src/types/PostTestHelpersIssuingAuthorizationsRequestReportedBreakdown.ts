import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsRequestFuel } from './PostTestHelpersIssuingAuthorizationsRequestFuel';
import { PostTestHelpersIssuingAuthorizationsRequestFuelSchema } from './PostTestHelpersIssuingAuthorizationsRequestFuel';
import type { PostTestHelpersIssuingAuthorizationsRequestNonFuel } from './PostTestHelpersIssuingAuthorizationsRequestNonFuel';
import { PostTestHelpersIssuingAuthorizationsRequestNonFuelSchema } from './PostTestHelpersIssuingAuthorizationsRequestNonFuel';
import type { PostTestHelpersIssuingAuthorizationsRequestTax } from './PostTestHelpersIssuingAuthorizationsRequestTax';
import { PostTestHelpersIssuingAuthorizationsRequestTaxSchema } from './PostTestHelpersIssuingAuthorizationsRequestTax';
/**
 * fleet_reported_breakdown_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown {
  /**
   * fleet_reported_breakdown_fuel_specs
   */
  fuel?: PostTestHelpersIssuingAuthorizationsRequestFuel;
  /**
   * fleet_reported_breakdown_non_fuel_specs
   */
  nonFuel?: PostTestHelpersIssuingAuthorizationsRequestNonFuel;
  /**
   * fleet_reported_breakdown_tax_specs
   */
  tax?: PostTestHelpersIssuingAuthorizationsRequestTax;
}

export const PostTestHelpersIssuingAuthorizationsRequestReportedBreakdownSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown> = typed<PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown>(object({
  get fuel() { return optional(PostTestHelpersIssuingAuthorizationsRequestFuelSchema) },
  get nonFuel() { return optional(PostTestHelpersIssuingAuthorizationsRequestNonFuelSchema) },
  get tax() { return optional(PostTestHelpersIssuingAuthorizationsRequestTaxSchema) },
}));