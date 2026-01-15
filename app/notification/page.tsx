"use client";

import { useState } from 'react';
import { Bell, Heart, ShoppingCart, Home, Search, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const NotificationPage = () => {
    const [activeTab, setActiveTab] = useState("Messages");

    return (
        <div className="relative h-[100dvh] w-full bg-gray-50 text-black font-sans overflow-hidden flex flex-col">

            {/* Top Header */}
            <div className="flex w-full bg-white z-50 pt-4 pb-4 px-6 items-center justify-between shadow-sm shrink-0">
                <span className="text-lg font-medium text-gray-900">Notification</span>
                <div className="flex gap-5">
                    <Link href="/notification">
                        <Bell className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" fill="black" />
                    </Link>
                    <Link href="/wishlist">
                        <Heart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart className="w-5 h-5 text-black cursor-pointer hover:opacity-60 transition" />
                    </Link>
                </div>
            </div>

            {/* Feedback Banner (Mock based on image) */}
            <div className="bg-white p-4 flex items-center gap-4 border-b border-gray-100">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1">Share Your Experience</h3>
                    <p className="text-[10px] text-gray-500 leading-tight mb-2">
                        How was your shopping experience at our online store?<br />
                        (It will only take 1-2 minutes)
                    </p>
                    <button className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                        GIVE FEEDBACK
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white flex w-full border-b border-gray-200">
                <button
                    onClick={() => setActiveTab("Messages")}
                    className={`flex-1 py-3 text-sm font-medium relative ${activeTab === "Messages" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
                >
                    Messages
                </button>
                <button
                    onClick={() => setActiveTab("News")}
                    className={`flex-1 py-3 text-sm font-medium relative ${activeTab === "News" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
                >
                    News
                    <span className="absolute top-3 right-10 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                </button>
            </div>

            {/* Scrollable Content (Empty State) */}
            <div className="flex-1 overflow-y-auto flex items-center justify-center pb-20 no-scrollbar">
                <span className="text-gray-400 text-sm">You do not have any notifications.</span>
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

export default NotificationPage;
