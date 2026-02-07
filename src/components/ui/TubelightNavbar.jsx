import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[200] mb-6 sm:pt-6",
        className,
      )}
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translate(-50%)',
        zIndex: 200,
        ...(isMobile ? { bottom: '20px' } : { top: '20px' })
      }}
    >
      <div 
        className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '4px',
          borderRadius: '9999px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white",
                "text-white" // Force white text just in case
              )}
              style={{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                transition: 'color 0.2s',
                color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.8)',
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none'
              }}
            >
              <span className="hidden md:inline" style={{ display: isMobile ? 'none' : 'inline' }}>{item.name}</span>
              <span className="md:hidden" style={{ display: isMobile ? 'inline' : 'none' }}>
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '9999px',
                    zIndex: -10
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full" style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', width: '32px', height: '4px', background: '#fff', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px' }}>
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" style={{ position: 'absolute', width: '48px', height: '24px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', filter: 'blur(12px)', top: '-8px', left: '-8px' }} />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" style={{ position: 'absolute', width: '32px', height: '24px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', filter: 'blur(12px)', top: '-4px' }} />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" style={{ position: 'absolute', width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', filter: 'blur(4px)', top: '0', left: '8px' }} />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
