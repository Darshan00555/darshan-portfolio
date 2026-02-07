import React, { useState, useEffect } from 'react';
import { Equal, X } from 'lucide-react';
import { Button } from './LiquidGlassButton';
import { cn } from '../../lib/utils'; 

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
];

export const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
            <nav
                data-state={menuState && 'active'}
                className="fixed left-0 w-full z-20 px-2"
            >
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-black/50 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex gap-2 items-center text-white"
                            >
                                <span className="font-bold text-xl tracking-tighter">@DARSHN<span className="text-gray-400">DEV</span></span>  
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
                            >
                                <Equal className={cn("m-auto size-6 duration-200", menuState ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
                                <X className={cn("absolute inset-0 m-auto size-6 duration-200", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
                            </button>
                        </div>

                        <div className="hidden lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-gray-400 hover:text-white block duration-150"
                                        >
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn(
                            "bg-black/90 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-zinc-900/50",
                            "lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                            menuState ? "block" : "hidden lg:flex"
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-400 hover:text-white block duration-150"
                                                onClick={() => setMenuState(false)}
                                            >
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                                >
                                    <a href="#contact">
                                        <span>Let's Talk</span>
                                    </a>
                                </Button>
                                
                                <div className={cn("hidden lg:block text-xs font-medium text-white/50 uppercase tracking-widest", !isScrolled && "block")}>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
