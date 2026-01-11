import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 *
 * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
 */
export interface PostChargesRequestTransferData {
  amount?: number;
  destination: string;
}

export const PostChargesRequestTransferDataSchema: TypedSchema<PostChargesRequestTransferData> = typed<PostChargesRequestTransferData>(object({
  amount: optional(number()),
  destination: string(),
}));