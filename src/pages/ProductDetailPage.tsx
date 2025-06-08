
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts, formatPriceINR } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { toast } from 'sonner';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const relatedProducts = id ? getRelatedProducts(id, 4) : [];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const { addToCart } = useCart();
  
  const handleQuantityChange = (value: number) => {
    if (product && value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, selectedColor);
      
      toast(`${product.name} added to cart`, {
        description: `${quantity} item${quantity > 1 ? 's' : ''} added to your cart`
      });
    }
  };
  
  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/products" className="hover:text-primary flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div>
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>
          
          {/* Thumbnail Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer ${
                    selectedImage === index
                      ? 'ring-2 ring-primary'
                      : 'ring-1 ring-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">{product.rating} ({Math.floor(Math.random() * 500) + 50} reviews)</span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            {product.salePrice ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary mr-3">
                  {formatPriceINR(product.salePrice)}
                </span>
                <span className="text-gray-500 line-through">
                  {formatPriceINR(product.price)}
                </span>
                <span className="ml-3 bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                  {Math.round((product.price - product.salePrice) / product.price * 100)}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">{formatPriceINR(product.price)}</span>
            )}
            
            <p className="text-sm text-gray-500 mt-1">
              Inclusive of all taxes
            </p>
          </div>
          
          {/* Description (Collapsed) */}
          <div className="mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleDescription}>
              <h3 className="font-medium">Description</h3>
              {isDescriptionExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`text-sm text-gray-600 mt-2 transition-all duration-300 overflow-hidden ${
              isDescriptionExpanded ? 'max-h-96' : 'max-h-16'
            }`}>
              <p>{product.description}</p>
            </div>
          </div>
          
          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    className={`min-w-[4rem] ${selectedSize === size ? 'bg-primary hover:bg-primary/90' : ''}`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    variant={selectedColor === color ? 'default' : 'outline'}
                    className={`min-w-[4rem] ${selectedColor === color ? 'bg-primary hover:bg-primary/90' : ''}`}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                +
              </Button>
              <span className="ml-4 text-sm text-gray-500">
                {product.stock > 0 
                  ? `${product.stock} items available` 
                  : 'Out of stock'}
              </span>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className="w-full mb-4 bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <Tabs defaultValue="details" className="mb-16">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="text-gray-600">
          <div className="prose max-w-none">
            <p className="mb-4">{product.description}</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Features</h3>
            <ul className="list-disc pl-5 mb-6">
              <li>Premium quality materials</li>
              <li>Designed for durability and comfort</li>
              <li>Modern and versatile style</li>
              <li>Easy care instructions</li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="specifications">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Brand</dt>
                <dd className="text-sm text-gray-900 col-span-2">StyleShop</dd>
              </div>
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="text-sm text-gray-900 col-span-2">{product.category}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Material</dt>
                <dd className="text-sm text-gray-900 col-span-2">Premium</dd>
              </div>
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Weight</dt>
                <dd className="text-sm text-gray-900 col-span-2">0.5 kg</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Dimensions</dt>
                <dd className="text-sm text-gray-900 col-span-2">30 x 20 x 10 cm</dd>
              </div>
            </dl>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4">
                <h4 className="font-medium">John Doe</h4>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Great product! I've been using it for a month now and it's exceeding my expectations.
                  The quality is outstanding and it looks even better in person.
                </p>
                <p className="text-xs text-gray-500 mt-1">Posted 2 weeks ago</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <h4 className="font-medium">Jane Smith</h4>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Very satisfied with my purchase. The shipping was fast and the item arrived in perfect condition.
                  Would definitely buy again!
                </p>
                <p className="text-xs text-gray-500 mt-1">Posted 1 month ago</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
