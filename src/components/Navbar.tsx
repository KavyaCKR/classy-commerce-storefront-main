import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Package, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    cartItems
  } = useCart();
  const navigate = useNavigate();
  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">StyleShop</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              All Products
            </Link>
            
            {/* Categories dropdown using NavigationMenu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px] bg-slate-50">
                      <Link to="/category/men" className="flex items-center p-3 hover:bg-muted rounded-md">
                        <div className="text-sm font-medium">Men</div>
                      </Link>
                      <Link to="/category/women" className="flex items-center p-3 hover:bg-muted rounded-md">
                        <div className="text-sm font-medium">Women</div>
                      </Link>
                      <Link to="/category/accessories" className="flex items-center p-3 hover:bg-muted rounded-md">
                        <div className="text-sm font-medium">Accessories</div>
                      </Link>
                      <Link to="/electronics" className="flex items-center p-3 hover:bg-muted rounded-md">
                        <div className="text-sm font-medium">Electronics</div>
                      </Link>
                      <Link to="/home-kitchen" className="flex items-center p-3 hover:bg-muted rounded-md">
                        <div className="text-sm font-medium">Home & Kitchen</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/deals" className="text-gray-700 hover:text-primary transition-colors">
              Deals
            </Link>
            
            <Link to="/orders" className="text-gray-700 hover:text-primary transition-colors">
              Orders
            </Link>
          </div>
          
          {/* Search, User, Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="px-3 py-1 pr-8 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 text-gray-700">
                <Search size={18} />
              </Button>
            </form>
            
            <Link to="/account">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <User size={20} />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <ShoppingCart size={20} />
              </Button>
              {cartItemCount > 0 && <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>}
            </Link>
            <Link to="/orders" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Package size={20} />
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <form onSubmit={handleSearch} className="relative mr-2">
              <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="px-2 py-1 pr-7 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary w-24" />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 text-gray-700 h-full w-7 p-0">
                <Search size={14} />
              </Button>
            </form>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <ShoppingCart size={20} />
              </Button>
              {cartItemCount > 0 && <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>}
            </Link>
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden pt-4 pb-3 space-y-3 animate-fadeIn">
            <Link to="/products" className="block py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              All Products
            </Link>
            
            {/* Mobile Categories with dropdown */}
            <div className="py-2">
              <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors" onClick={e => {
            const submenu = document.getElementById('mobile-categories-submenu');
            if (submenu) submenu.classList.toggle('hidden');
            e.preventDefault();
          }}>
                <span>Categories</span>
                <ChevronDown size={16} />
              </div>
              <div id="mobile-categories-submenu" className="pl-4 mt-2 space-y-2 hidden">
                <Link to="/category/men" className="block py-1 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Men
                </Link>
                <Link to="/category/women" className="block py-1 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Women
                </Link>
                <Link to="/category/accessories" className="block py-1 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Accessories
                </Link>
                <Link to="/electronics" className="block py-1 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Electronics
                </Link>
                <Link to="/home-kitchen" className="block py-1 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Home & Kitchen
                </Link>
              </div>
            </div>
            
            <Link to="/deals" className="block py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Deals
            </Link>
            
            <Link to="/orders" className="block py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Orders
            </Link>
            
            <div className="flex space-x-3 pt-2">
              <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <User size={20} />
                </Button>
              </Link>
              <Link to="/orders" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Package size={20} />
                </Button>
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;