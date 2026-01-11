import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * network_data_specs
 *
 * Details about the authorization, such as identifiers, set by the card network.
 */
export interface PostTestHelpersIssuingAuthorizationsRequestNetworkData {
  acquiringInstitutionId?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestNetworkDataSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestNetworkData> = typed<PostTestHelpersIssuingAuthorizationsRequestNetworkData>(object({
  acquiringInstitutionId: optional(string()),
}));