import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * created_param
 */
export interface GetForwardingRequestsObject {
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}

export const GetForwardingRequestsObjectSchema: TypedSchema<GetForwardingRequestsObject> = typed<GetForwardingRequestsObject>(object({
  gt: optional(number()),
  gte: optional(number()),
  lt: optional(number()),
  lte: optional(number()),
}));