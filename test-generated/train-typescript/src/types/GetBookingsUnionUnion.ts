import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface GetBookingsUnionUnion {
  next?: string;
  prev?: string;
  self?: string;
}

export const GetBookingsUnionUnionSchema: TypedSchema<GetBookingsUnionUnion> = typed<GetBookingsUnionUnion>(object({
  next: optional(string()),
  prev: optional(string()),
  self: optional(string()),
}));