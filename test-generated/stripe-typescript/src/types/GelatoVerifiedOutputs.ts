import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { GelatoDataVerifiedOutputsDate } from './GelatoDataVerifiedOutputsDate';
import { GelatoDataVerifiedOutputsDateSchema } from './GelatoDataVerifiedOutputsDate';
/**
 * GelatoVerifiedOutputs
 *
 * 
 */
export interface GelatoVerifiedOutputs {
  /**
   * The user's verified address.
   */
  address?: Address;
  /**
   * The user’s verified date of birth.
   */
  dob?: GelatoDataVerifiedOutputsDate;
  /**
   * The user's verified email address
   */
  email?: string;
  /**
   * The user's verified first name.
   */
  firstName?: string;
  /**
   * The user's verified id number.
   */
  idNumber?: string;
  /**
   * The user's verified id number type.
   */
  idNumberType?: string;
  /**
   * The user's verified last name.
   */
  lastName?: string;
  /**
   * The user's verified phone number
   */
  phone?: string;
  /**
   * The user's verified sex.
   */
  sex?: string;
  /**
   * The user's verified place of birth as it appears in the document.
   */
  unparsedPlaceOfBirth?: string;
  /**
   * The user's verified sex as it appears in the document.
   */
  unparsedSex?: string;
}

export const GelatoVerifiedOutputsSchema: TypedSchema<GelatoVerifiedOutputs> = typed<GelatoVerifiedOutputs>(object({
  get address() { return optional(AddressSchema) },
  get dob() { return optional(GelatoDataVerifiedOutputsDateSchema) },
  email: optional(string()),
  firstName: optional(string()),
  idNumber: optional(string()),
  idNumberType: optional(string()),
  lastName: optional(string()),
  phone: optional(string()),
  sex: optional(string()),
  unparsedPlaceOfBirth: optional(string()),
  unparsedSex: optional(string()),
}));