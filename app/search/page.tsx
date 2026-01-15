"use client";

import { useState } from 'react';
import { Search, Scan, Home, User, Bell, Heart, ShoppingCart } from 'lucide-react';
import { SEARCH_DATA } from '@/utils/searchData';
import Link from 'next/link';

const SearchPage = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof SEARCH_DATA>("WOMEN");

    return (
        <div className="relative h-[100dvh] w-full bg-white text-black font-sans overflow-hidden flex flex-col">

            {/* Top Header */}
            <div className="flex flex-col w-full bg-white z-50 pt-4 pb-2 shrink-0">
                {/* Icons Row */}
                <div className="w-full flex justify-between px-6 mb-4 pointer-events-auto items-center">
                    <Link href="/">
                        <img src="/Cantabil-logo-1.avif" alt="Cantabil" className="h-6 w-auto object-contain cursor-pointer" />
                    </Link>

                    <div className="flex gap-5">
                        <Link href="/notification">
                            <Bell className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                        </Link>
                        <Link href="/wishlist">
                            <Heart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                        </Link>
                        <Link href="/cart">
                            <ShoppingCart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                        </Link>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center w-full mt-4">
                    <div className="flex gap-12 text-xs font-medium tracking-wide">
                        {Object.keys(SEARCH_DATA).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as keyof typeof SEARCH_DATA)}
                                className={`pb-2 border-b-2 transition-colors duration-200 ${activeTab === tab
                                    ? 'border-black text-black font-bold'
                                    : 'border-transparent text-gray-500 hover:text-black'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='w-full h-px bg-gray-200 mt-2' />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pt-6 pb-42 no-scrollbar">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    {SEARCH_DATA[activeTab].map((item, index) => (
                        <div key={index} className="flex flex-row items-center gap-3 group cursor-pointer">
                            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-md bg-gray-100 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs font-medium text-gray-900 group-hover:underline decoration-1 underline-offset-4 leading-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Search Bar Area + Navigation */}
            <div className="absolute bottom-0 left-0 w-full bg-white pt-4 pb-4 flex flex-col items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">

                {/* Search Input */}
                <div className="w-full px-3 mb-4 ">
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by Keyword"
                            className="w-full bg-gray-50 text-gray-900 px-12 py-2 rounded-full border-none outline-none ring-1 ring-gray-200 focus:ring-gray-400 placeholder-gray-400 text-base"
                        />
                        <Scan className="absolute right-4 top-1/2 -translate-y-1/2  w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center gap-12 md:gap-24 pb-2">
                    {/* Home Button */}
                    <Link
                        href={'/'}
                        className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform transition active:scale-95 hover:bg-gray-50"
                    >
                        <Home className="w-5 h-5 text-black" />
                    </Link>

                    {/* Search Button - Active State */}
                    <div className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center shadow-xl transform scale-110">
                        <Search className="w-5 h-5" />
                    </div>

                    {/* Profile Button */}
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

export default SearchPage;
