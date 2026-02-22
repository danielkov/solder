import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostChargesRequestDestinationObject } from './PostChargesRequestDestinationObject';
import { PostChargesRequestDestinationObjectSchema } from './PostChargesRequestDestinationObject';
export type PostChargesRequestDestination = PostChargesRequestDestinationObject | string;

export const PostChargesRequestDestinationSchema: TypedSchema<PostChargesRequestDestination> = typed<PostChargesRequestDestination>(union(PostChargesRequestDestinationObjectSchema, string()));
