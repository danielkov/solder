import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Application
 *
 * 
 */
export interface Application {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The name of the application.
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const ApplicationSchema: TypedSchema<Application> = typed<Application>(object({
  id: string(),
  name: optional(string()),
  object: string(),
}));