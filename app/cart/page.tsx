"use client";

import { Bell, Heart, ShoppingCart, Home, Search, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const CartPage = () => {
    return (
        <div className="relative h-[100dvh] w-full bg-gray-50 text-black font-sans overflow-hidden flex flex-col">

            {/* Top Header */}
            <div className="flex w-full bg-white z-50 pt-4 pb-4 px-6 items-center justify-between shadow-sm shrink-0">
                <span className="text-lg font-medium text-gray-900">Shopping Bag</span>
                <div className="flex gap-5">
                    <Link href="/notification">
                        <Bell className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                    </Link>
                    <Link href="/wishlist">
                        <Heart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" fill="black" />
                    </Link>
                </div>
            </div>

            {/* Scrollable Content (Empty State) */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center pb-20 px-8 no-scrollbar">

                {/* Empty State Icon */}
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-2">
                    Your Shopping Bag is Empty
                </h2>
                <p className="text-gray-500 text-sm text-center max-w-xs mb-8">
                    Looks like you haven't added anything to your bag yet. Start browsing to find your perfect style.
                </p>

                <Link href="/" className="px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-wide rounded-sm shadow-lg hover:bg-gray-800 transition">
                    Start Shopping
                </Link>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 w-full bg-white pt-4 pb-4 flex flex-col items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-12 md:gap-24 pb-2">
                    {/* Home Button */}
                    <Link
                        href={'/'}
                        className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform transition active:scale-95 hover:bg-gray-50"
                    >
                        <Home className="w-5 h-5 text-black" />
                    </Link>

                    {/* Search Button */}
                    <Link
                        href={'/search'}
                        className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform transition active:scale-95 hover:bg-gray-50"
                    >
                        <Search className="w-5 h-5 text-black" />
                    </Link>

                    {/* Profile Button */}
                    <Link
                        href={'/profile'}
                        className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform transition active:scale-95 hover:bg-gray-50"
                    >
                        <User className="w-5 h-5 text-black" />
                    </Link>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full" />
            </div>
        </div>
    );
};

export default CartPage;
