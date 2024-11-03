// Layout.js
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const navigation = [
        {
            title: 'Getting Started',
            items: [
                { name: 'Introduction', path: '/' },
                { name: 'Installation', path: '/' },
                { name: 'Usage', path: '/' }
            ]
        },
        {
            title: 'Components',
            items: [
                { name: 'Button', path: '/' },
                { name: 'Card', path: '/cards' },
                { name: 'Input', path: '/' },
                { name: 'Modal', path: '/' },
                { name: 'Table', path: '/' }]
        },
        {
            title: 'Resources',
            items: [
                { name: 'Examples', path: '/' },
                { name: 'API Reference', path: '/' },
                { name: 'Changelog', path: '/' }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Top Navigation */}
            <header className="fixed top-0 z-50 w-full border-b p-bg">
                <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <span className="text-xl font-bold">Your Library</span>
                    </div>
                    <div className="hidden md:flex relative w-96">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <nav className="flex items-center gap-4">
                        <a href="#" className="hover:text-blue-600">GitHub</a>
                        <a href="#" className="hover:text-blue-600">Discord</a>
                    </nav>
                </div>
            </header>

            {/* Sidebar Navigation */}
            <aside className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r bg-white transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <nav className="h-full overflow-y-auto p-4">
                    {navigation.map((section, idx) => (
                        <div key={idx} className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="font-semibold text-gray-900">{section.title}</h2>
                                <ChevronDown size={16} className="text-gray-500" />
                            </div>
                            <ul className="">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <Link
                                            to={item.path}  // Use the path defined in navigation
                                            className="block border-l px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className={`pt-16 ${sidebarOpen ? 'ml-64' : 'ml-0'} min-h-screen transition-all duration-200 ease-in-out`}>
                <div className="container mx-auto p-6">
                    <Outlet /> {/* Renders nested route components here */}
                </div>
            </main>
        </div>
    );
};

export default Layout;
