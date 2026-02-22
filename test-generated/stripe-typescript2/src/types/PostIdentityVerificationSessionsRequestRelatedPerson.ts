import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * related_person_param
 * 
 * Tokens referencing a Person resource and it's associated account.
 */
export interface PostIdentityVerificationSessionsRequestRelatedPerson {
  account: string;
  person: string;
}

export const PostIdentityVerificationSessionsRequestRelatedPersonSchema: TypedSchema<PostIdentityVerificationSessionsRequestRelatedPerson> = typed<PostIdentityVerificationSessionsRequestRelatedPerson>(object({ account: string(), person: string() }));
