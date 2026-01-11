import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 *
 * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
 */
export interface PostChargesChargeCaptureRequestTransferData {
  amount?: number;
}

export const PostChargesChargeCaptureRequestTransferDataSchema: TypedSchema<PostChargesChargeCaptureRequestTransferData> = typed<PostChargesChargeCaptureRequestTransferData>(object({
  amount: optional(number()),
}));