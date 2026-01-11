import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * us_domestic_wire_tracking_details_params
 */
export interface PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire {
  chips?: string;
  imad?: string;
  omad?: string;
}

export const PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWireSchema: TypedSchema<PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire> = typed<PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire>(object({
  chips: optional(string()),
  imad: optional(string()),
  omad: optional(string()),
}));