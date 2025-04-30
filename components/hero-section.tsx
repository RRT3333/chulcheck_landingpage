import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f0f4ff_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <QrCode className="mr-1 h-4 w-4" />
              대학 동아리를 위한 스마트 출석체크
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl font-geist leading-tight">
              QR코드로 <span className="text-primary">스마트하게</span> <br />출석체크
            </h1>

            <p className="mb-8 text-lg text-slate-600 font-noto md:text-xl max-w-xl">
              각 세션마다 고유한 QR코드를 생성하거나 PIN 코드를 사용하여 빠르게 출석체크하세요.
            </p>

            {/* <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-800 mb-8">
              출석을 스마트하게, 동아리를 효율적으로
            </div> */}
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-800 mb-8">
              지금 등록하면 평생 무료
            </div>

            <div>
              {/* 
                본 서비스 오픈 시 실제 서비스 URL로 연결하도록 변경 필요
                예: <Link href="/signup"> 또는 <Link href="/dashboard">
              */}
              <Link href="#waitlist">
                <Button className="h-14 px-8 text-base font-noto bg-white text-primary hover:bg-slate-50 border border-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  출첵 시작하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden p-4 rotate-2">
              <div className="bg-primary rounded-xl p-6 aspect-[9/16] w-[280px] flex flex-col items-center justify-center">
                <QrCode className="w-32 h-32 text-white mb-4" />
                <div className="text-white font-noto text-center">
                  <p className="text-xs mb-1">동아리명: 프로그래밍 동아리</p>
                  <p className="text-xs mb-3">세션: 주간 미팅 #42</p>
                  <p className="text-sm font-bold">QR코드를 스캔하세요</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mint/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary font-michroma">1,000+</p>
            <p className="text-sm text-slate-600 font-noto">활성 동아리</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary font-michroma">50,000+</p>
            <p className="text-sm text-slate-600 font-noto">월간 출석체크</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary font-michroma">30+</p>
            <p className="text-sm text-slate-600 font-noto">대학교</p>
          </div>
        </div>
      </div>
    </section>
  )
}
