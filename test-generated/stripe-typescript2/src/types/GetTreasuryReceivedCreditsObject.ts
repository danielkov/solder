import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * linked_flows_param
 */
export interface GetTreasuryReceivedCreditsObject {
  sourceFlowType: string;
}

export const GetTreasuryReceivedCreditsObjectSchema: TypedSchema<GetTreasuryReceivedCreditsObject> = typed<GetTreasuryReceivedCreditsObject>(object({ sourceFlowType: string() }));
