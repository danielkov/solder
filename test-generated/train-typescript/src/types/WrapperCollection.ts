import { TypedSchema, array, object, optional, typed, unknown } from '@speakeasy-api/tonic';
/**
 * This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).
 */
export interface WrapperCollection {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<any>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: any;
}

export const WrapperCollectionSchema: TypedSchema<WrapperCollection> = typed<WrapperCollection>(object({
  data: optional(array(unknown())),
  links: optional(unknown()),
}));