import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * destination_specs
 */
export interface PostChargesRequestDestinationObject {
  account: string;
  amount?: number;
}

export const PostChargesRequestDestinationObjectSchema: TypedSchema<PostChargesRequestDestinationObject> = typed<PostChargesRequestDestinationObject>(object({
  account: string(),
  amount: optional(number()),
}));