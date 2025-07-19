"use client"

import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
      <Button size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg" asChild>
        <a
          href="https://www.facebook.com/profile.php?id=61573843852574"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </Button>

      <Button
        size="icon"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg"
        asChild
      >
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
      </Button>

      <Button size="icon" className="bg-black hover:bg-gray-800 rounded-full shadow-lg" asChild>
        <a
          href="https://tiktok.com/@fone.fixer.nz%3F_t%3DZS-8uRvLOFtaR0%26_r%3D1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
      </Button>
    </div>
  )
}
