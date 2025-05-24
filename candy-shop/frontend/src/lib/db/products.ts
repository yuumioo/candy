import products from '@/lib/data/products.json';

export async function getAllProducts() {
    return products;
}

export async function getProductById(id: string) {
    return products.find((p) => p.id === id);
  }