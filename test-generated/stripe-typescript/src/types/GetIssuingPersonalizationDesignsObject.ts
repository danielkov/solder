import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * preferences_list_param
 */
export interface GetIssuingPersonalizationDesignsObject {
  isDefault?: boolean;
  isPlatformDefault?: boolean;
}

export const GetIssuingPersonalizationDesignsObjectSchema: TypedSchema<GetIssuingPersonalizationDesignsObject> = typed<GetIssuingPersonalizationDesignsObject>(object({
  isDefault: optional(boolean()),
  isPlatformDefault: optional(boolean()),
}));