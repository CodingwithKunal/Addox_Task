import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { StockistTicker } from "../components/StockistTicker";
import { CategoryBento } from "../components/CategoryBento";
import { ProductSection } from "../components/ProductSection";
import { Craftsmanship } from "../components/Craftsmanship";
import { BrandStory } from "../components/BrandStory";
import { WholesaleCustom } from "../components/WholesaleCustom";
import { ShowroomExperience } from "../components/ShowroomExperience";
import { Footer } from "../components/Footer";
import { ProductModal } from "../components/ProductModal";
import { InquiryCartDrawer } from "../components/InquiryCartDrawer";
import { SearchModal } from "../components/SearchModal";
import { AdminModal } from "../components/AdminModal";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStockist, setSelectedStockist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Quote items persistence in localStorage
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem("addox_quote_items");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("addox_quote_items", JSON.stringify(quoteItems));
    } catch (e) {
      console.error(e);
    }
  }, [quoteItems]);

  // Handlers for Quote Bag
  const handleAddToQuote = (product, qty = 1) => {
    setQuoteItems((prev) => {
      const existsIndex = prev.findIndex((item) => item.id === product.id);
      if (existsIndex > -1) {
        // Toggle or add quantity
        const updated = [...prev];
        updated[existsIndex] = {
          ...updated[existsIndex],
          quantity: updated[existsIndex].quantity + qty
        };
        return updated;
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const handleUpdateQuantity = (productId, newQty) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setQuoteItems([]);
  };

  // Quick view handler
  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsModalOpen(false);
    setQuickViewProduct(null);
  };

  // Category selection with smooth scroll
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setSelectedStockist(null);
    const target = document.querySelector("#products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stockist selection with smooth scroll
  const handleSelectStockist = (stockistName) => {
    setSelectedStockist(stockistName);
    setSelectedCategory("all");
    const target = document.querySelector("#products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWholesale = () => {
    document.querySelector("#wholesale")?.scrollIntoView({ behavior: "smooth" });
  };

  const isCurrentProductInQuote = quickViewProduct 
    ? quoteItems.some(i => i.id === quickViewProduct.id) 
    : false;

  return (
    <div className="min-h-screen bg-[#fafaf9] light-gradient-mesh text-slate-900 flex flex-col font-sans-clean selection:bg-amber-500 selection:text-white">
      
      {/* Dynamic Header & Navigation */}
      <Navbar
        quoteCount={quoteItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToProducts}
          onRequestCatalogClick={scrollToWholesale}
        />

        {/* Stockist Brands Marquee Ticker */}
        <StockistTicker onSelectStockist={handleSelectStockist} />

        {/* Curated Bento Grid Showcase */}
        <CategoryBento onSelectCategory={handleSelectCategory} />

        {/* Master Product Catalog Section */}
        <ProductSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedStockist={selectedStockist}
          onStockistChange={setSelectedStockist}
          onQuickView={handleOpenQuickView}
          onAddToQuote={handleAddToQuote}
          quoteItems={quoteItems}
        />

        {/* Craftsmanship & Material Innovation */}
        <Craftsmanship />

        {/* Brand Story & Sam International Heritage */}
        <BrandStory />

        {/* B2B Wholesale & Custom Branding Division */}
        <WholesaleCustom />

        {/* Karol Bagh Delhi Showroom Experience */}
        <ShowroomExperience />
      </main>

      {/* Luxury Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        isOpen={isModalOpen}
        onClose={handleCloseQuickView}
        onAddToQuote={handleAddToQuote}
        isAddedToQuote={isCurrentProductInQuote}
      />

      {/* Wholesale Quote Request Drawer */}
      <InquiryCartDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Global Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleOpenQuickView}
        onSelectCategory={handleSelectCategory}
      />

      {/* Admin Authentication Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

    </div>
  );
};
