import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingNetworkTokenAddress } from './IssuingNetworkTokenAddress';
import { IssuingNetworkTokenAddressSchema } from './IssuingNetworkTokenAddress';
/**
 * IssuingNetworkTokenWalletProvider
 *
 * 
 */
export interface IssuingNetworkTokenWalletProvider {
  /**
   * The wallet provider-given account ID of the digital wallet the token belongs to.
   */
  accountId?: string;
  /**
   * An evaluation on the trustworthiness of the wallet account between 1 and 5. A higher score indicates more trustworthy.
   */
  accountTrustScore?: number;
  /**
   * The method used for tokenizing a card.
   */
  cardNumberSource?: string;
  /**
   * IssuingNetworkTokenAddress
   *
   * 
   */
  cardholderAddress?: IssuingNetworkTokenAddress;
  /**
   * The name of the cardholder tokenizing the card.
   */
  cardholderName?: string;
  /**
   * An evaluation on the trustworthiness of the device. A higher score indicates more trustworthy.
   */
  deviceTrustScore?: number;
  /**
   * The hashed email address of the cardholder's account with the wallet provider.
   */
  hashedAccountEmailAddress?: string;
  /**
   * The reasons for suggested tokenization given by the card network.
   */
  reasonCodes?: Array<string>;
  /**
   * The recommendation on responding to the tokenization request.
   */
  suggestedDecision?: string;
  /**
   * The version of the standard for mapping reason codes followed by the wallet provider.
   */
  suggestedDecisionVersion?: string;
}

export const IssuingNetworkTokenWalletProviderSchema: TypedSchema<IssuingNetworkTokenWalletProvider> = typed<IssuingNetworkTokenWalletProvider>(object({
  accountId: optional(string()),
  accountTrustScore: optional(number()),
  cardNumberSource: optional(string()),
  get cardholderAddress() { return optional(IssuingNetworkTokenAddressSchema) },
  cardholderName: optional(string()),
  deviceTrustScore: optional(number()),
  hashedAccountEmailAddress: optional(string()),
  reasonCodes: optional(array(string())),
  suggestedDecision: optional(string()),
  suggestedDecisionVersion: optional(string()),
}));