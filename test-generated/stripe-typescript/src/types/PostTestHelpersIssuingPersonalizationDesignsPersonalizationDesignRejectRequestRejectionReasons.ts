import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * rejection_reasons_param
 *
 * The reason(s) the personalization design was rejected.
 */
export interface PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons {
  cardLogo?: Array<string>;
  carrierText?: Array<string>;
}

export const PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasonsSchema: TypedSchema<PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons> = typed<PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons>(object({
  cardLogo: optional(array(string())),
  carrierText: optional(array(string())),
}));