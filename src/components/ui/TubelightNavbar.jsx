"use client"

import React, { useState } from "react"
import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom"
import { Sun, Moon, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavBar({ items, className, theme, onThemeToggle }) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  // Theme-aware inline styles for guaranteed visibility
  const navbarBg = theme === 'dark' 
    ? 'rgba(0, 0, 0, 0.05)' 
    : 'rgba(255, 255, 255, 0.8)';
  
  const navbarBorder = theme === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(156, 163, 175, 0.5)';

  const inactiveTextColor = theme === 'dark' ? '#9ca3af' : '#4b5563';
  const activeTextColor = theme === 'dark' ? '#ffffff' : '#000000';
  const activeBgColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(229, 231, 235, 0.6)';

  return (
    <>
      {/* Main Navbar */}
      <div
        className={cn(
          "fixed bottom-0 sm:top-2 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6",
          className,
        )}
      >
        <div 
          className="flex items-center gap-3 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg border"
          style={{
            backgroundColor: navbarBg,
            borderColor: navbarBorder
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className="relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all"
                style={{
                  color: isActive ? activeTextColor : inactiveTextColor,
                  backgroundColor: isActive ? activeBgColor : 'transparent'
                }}
              >
                <span className="hidden md:inline relative z-10">{item.name}</span>
                <span className="md:hidden relative z-10">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(156, 163, 175, 0.4)'
                    }}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div 
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                      style={{
                        backgroundColor: theme === 'dark' ? '#ffffff' : '#1f2937'
                      }}
                    >
                      <div 
                        className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(31, 41, 55, 0.2)'
                        }}
                      />
                      <div 
                        className="absolute w-8 h-6 rounded-full blur-md -top-1"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(31, 41, 55, 0.2)'
                        }}
                      />
                      <div 
                        className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(31, 41, 55, 0.2)'
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
          
          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="relative cursor-pointer px-3 py-2 rounded-full transition-all"
            style={{
              color: theme === 'dark' ? '#9ca3af' : '#4b5563'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} strokeWidth={2.5} />
            ) : (
              <Sun size={18} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Contact Us Button - Next to navbar on desktop, top-right on mobile */}
      <a
        href="#contact"
        className="fixed top-2 right-4 sm:left-[calc(50%+280px)] sm:right-auto z-[100] pt-6 group"
      >
        <div
          className="flex items-center gap-2 backdrop-blur-lg py-2 px-4 sm:px-6 rounded-full shadow-lg border transition-all hover:scale-105"
          style={{
            backgroundColor: navbarBg,
            borderColor: navbarBorder
          }}
        >
          <Mail 
            size={18} 
            strokeWidth={2.5}
            style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
          />
          <span 
            className="hidden sm:inline text-sm font-semibold"
            style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
          >
            Contact Us
          </span>
        </div>
      </a>
    </>
  )
}
