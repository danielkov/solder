import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FundingInstructionsBankTransferAbaRecord } from './FundingInstructionsBankTransferAbaRecord';
import { FundingInstructionsBankTransferAbaRecordSchema } from './FundingInstructionsBankTransferAbaRecord';
import type { FundingInstructionsBankTransferIbanRecord } from './FundingInstructionsBankTransferIbanRecord';
import { FundingInstructionsBankTransferIbanRecordSchema } from './FundingInstructionsBankTransferIbanRecord';
import type { FundingInstructionsBankTransferSortCodeRecord } from './FundingInstructionsBankTransferSortCodeRecord';
import { FundingInstructionsBankTransferSortCodeRecordSchema } from './FundingInstructionsBankTransferSortCodeRecord';
import type { FundingInstructionsBankTransferSpeiRecord } from './FundingInstructionsBankTransferSpeiRecord';
import { FundingInstructionsBankTransferSpeiRecordSchema } from './FundingInstructionsBankTransferSpeiRecord';
import type { FundingInstructionsBankTransferSwiftRecord } from './FundingInstructionsBankTransferSwiftRecord';
import { FundingInstructionsBankTransferSwiftRecordSchema } from './FundingInstructionsBankTransferSwiftRecord';
import type { FundingInstructionsBankTransferZenginRecord } from './FundingInstructionsBankTransferZenginRecord';
import { FundingInstructionsBankTransferZenginRecordSchema } from './FundingInstructionsBankTransferZenginRecord';
/**
 * FundingInstructionsBankTransferFinancialAddress
 *
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export interface FundingInstructionsBankTransferFinancialAddress {
  /**
   * FundingInstructionsBankTransferABARecord
   *
   * ABA Records contain U.S. bank account details per the ABA format.
   */
  aba?: FundingInstructionsBankTransferAbaRecord;
  /**
   * FundingInstructionsBankTransferIbanRecord
   *
   * Iban Records contain E.U. bank account details per the SEPA format.
   */
  iban?: FundingInstructionsBankTransferIbanRecord;
  /**
   * FundingInstructionsBankTransferSortCodeRecord
   *
   * Sort Code Records contain U.K. bank account details per the sort code format.
   */
  sortCode?: FundingInstructionsBankTransferSortCodeRecord;
  /**
   * FundingInstructionsBankTransferSpeiRecord
   *
   * SPEI Records contain Mexico bank account details per the SPEI format.
   */
  spei?: FundingInstructionsBankTransferSpeiRecord;
  /**
   * The payment networks supported by this FinancialAddress
   */
  supportedNetworks?: Array<string>;
  /**
   * FundingInstructionsBankTransferSwiftRecord
   *
   * SWIFT Records contain U.S. bank account details per the SWIFT format.
   */
  swift?: FundingInstructionsBankTransferSwiftRecord;
  /**
   * The type of financial address
   */
  type: string;
  /**
   * FundingInstructionsBankTransferZenginRecord
   *
   * Zengin Records contain Japan bank account details per the Zengin format.
   */
  zengin?: FundingInstructionsBankTransferZenginRecord;
}

export const FundingInstructionsBankTransferFinancialAddressSchema: TypedSchema<FundingInstructionsBankTransferFinancialAddress> = typed<FundingInstructionsBankTransferFinancialAddress>(object({
  get aba() { return optional(FundingInstructionsBankTransferAbaRecordSchema) },
  get iban() { return optional(FundingInstructionsBankTransferIbanRecordSchema) },
  get sortCode() { return optional(FundingInstructionsBankTransferSortCodeRecordSchema) },
  get spei() { return optional(FundingInstructionsBankTransferSpeiRecordSchema) },
  supportedNetworks: optional(array(string())),
  get swift() { return optional(FundingInstructionsBankTransferSwiftRecordSchema) },
  type: string(),
  get zengin() { return optional(FundingInstructionsBankTransferZenginRecordSchema) },
}));