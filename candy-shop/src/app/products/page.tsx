import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/db/products";

export default async function ProductPage(){
    const products = await getAllProducts();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">PRALINER</h1>
            <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={{...product}} />
                ))}
            </div>
        </main>
    );
}