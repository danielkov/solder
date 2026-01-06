// Generated types from OpenAPI specification

/**
 * A physical address
 */
export interface Address {
  /**
   * City name
   */
  city: string;
  /**
   * Country code (ISO 3166-1 alpha-2)
   */
  country: string;
  /**
   * Postal or ZIP code
   */
  postalCode: string;
  /**
   * State or province
   */
  state?: string;
  /**
   * Street address
   */
  street: string;
}

export interface CancelOrderRequest {
  /**
   * Reason for cancellation
   */
  reason?: string;
}

export interface DetailsItem {
  /**
   * Field that caused the error
   */
  field?: string;
  /**
   * Specific error message for this field
   */
  message?: string;
}

/**
 * Standard error response
 */
export interface Error {
  /**
   * Error code for programmatic handling
   */
  code: string;
  /**
   * Additional details about the error
   */
  details?: Array<DetailsItem>;
  /**
   * Human-readable error message
   */
  message: string;
  /**
   * Unique identifier for this request for support purposes
   */
  requestId?: string;
}

/**
 * Update product inventory
 */
export interface InventoryUpdate {
  /**
   * How to update the inventory (set absolute value, add, or subtract)
   */
  operation?: string;
  /**
   * New inventory quantity
   */
  quantity: number;
}

export interface ItemsItem {
  productId: string;
  quantity: number;
}

/**
 * Additional metadata about the user
 */
export interface MetadataProperty {
}

/**
 * A customer order
 */
export interface Order {
  /**
   * A physical address
   */
  billingAddress?: Address;
  /**
   * Timestamp when the order was completed
   */
  completedAt?: string;
  /**
   * Timestamp when the order was created
   */
  createdAt?: string;
  currency?: string;
  /**
   * Unique identifier for the order
   */
  id: string;
  /**
   * List of items in the order
   */
  items: Array<OrderItem>;
  /**
   * Additional notes or instructions
   */
  notes?: string;
  /**
   * Human-readable order number
   */
  orderNumber?: string;
  /**
   * Payment method used
   */
  paymentMethod?: string;
  /**
   * Payment status
   */
  paymentStatus?: string;
  /**
   * A physical address
   */
  shippingAddress?: Address;
  /**
   * Shipping cost
   */
  shippingCost?: number;
  /**
   * Current status of the order
   */
  status: string;
  /**
   * Subtotal before tax and shipping
   */
  subtotal?: number;
  /**
   * Tax amount
   */
  tax?: number;
  /**
   * Total order amount including tax and shipping
   */
  totalAmount: number;
  /**
   * Shipping tracking number
   */
  trackingNumber?: string;
  /**
   * Timestamp when the order was last updated
   */
  updatedAt?: string;
  /**
   * ID of the user who placed the order
   */
  userId: string;
}

/**
 * Request body for creating a new order
 */
export interface OrderCreate {
  /**
   * A physical address
   */
  billingAddress?: Address;
  items: Array<ItemsItem>;
  notes?: string;
  paymentMethod?: string;
  /**
   * A physical address
   */
  shippingAddress: Address;
}

/**
 * An item in an order
 */
export interface OrderItem {
  /**
   * ID of the product
   */
  productId: string;
  /**
   * Name of the product at time of order
   */
  productName?: string;
  /**
   * Quantity ordered
   */
  quantity: number;
  /**
   * Total price for this item (quantity × unitPrice)
   */
  totalPrice?: number;
  /**
   * Price per unit at time of order
   */
  unitPrice: number;
}

/**
 * Paginated list of orders
 */
export interface OrderList {
  data: Array<Order>;
  page: number;
  pageSize: number;
  total: number;
}

/**
 * A product in the catalog
 */
export interface Product {
  /**
   * Product category
   */
  category: string;
  /**
   * Timestamp when the product was created
   */
  createdAt?: string;
  /**
   * Currency code
   */
  currency?: string;
  /**
   * Detailed product description
   */
  description?: string;
  /**
   * Unique identifier for the product
   */
  id: string;
  /**
   * Product image URLs
   */
  images?: Array<string>;
  /**
   * Current inventory count
   */
  inventory?: number;
  /**
   * Product name
   */
  name: string;
  /**
   * Product price in USD
   */
  price: number;
  /**
   * Stock Keeping Unit
   */
  sku: string;
  /**
   * Technical specifications
   */
  specifications?: SpecificationsProperty;
  /**
   * Product availability status
   */
  status: string;
  /**
   * Product tags for search and filtering
   */
  tags?: Array<string>;
  /**
   * Timestamp when the product was last updated
   */
  updatedAt?: string;
}

/**
 * Request body for creating a new product
 */
export interface ProductCreate {
  category: string;
  currency?: string;
  description?: string;
  images?: Array<string>;
  inventory?: number;
  name: string;
  price: number;
  sku: string;
  specifications?: SpecificationsProperty;
  tags?: Array<string>;
}

/**
 * Paginated list of products
 */
export interface ProductList {
  data: Array<Product>;
  page: number;
  pageSize: number;
  total: number;
}

/**
 * Request body for updating a product
 */
export interface ProductUpdate {
  description?: string;
  images?: Array<string>;
  inventory?: number;
  name?: string;
  price?: number;
  specifications?: SpecificationsProperty;
  status?: string;
  tags?: Array<string>;
}

/**
 * Technical specifications
 */
export interface SpecificationsProperty {
}

/**
 * A user account in the system
 */
export interface User {
  /**
   * Timestamp when the user was created
   */
  createdAt?: string;
  /**
   * User's email address
   */
  email: string;
  /**
   * User's first name
   */
  firstName?: string;
  /**
   * Unique identifier for the user
   */
  id: string;
  /**
   * User's last name
   */
  lastName?: string;
  /**
   * Additional metadata about the user
   */
  metadata?: MetadataProperty;
  /**
   * User's role in the system
   */
  role?: string;
  /**
   * Current status of the user account
   */
  status: string;
  /**
   * Timestamp when the user was last updated
   */
  updatedAt?: string;
  /**
   * User's unique username
   */
  username: string;
}

/**
 * Request body for creating a new user
 */
export interface UserCreate {
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  username: string;
}

/**
 * Paginated list of users
 */
export interface UserList {
  data: Array<User>;
  /**
   * Current page number
   */
  page: number;
  /**
   * Number of items per page
   */
  pageSize: number;
  /**
   * Total number of users
   */
  total: number;
}

/**
 * Request body for updating a user
 */
export interface UserUpdate {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  status?: string;
}