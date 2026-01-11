import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type EndpointStatus = 0 | -1 | -2 | -3 | -5 | -10;

export const EndpointStatusSchema: TypedSchema<EndpointStatus> = typed<EndpointStatus>(union(
  literal(0),
  literal(-1),
  literal(-2),
  literal(-3),
  literal(-5),
  literal(-10),
));

/**
 * Enum values for EndpointStatus.
 * Use these constants for type-safe comparisons.
 */
export const EndpointStatus = {
  VALUE0: 0 as const,
  VALUE1: -1 as const,
  VALUE2: -2 as const,
  VALUE3: -3 as const,
  VALUE4: -5 as const,
  VALUE5: -10 as const,
} as const;