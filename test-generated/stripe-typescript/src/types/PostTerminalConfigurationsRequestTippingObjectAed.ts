import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * currency_specific_config
 */
export interface PostTerminalConfigurationsRequestTippingObjectAed {
  fixedAmounts?: Array<number>;
  percentages?: Array<number>;
  smartTipThreshold?: number;
}

export const PostTerminalConfigurationsRequestTippingObjectAedSchema: TypedSchema<PostTerminalConfigurationsRequestTippingObjectAed> = typed<PostTerminalConfigurationsRequestTippingObjectAed>(object({
  fixedAmounts: optional(array(number())),
  percentages: optional(array(number())),
  smartTipThreshold: optional(number()),
}));