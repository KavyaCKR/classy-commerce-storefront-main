
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { Category, Product } from '@/types/product';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Customer Rating', value: 'rating' },
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  
  // Banner images for each category
  const categoryBanners: Record<Category, string> = {
    men: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891',
    women: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    accessories: 'https://images.unsplash.com/photo-1587467512961-120760940315',
    electronics: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
    home_kitchen: 'https://images.unsplash.com/photo-1556911220-bff31c812dba'
  };
  
  // Load products for category
  useEffect(() => {
    if (category) {
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    }
  }, [category]);
  
  // Handle sorting
  useEffect(() => {
    let sorted = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-desc':
        sorted.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured sorting - put featured items first
        sorted = sorted.filter(p => p.featured).concat(sorted.filter(p => !p.featured));
    }
    
    setFilteredProducts(sorted);
  }, [products, sortBy]);
  
  // Format the category name for display
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  const bannerUrl = category ? categoryBanners[category as Category] || categoryBanners.accessories : '';

  return (
    <div>
      {/* Category Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={bannerUrl} 
          alt={`${formattedCategory} Collection`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{formattedCategory} Collection</h1>
            <div className="flex items-center justify-center text-white text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">Products</Link>
              <span className="mx-2">/</span>
              <span>{formattedCategory}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-8">
        {/* Filter and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <Filter size={18} className="text-gray-500 mr-2" />
            <p className="text-gray-600">
              Showing <span className="font-medium">{filteredProducts.length}</span> products
            </p>
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setSortMenuOpen(!sortMenuOpen)}
              className="flex items-center justify-between w-48"
            >
              <span>Sort: {sortOptions.find(opt => opt.value === sortBy)?.label}</span>
              <ChevronDown size={16} className="ml-2" />
            </Button>
            
            {sortMenuOpen && (
              <div className="absolute z-10 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <ul className="py-1">
                  {sortOptions.map(option => (
                    <li key={option.value}>
                      <button
                        onClick={() => {
                          setSortBy(option.value);
                          setSortMenuOpen(false);
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {option.label}
                        {option.value === sortBy && <Check size={16} className="ml-2" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">
              We currently don't have any products in this category.
            </p>
            <Link to="/products">
              <Button>View All Products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
