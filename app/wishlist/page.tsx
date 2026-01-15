"use client";

import { Bell, Heart, ShoppingCart, Home, Search, User, Shirt, Tag } from 'lucide-react';
import Link from 'next/link';

const WishlistPage = () => {
    return (
        <div className="relative h-[100dvh] w-full bg-gray-50 text-black font-sans overflow-hidden flex flex-col">

            {/* Top Header */}
            <div className="flex w-full bg-white z-50 pt-4 pb-4 px-6 items-center justify-between shadow-sm shrink-0">
                <span className="text-lg font-medium text-gray-900">Wish list</span>
                <div className="flex gap-5">
                    <Link href="/notification">
                        <Bell className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                    </Link>
                    <Link href="/wishlist">
                        <Heart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" fill="black" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                    </Link>
                </div>
            </div>

            {/* Item Count Subheader */}
            <div className="bg-gray-50 px-6 py-4">
                <span className="text-xs font-medium text-gray-600">0 ITEM(S)</span>
            </div>

            {/* Scrollable Content (Empty State) */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center pb-20 px-8 no-scrollbar">

                {/* Empty State Illustration Composition */}
                <div className="relative mb-6">
                    <div className="flex gap-4 mb-2">
                        <div className="w-16 h-16 border-2 border-black rounded-sm flex items-center justify-center relative">
                            <Tag className="w-8 h-8 text-black -rotate-45" />
                        </div>
                        <div className="w-16 h-16 border-2 border-black rounded-sm flex items-center justify-center relative">
                            <Shirt className="w-8 h-8 text-black" />
                        </div>
                    </div>
                    <div className="flex justify-center -mt-4">
                        <div className="w-20 h-20 relative flex items-center justify-center">
                            <Shirt className="w-20 h-20 text-black stroke-1" />
                            <Heart className="absolute bottom-0 right-0 w-8 h-8 text-red-600 fill-current drop-shadow-sm" />
                        </div>
                    </div>
                </div>

                <h2 className="text-sm font-bold text-black uppercase tracking-wide mb-2 text-center">
                    There are 0 items in wish list.
                </h2>
                <p className="text-gray-500 text-xs text-center max-w-xs leading-relaxed">
                    Add items to wish list and check prices and inventory information.
                </p>
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

export default WishlistPage;
