// Generated types from OpenAPI specification

export interface Address {
  city: string;
  country: string;
  postalCode?: string;
  state?: string;
  street: string;
}

/**
 * Additional error details
 */
export interface DetailsProperty {
}

export interface Error {
  /**
   * Error code
   */
  code: string;
  /**
   * Additional error details
   */
  details?: DetailsProperty;
  /**
   * Human-readable error message
   */
  message: string;
  /**
   * Always false for error responses
   */
  success: false;
}

export enum FaqCategory {
  GENERAL = "general",
  ORDERS = "orders",
  SHIPPING = "shipping",
  RETURNS = "returns",
  PETS = "pets",
}

/**
 * Frequently asked question item - tests acronym handling (FAQItem -> FaqItem)
 */
export interface FaqItem {
  /**
   * The answer text
   */
  answer: string;
  /**
   * FAQ category - tests acronym in enum name
   */
  category: FaqCategory;
  id: string;
  /**
   * The question text
   */
  question: string;
  /**
   * Related URLs - tests URL acronym handling
   */
  relatedUrLs?: Array<string>;
}

/**
 * List of FAQ items
 */
export interface FaqList {
  items: Array<FaqItem>;
  /**
   * Total number of FAQ items
   */
  total: number;
}

/**
 * Request body for file import - tests multipart with $ref
 */
export interface FileImportRequest {
  /**
   * The file to import
   */
  file: string;
  /**
   * The format of the file (e.g., csv, json, xml)
   */
  format: string;
  /**
   * Whether to validate the file before importing
   */
  validate?: boolean;
}

/**
 * HTTP error response - tests HTTP acronym handling
 */
export interface HttpError {
  message: string;
  /**
   * HTTP status code
   */
  statusCode: number;
}

export interface NewOrder {
  ownerId: string;
  petId: string;
  quantity?: number;
}

export interface NewOwner {
  address?: Address;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface NewPet {
  age?: number;
  breed?: string;
  name: string;
  photoUrls?: Array<string>;
  /**
   * Species of the pet
   */
  species: Species;
  tags?: Array<string>;
  weight?: number;
}

export interface Order {
  completedDate?: string;
  id: string;
  orderDate: string;
  ownerId: string;
  petId: string;
  quantity?: number;
  /**
   * Order status
   */
  status: OrderStatus;
}

export enum OrderStatus {
  PENDING = "pending",
  APPROVED = "approved",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface Owner {
  address?: Address;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone?: string;
}

export interface Pet {
  /**
   * Age of the pet in years
   */
  age?: number;
  /**
   * Breed of the pet
   */
  breed?: string;
  /**
   * When the pet was added to the system
   */
  createdAt?: string;
  /**
   * Unique identifier for the pet
   */
  id: string;
  /**
   * Name of the pet
   */
  name: string;
  owner?: Owner;
  /**
   * URLs of pet photos
   */
  photoUrls?: Array<string>;
  /**
   * Species of the pet
   */
  species: Species;
  /**
   * Current status of the pet
   */
  status: PetStatus;
  /**
   * Tags associated with the pet
   */
  tags?: Array<string>;
  /**
   * Discriminator field - always 'pet' for this type
   */
  type: "pet";
  /**
   * When the pet information was last updated
   */
  updatedAt?: string;
  /**
   * Weight of the pet in kilograms
   */
  weight?: number;
}

export interface PetList {
  items: Array<Pet>;
  limit?: number;
  offset?: number;
  /**
   * Total number of pets matching the query
   */
  total: number;
}

export enum PetStatus {
  AVAILABLE = "available",
  PENDING = "pending",
  ADOPTED = "adopted",
  NOT_AVAILABLE = "not_available",
}

export enum Species {
  DOG = "dog",
  CAT = "cat",
  BIRD = "bird",
  RABBIT = "rabbit",
  HAMSTER = "hamster",
  GUINEA_PIG = "guinea_pig",
  FISH = "fish",
  REPTILE = "reptile",
  OTHER = "other",
}

export interface UpdatePet {
  age?: number;
  breed?: string;
  name?: string;
  /**
   * Current status of the pet
   */
  status?: PetStatus;
  tags?: Array<string>;
  weight?: number;
}

export interface UploadFileRequest {
  /**
   * Optional description of the file
   */
  description?: string;
  /**
   * The file to upload
   */
  file: string;
}

export interface UploadFileWithMetadataRequest {
  /**
   * Optional description of the file
   */
  description?: string;
  /**
   * The file to upload
   */
  file: string;
  metadata: UploadFileWithMetadataRequestMetadata;
  /**
   * ID of the owner
   */
  ownerId?: number;
}

export interface UploadFileWithMetadataRequestMetadata {
  /**
   * ID of the owner
   */
  ownerId?: string;
  /**
   * Tags to associate with the file
   */
  tags?: Array<string>;
}

export interface UploadMultipleFilesRequest {
  /**
   * Array of files to upload
   */
  files: Array<string>;
}