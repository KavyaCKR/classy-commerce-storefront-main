
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';

const ElectronicsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const electronicsProducts = getProductsByCategory('electronics');
    setProducts(electronicsProducts);
  }, []);
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Electronics</h1>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center py-10 text-gray-500">No electronics products found.</p>
      )}
    </div>
  );
};

export default ElectronicsPage;
