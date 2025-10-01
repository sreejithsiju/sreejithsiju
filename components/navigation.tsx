"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Teaching", href: "#teaching" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="mb-12">
            <h1 className="text-2xl font-bold mb-2">Dr. Jane Smith</h1>
            <p className="text-muted-foreground text-sm">Professor of Computer Science</p>
          </div>

          <ul className="space-y-6 flex-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <a href="/cv.pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Download CV →
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
