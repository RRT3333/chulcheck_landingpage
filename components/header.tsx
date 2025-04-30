"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-primary font-noto">
              기능 소개
            </Link>
            <Link href="#workflow" className="text-sm font-medium text-slate-600 hover:text-primary font-noto">
              사용 방법
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary font-noto">
              사용자 후기
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="font-noto text-sm">
              로그인
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 font-noto text-sm">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
