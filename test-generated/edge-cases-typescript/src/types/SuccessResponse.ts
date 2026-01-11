import { TypedSchema, literal, object, optional, typed, unknown } from '@speakeasy-api/tonic';
export interface SuccessResponse {
  data?: any;
  success?: true;
}

export const SuccessResponseSchema: TypedSchema<SuccessResponse> = typed<SuccessResponse>(object({
  data: optional(unknown()),
  success: optional(literal(true)),
}));