import { useState } from 'react';
import { Search, Scan, X } from 'lucide-react';
import { SEARCH_DATA } from '@/utils/searchData';

interface SearchOverlayProps {
    onClose: () => void;
    isOpen: boolean;
}

const SearchOverlay = ({ onClose, isOpen }: SearchOverlayProps) => {
    const [activeTab, setActiveTab] = useState<keyof typeof SEARCH_DATA>("WOMEN");

    // Only render or animate based on isOpen, typically handled by parent conditionally or via css classes.
    // Here we will assume it is conditionally rendered or we use a fixed overlay.

    return (
        <div className={`fixed inset-0 bg-white z-[100] flex flex-col transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

            {/* Header / Tabs */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <div className="flex flex-1 justify-between text-sm font-semibold tracking-wide text-gray-500">
                    {Object.keys(SEARCH_DATA).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as keyof typeof SEARCH_DATA)}
                            className={`pb-2 border-b-2 transition-colors duration-200 ${activeTab === tab
                                    ? 'border-black text-black'
                                    : 'border-transparent hover:text-gray-800'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mb-4' />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-24 no-scrollbar">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {SEARCH_DATA[activeTab].map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 group cursor-pointer">
                            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Search Bar Area */}
            <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 pb-8 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by Keyword"
                        className="w-full bg-gray-50 text-gray-900 pl-12 pr-12 py-4 rounded-full border-none outline-none ring-1 ring-gray-200 focus:ring-gray-400 placeholder-gray-400 text-base"
                    />
                    <Scan className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
                </div>

                {/* Close Button - Optional addition to close the overlay manually if needed, 
                     though the design doesn't explicitly show it, it is good UX */}
                <button
                    onClick={onClose}
                    className="absolute -top-16 right-6 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
                >
                    <X className="w-6 h-6 text-black" />
                </button>
            </div>
        </div>
    );
};

export default SearchOverlay;
