
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { products } from '@/data/products';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Customer Rating', value: 'rating' },
  { label: 'Newest First', value: 'newest' },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  
  // Get filters from URL
  const categoryParam = searchParams.get('category') || '';
  const searchParam = searchParams.get('search') || '';
  const sortParam = searchParams.get('sort') || 'featured';
  const minPriceParam = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : 0;
  const maxPriceParam = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : 1000;
  
  // Local filter state
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? categoryParam.split(',') : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([minPriceParam, maxPriceParam]);

  // Extract unique categories and tags from products
  const categories = Array.from(new Set(products.map(p => p.category)));
  const tags = Array.from(new Set(products.flatMap(p => p.tags)));
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by search
    if (searchParam) {
      const searchLower = searchParam.toLowerCase();
      filtered = filtered.filter(
        p => 
          p.name.toLowerCase().includes(searchLower) || 
          p.description.toLowerCase().includes(searchLower) ||
          p.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    
    // Filter by price range
    filtered = filtered.filter(
      p => (p.salePrice || p.price) >= priceRange[0] && (p.salePrice || p.price) <= priceRange[1]
    );
    
    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(p => 
        p.tags.some(tag => selectedTags.includes(tag))
      );
    }
    
    // Sort products
    switch (sortParam) {
      case 'price-asc':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-desc':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // In a real app this would sort by date, but we're using mock data
        filtered = filtered.filter(p => p.newArrival).concat(filtered.filter(p => !p.newArrival));
        break;
      default:
        // Featured sorting
        filtered = filtered.filter(p => p.featured).concat(filtered.filter(p => !p.featured));
    }
    
    setFilteredProducts(filtered);
  }, [searchParam, selectedCategories, sortParam, priceRange, selectedTags]);
  
  // Update URL when filters change
  const updateFilters = () => {
    const params: Record<string, string> = {};
    
    if (selectedCategories.length > 0) {
      params.category = selectedCategories.join(',');
    }
    
    if (searchParam) {
      params.search = searchParam;
    }
    
    if (sortParam !== 'featured') {
      params.sort = sortParam;
    }
    
    if (priceRange[0] > 0) {
      params.minPrice = priceRange[0].toString();
    }
    
    if (priceRange[1] < 1000) {
      params.maxPrice = priceRange[1].toString();
    }
    
    setSearchParams(params);
    
    // Close filter sidebar on mobile after applying
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };
  
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const handleTagChange = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setPriceRange([0, 1000]);
    setSearchParams({});
  };
  
  const handleSortChange = (sortValue: string) => {
    searchParams.set('sort', sortValue);
    setSearchParams(searchParams);
    setSortMenuOpen(false);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden">
          <Button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {/* Sidebar Filters (mobile and desktop) */}
        <aside 
          className={`w-full md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}
        >
          <div className="bg-white p-5 rounded-lg border">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <SlidersHorizontal size={18} />
                Filters
              </h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm text-primary hover:text-primary/90" 
                onClick={resetFilters}
              >
                Reset All
              </Button>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="capitalize">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">$</span>
                <input
                  type="number"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="block w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <span className="text-gray-500">-</span>
                <span className="text-sm text-gray-500">$</span>
                <input
                  type="number"
                  min={priceRange[0]}
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="block w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 8).map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedTags.includes(tag)
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={updateFilters}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Apply Filters
            </Button>
          </div>
        </aside>
        
        {/* Products Section */}
        <div className="flex-grow">
          {/* Filter results info and sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 mb-4 sm:mb-0">
              Showing <span className="font-medium">{filteredProducts.length}</span> results
            </p>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setSortMenuOpen(!sortMenuOpen)}
                className="flex items-center justify-between w-48"
              >
                <span>Sort by: {sortOptions.find(opt => opt.value === sortParam)?.label}</span>
                <ChevronDown size={16} className="ml-2" />
              </Button>
              
              {sortMenuOpen && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <ul className="py-1">
                    {sortOptions.map(option => (
                      <li key={option.value}>
                        <button
                          onClick={() => handleSortChange(option.value)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          {option.label}
                          {option.value === sortParam && <Check size={16} className="ml-2" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters or search term.</p>
              <Button onClick={resetFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
