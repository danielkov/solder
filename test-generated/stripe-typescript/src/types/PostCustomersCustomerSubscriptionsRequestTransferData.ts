import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 *
 * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
 */
export interface PostCustomersCustomerSubscriptionsRequestTransferData {
  amountPercent?: number;
  destination: string;
}

export const PostCustomersCustomerSubscriptionsRequestTransferDataSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestTransferData> = typed<PostCustomersCustomerSubscriptionsRequestTransferData>(object({
  amountPercent: optional(number()),
  destination: string(),
}));