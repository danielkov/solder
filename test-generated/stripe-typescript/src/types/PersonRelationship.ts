import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PersonRelationship
 *
 * 
 */
export interface PersonRelationship {
  /**
   * Whether the person is the authorizer of the account's representative.
   */
  authorizer?: boolean;
  /**
   * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
   */
  director?: boolean;
  /**
   * Whether the person has significant responsibility to control, manage, or direct the organization.
   */
  executive?: boolean;
  /**
   * Whether the person is the legal guardian of the account's representative.
   */
  legalGuardian?: boolean;
  /**
   * Whether the person is an owner of the account’s legal entity.
   */
  owner?: boolean;
  /**
   * The percent owned by the person of the account's legal entity.
   */
  percentOwnership?: number;
  /**
   * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
   */
  representative?: boolean;
  /**
   * The person's title (e.g., CEO, Support Engineer).
   */
  title?: string;
}

export const PersonRelationshipSchema: TypedSchema<PersonRelationship> = typed<PersonRelationship>(object({
  authorizer: optional(boolean()),
  director: optional(boolean()),
  executive: optional(boolean()),
  legalGuardian: optional(boolean()),
  owner: optional(boolean()),
  percentOwnership: optional(number()),
  representative: optional(boolean()),
  title: optional(string()),
}));