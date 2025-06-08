
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts, getNewArrivalProducts, getBestSellerProducts } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivalProducts();
  const bestSellers = getBestSellerProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slideUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Collection 2025</h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover the latest trends in fashion and get the best deals on stylish clothing and accessories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/category/women">
                  <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">Shop Women</Button>
                </Link>
                <Link to="/category/men">
                  <Button variant="outline" className="text-lg px-8 py-6">Shop Men</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5" 
                alt="Summer Collection" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Men's Category */}
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-3">Men</h3>
                  <Link to="/category/men">
                    <Button className="bg-white text-black hover:bg-gray-100">Shop Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Women's Category */}
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-3">Women</h3>
                  <Link to="/category/women">
                    <Button className="bg-white text-black hover:bg-gray-100">Shop Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Accessories Category */}
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980" 
                alt="Accessories Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-3">Accessories</h3>
                  <Link to="/category/accessories">
                    <Button className="bg-white text-black hover:bg-gray-100">Shop Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Featured Products</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">New Arrivals</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="product-grid">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotion Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SUMMER SALE</h2>
            <p className="text-xl mb-8">Up to 50% off on selected items. Limited time offer!</p>
            <Link to="/products">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Best Sellers</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="product-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gray-100 rounded-lg p-6 md:p-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest updates on new products and upcoming sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
