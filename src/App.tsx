import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { products } from './data/products';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <main className="pt-14 min-h-screen flex flex-col">
        {/* Grid Container */}
        <div className="flex-1 border-l border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenLogin={() => setIsLoginOpen(true)}
              />
            ))}
            
            {/* Fillers to complete the grid if needed, or just leave empty space with borders */}
            {/* For a perfect grid look, we might want to fill the remaining space with empty cells */}
            {Array.from({ length: (4 - (products.length % 4)) % 4 }).map((_, i) => (
              <div key={`filler-${i}`} className="aspect-square border-r border-b border-white/20 hidden lg:block bg-black" />
            ))}
             {Array.from({ length: (2 - (products.length % 2)) % 2 }).map((_, i) => (
              <div key={`filler-md-${i}`} className="aspect-square border-r border-b border-white/20 hidden md:block lg:hidden bg-black" />
            ))}
          </div>
        </div>
        
        {/* Footer / Bottom Area */}
        <div className="border-t border-white/20 p-8 text-center font-mono text-[10px] uppercase tracking-widest text-gray-500">
          <p>NDM_SUPPLY // EST. 2025 // UNDERGROUND_CULTURE</p>
        </div>
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
