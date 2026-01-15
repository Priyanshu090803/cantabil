"use client";

import { useState, useRef, useEffect } from 'react';
import { PRODUCTS } from '@/utils/data';
import { Home, Search, User, Bell, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("MEN");
  const scrollRef = useRef<HTMLElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === activeCategory
  );

  // Swipe Navigation Logic
  const touchStartRef = useRef<{ x: number, y: number } | null>(null);
  const minSwipeDistance = 50;
  const categories = ["WOMEN", "MEN", "KIDS"];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };

    const distanceX = touchStartRef.current.x - touchEnd.x;
    const distanceY = touchStartRef.current.y - touchEnd.y;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe && Math.abs(distanceX) > minSwipeDistance) {
      const currentIndex = categories.indexOf(activeCategory);

      if (distanceX > 0) {
        // Swipe Left (Finger Right -> Left) -> Next Category
        if (currentIndex < categories.length - 1) {
          setActiveCategory(categories[currentIndex + 1]);
        }
      } else {
        // Swipe Right (Finger Left -> Right) -> Prev Category
        if (currentIndex > 0) {
          setActiveCategory(categories[currentIndex - 1]);
        }
      }
    }
  };

  // Create looped product array: [last, ...originals, first]
  const loopedProducts = [
    filteredProducts[filteredProducts.length - 1],
    ...filteredProducts,
    filteredProducts[0]
  ];

  const handleScrollEnd = () => {
    if (!scrollRef.current || isScrolling || filteredProducts.length === 0) return;

    const container = scrollRef.current;
    // Use container height instead of window.innerHeight for accuracy on mobile
    const height = container.clientHeight;
    const scrollPosition = container.scrollTop;

    // Use round to find nearest index, but be tolerant
    const index = Math.round(scrollPosition / height);

    // Handle infinite loop wrapping - only after snap completes
    if (index === 0) {
      // Scrolled UP to cloned last product, jump to real last
      setIsScrolling(true);
      container.classList.remove('scroll-smooth');

      // Calculate target exactly
      const targetScroll = height * filteredProducts.length;

      requestAnimationFrame(() => {
        container.scrollTop = targetScroll;
        requestAnimationFrame(() => {
          container.classList.add('scroll-smooth');
          setIsScrolling(false);
        });
      });
    } else if (index === loopedProducts.length - 1) {
      // Scrolled DOWN to cloned first product, jump to real first
      setIsScrolling(true);
      container.classList.remove('scroll-smooth');

      // Target is the first real product (index 1)
      const targetScroll = height;

      requestAnimationFrame(() => {
        container.scrollTop = targetScroll;
        requestAnimationFrame(() => {
          container.classList.add('scroll-smooth');
          setIsScrolling(false);
        });
      });
    }
  };

  // Initialize scroll position and reset when category changes
  useEffect(() => {
    if (scrollRef.current && filteredProducts.length > 0) {
      // Set initial scroll to the first real item (Index 1)
      // Use clientHeight to be safe
      scrollRef.current.scrollTop = scrollRef.current.clientHeight;
    }
  }, [activeCategory, filteredProducts.length]);

  return (
    <div
      className="relative h-[100dvh] w-full bg-black text-white font-sans overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* Top Header - Floating */}
      <div className="absolute top-0 left-0 w-full z-50 flex flex-col items-center pt-4 pb-8 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        {/* Icons Row */}
        <div className="w-full flex justify-between px-6 mb-4 pointer-events-auto">
          <Link href="/">
            <img
              src="/Cantabil-logo-1.avif"
              alt="Cantabil"
              className="h-8 w-auto object-contain cursor-pointer"
            />
          </Link>

          <div className="flex gap-5">
            <Link href="/notification">
              <Bell className="w-5 h-5 text-white drop-shadow-md cursor-pointer hover:opacity-80 transition" />
            </Link>
            <Link href="/wishlist">
              <Heart className="w-5 h-5 text-white drop-shadow-md cursor-pointer hover:opacity-80 transition" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5 text-white drop-shadow-md cursor-pointer hover:opacity-80 transition" />
            </Link>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex gap-8 text-xs font-medium tracking-wide pointer-events-auto">
          {["WOMEN", "MEN", "KIDS"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-2 py-1 transition-all duration-300 ${activeCategory === cat
                ? "text-white font-bold"
                : "text-white/70 hover:text-white"
                }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white rounded-full mt-1" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Vertical Infinite Scroll Container */}
      <main
        ref={scrollRef}
        onScrollEnd={handleScrollEnd}
        className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar touch-pan-y"
      >
        {loopedProducts.length > 0 ? loopedProducts.map((product, idx) => (
          <section
            key={`${product.id}-${idx}`}
            className="relative w-full h-[100dvh] snap-start shrink-0"
          >
            {/* Background Image - using first image from the array */}
            <div className="absolute inset-0">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
            </div>

            {/* Product Info - Bottom Left */}
            <div className="absolute bottom-24 left-6 max-w-[80%] z-20 pointer-events-none">
              <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-wider text-white bg-red-600 rounded-sm uppercase">
                Limited Offer
              </span>
              <h2 className="text-2xl font-semibold leading-tight mb-2 drop-shadow-lg text-white">
                {product.title}
              </h2>
              <p className="text-sm text-gray-200 mb-3 drop-shadow-md line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-red-500 drop-shadow-md">
                  {product.price}
                </span>
                <span className="text-sm text-gray-400 line-through drop-shadow-md">
                  {product.originalPrice}
                </span>
              </div>

              <div className="mt-2 text-xs text-red-400 font-medium">
                Limited Offer Until 15th Jan
              </div>
            </div>
          </section>
        )) : (
          <div className="h-[100dvh] w-full flex items-center justify-center bg-gray-900">
            <p className="text-gray-400">No products found in this category.</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation - Floating */}
      <div className="absolute bottom-3 left-0 w-full z-50 flex justify-center pb-2">
        <div className="flex items-center gap-12 md:gap-20">
          {/* Home Button - Active */}
          <Link
            href={'/'}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform transition">
            <Home className="w-5 h-5 text-black" />
          </Link>

          {/* Search Button */}
          <Link
            href={'/search'}
            className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl transform transition hover:scale-105 active:scale-95"
          >
            <Search className="w-4 h-4 text-black" />
          </Link>

          {/* Profile Button */}
          {/* Profile Button */}
          <Link
            href={'/profile'}
            className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition active:scale-95 hover:bg-white"
          >
            <User className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>

      {/* Bottom Home Indicator Bar */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-50" />
    </div>
  );
};

export default HomePage;