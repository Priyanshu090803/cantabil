"use client";

import { Bell, Heart, ShoppingCart, Home, Search, User, Package, ShoppingBag, Ticket, ClipboardList, Settings, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ProfilePage = () => {
    return (
        <div className="relative h-[100dvh] w-full bg-gray-50 text-black font-sans overflow-hidden flex flex-col">

            {/* Top Header */}
            <div className="flex w-full bg-white z-50 pt-4 pb-6 px-6 items-center justify-between shadow-sm shrink-0">
                <span className=" font-medium text-gray-800">Membership</span>
                <div className="flex gap-5">
                    <Link href="/notification">
                        <Bell className="w-5 h-5 text-neutral-700 cursor-pointer hover:opacity-60 transition" />
                    </Link>
                    <Link href="/wishlist">
                        <Heart className="w-5 h-5 text-neutral-700 cursor-pointer hover:opacity-60 transition" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart className="w-5 h-5 text-neutral-700 cursor-pointer hover:opacity-60 transition" />
                    </Link>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">

                {/* Grid Menu */}
                <div className="bg-white pt-14  p-4 mb-3">
                    <div className="grid grid-cols-3 gap-y-8 gap-x-2">
                        {/* Profile */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <User className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Profile</span>
                        </div>
                        {/* Order History */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <Package className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Order history</span>
                        </div>
                        {/* Purchase History */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Purchase history</span>
                        </div>

                        {/* Vouchers */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <Ticket className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Vouchers</span>
                        </div>
                        {/* Store Service Survey */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <ClipboardList className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Store service<br />survey</span>
                        </div>
                        {/* Online Shopping Survey */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <ClipboardList className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Online shopping<br />service survey</span>
                        </div>

                        {/* Settings */}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <Settings className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
                            <span className="text-[10px] text-center font-medium leading-tight">Settings</span>
                        </div>
                    </div>
                </div>

                {/* List Menu */}
                <div className="bg-white px-6 py-2 mb-8">
                    {[
                        "STORE LOCATOR",
                        "GETTING STARTED",
                        "FAQS",
                        "TERMS OF USE",
                        "PRIVACY POLICY"
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-none cursor-pointer hover:bg-gray-50 transition">
                            <span className="text-sm font-medium text-gray-800">{item}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                    ))}
                </div>

                <div className="px-6 text-center text-[10px] text-gray-400 pb-8">
                    Version: 7.25.800 (90562) 9155041A32
                    <br />
                    <span className="text-blue-500 cursor-pointer">OSS Licenses</span>
                </div>
            </div>

            {/* Bottom Search Bar Area + Navigation */}
            <div className="absolute bottom-0 left-0 w-full bg-white pt-4 pb-4 flex flex-col items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">

                {/* Bottom Navigation */}
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


                    {/* Profile Button - Active State */}
                    <div className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center shadow-xl transform scale-110">
                        <User className="w-5 h-5" />
                    </div>
                </div>


                {/* Bottom Home Indicator Bar */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full" />
            </div>
        </div>
    );
};

export default ProfilePage;
