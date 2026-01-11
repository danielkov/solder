import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons } from './PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons';
import { PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasonsSchema } from './PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons';
export interface PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * rejection_reasons_param
   *
   * The reason(s) the personalization design was rejected.
   */
  rejectionReasons: PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons;
}

export const PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestSchema: TypedSchema<PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequest> = typed<PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequest>(object({
  expand: optional(array(string())),
  rejectionReasons: PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasonsSchema,
}));