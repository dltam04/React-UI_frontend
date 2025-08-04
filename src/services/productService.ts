// Handle sending requests to Service Layout (Web API)

import type { Product } from '../models/Product';

const API_BASE_URL = 'http://45.77.248.87:8080/api/Product';

// getProducts request
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_BASE_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}

// getProductById request
export async function getProductById(id: number): Promise<Product> {
  const response = await fetch (`${API_BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID ${id}: ${response.status}`);
  }

  return response.json();
}

// createProduct request
export async function createProduct(product: Partial<Product>): Promise<Product> {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Failed to create product: ${response.status}`);
  }

  return response.json();
}

// updateProduct request
export async function updateProduct(id: number, product: Partial<Product>): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Failed to update product with ID ${id}: ${response.status}`);
  }

  return response.json();
}

// deleteProduct request
export async function deleteProduct(id: number): Promise<void> {
  const response = await fetch (`${API_BASE_URL}/${id}`, {
    method:'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete product with ID ${id}: ${response.status}`);
  }
}