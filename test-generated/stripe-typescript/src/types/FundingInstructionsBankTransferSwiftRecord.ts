import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * FundingInstructionsBankTransferSwiftRecord
 *
 * SWIFT Records contain U.S. bank account details per the SWIFT format.
 */
export interface FundingInstructionsBankTransferSwiftRecord {
  /**
   * Address
   *
   * 
   */
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName: string;
  /**
   * The account number
   */
  accountNumber: string;
  /**
   * The account type
   */
  accountType: string;
  /**
   * Address
   *
   * 
   */
  bankAddress: Address;
  /**
   * The bank name
   */
  bankName: string;
  /**
   * The SWIFT code
   */
  swiftCode: string;
}

export const FundingInstructionsBankTransferSwiftRecordSchema: TypedSchema<FundingInstructionsBankTransferSwiftRecord> = typed<FundingInstructionsBankTransferSwiftRecord>(object({
  accountHolderAddress: AddressSchema,
  accountHolderName: string(),
  accountNumber: string(),
  accountType: string(),
  bankAddress: AddressSchema,
  bankName: string(),
  swiftCode: string(),
}));