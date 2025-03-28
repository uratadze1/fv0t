"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Wallet2, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1.5 px-4 rounded-full shadow-lg max-[550px]:gap-1 max-[550px]:px-2">
        <Link 
          href="/"
          className="flex items-center gap-2 px-3 py-1.5 hover:text-primary transition-colors max-[550px]:px-2"
        >
          <Wallet2 className="h-5 w-5 text-primary max-[550px]:h-4 max-[550px]:w-4" />
          <span className="hidden sm:inline-flex items-center font-bold text-base tracking-tight">
            <span className="text-foreground">Budget</span>
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Wise</span>
          </span>
        </Link>
        
        <div className="h-6 w-px bg-border mx-1 hidden sm:block" />
        
        <div className="flex-1 flex items-center justify-center gap-3 max-[550px]:gap-1">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                  "max-[550px]:px-3"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} className="max-[550px]:h-4 max-[550px]:w-4" />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
        
        <div className="h-6 w-px bg-border mx-1" />
        
        <div className="flex items-center gap-3 max-[550px]:gap-1">
          <ThemeToggle />
          <Button 
            variant="ghost"
            size={isMobile ? "icon" : "default"}
            className="hover:bg-primary/10 font-medium sm:px-6 max-[550px]:scale-90"
          >
            <span className="hidden sm:inline">Sign in</span>
            <LogIn className="h-4 w-4 sm:hidden" />
          </Button>
        </div>
      </div>
    </div>
  )
} 