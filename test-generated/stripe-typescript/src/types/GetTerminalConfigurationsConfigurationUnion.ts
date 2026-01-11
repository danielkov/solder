import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DeletedTerminalConfiguration } from './DeletedTerminalConfiguration';
import { DeletedTerminalConfigurationSchema } from './DeletedTerminalConfiguration';
import type { TerminalConfiguration } from './TerminalConfiguration';
import { TerminalConfigurationSchema } from './TerminalConfiguration';
export type GetTerminalConfigurationsConfigurationUnion = TerminalConfiguration | DeletedTerminalConfiguration;

export const GetTerminalConfigurationsConfigurationUnionSchema: TypedSchema<GetTerminalConfigurationsConfigurationUnion> = typed<GetTerminalConfigurationsConfigurationUnion>(union(TerminalConfigurationSchema, DeletedTerminalConfigurationSchema));