import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { ProductWindow } from './components/ProductWindow';
import { products, type Product } from './data/products';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-ndm-dark text-ndm-accent font-mono selection:bg-ndm-primary selection:text-ndm-dark flex flex-col overflow-hidden">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <main className="pt-14 flex-1 flex relative">
        {/* Sidebar */}
        <div className="hidden md:block w-64 p-8 space-y-8 fixed left-0 top-14 bottom-0 overflow-y-auto">
           <div className="space-y-2 text-xs font-bold tracking-widest text-ndm-muted">
              <p 
                className={`cursor-pointer ${selectedCategory === null ? 'text-ndm-primary' : 'hover:text-white'}`}
                onClick={() => setSelectedCategory(null)}
              >
                ALL_ITEMS
              </p>
              <div className="h-4"></div>
              <p className="text-ndm-primary mb-2">COLLECTIONS</p>
              {['SYSTEM', 'UNIFORM', 'RELICS'].map(category => (
                <p 
                  key={category}
                  className={`cursor-pointer uppercase ${selectedCategory === category ? 'text-white' : 'hover:text-white'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </p>
              ))}
           </div>
           
           <div className="space-y-2 text-xs font-bold tracking-widest text-ndm-muted">
              <p className="text-ndm-primary">ARCHIVE</p>
              <p 
                className={`cursor-pointer uppercase ${selectedCategory === '2024_DROP' ? 'text-white' : 'hover:text-white'}`}
                onClick={() => setSelectedCategory('2024_DROP')}
              >
                2024_DROP
              </p>
              <p 
                className={`cursor-pointer uppercase ${selectedCategory === '2023_DROP' ? 'text-white' : 'hover:text-white'}`}
                onClick={() => setSelectedCategory('2023_DROP')}
              >
                2023_DROP
              </p>
           </div>
        </div>

        {/* Grid Container */}
        <div className="flex-1 md:ml-64 p-4 md:p-12 overflow-y-auto h-[calc(100vh-3.5rem)]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpen={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          
          {/* Footer inside scroll area */}
          <div className="mt-24 pt-8 border-t border-ndm-grid/30 flex justify-between items-end font-mono text-[10px] uppercase tracking-widest text-ndm-muted">
            <div>
              <p>NDM_SUPPLY_SYSTEM_V1.0</p>
              <p>EST. 2025 // UNDERGROUND_CULTURE</p>
            </div>
            <div className="text-right">
               <p className="animate-blink">_CURSOR_ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Draggable Windows Layer */}
        <AnimatePresence>
          {selectedProduct && (
            <ProductWindow 
              key={selectedProduct.id}
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              zIndex={50}
            />
          )}
        </AnimatePresence>
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
