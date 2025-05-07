import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24 bg-white">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f0f4ff_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6">
              <QrCode className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              대학 동아리를 위한 스마트 출석체크
            </div>

            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-geist leading-tight">
              QR코드로 <span className="text-primary">스마트하게</span> <br />
              출석체크
            </h1>

            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-slate-600 font-noto md:text-xl max-w-xl">
              <span className="md:inline">종이 출석부는 이제 그만!</span> <br className="md:hidden" />
              QR코드로 간편하게 출석하고<br />실시간으로 데이터를 분석하세요.
            </p>

            <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-800 mb-6 sm:mb-8">
              지금 등록하면 평생 무료
            </div>

            <div>
              <Link href="#waitlist">
                <Button className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-noto bg-white text-primary hover:bg-slate-50 border border-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  출첵 시작하기
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[310px]">
              <div className="relative z-10 bg-white max-w-[350px] rounded-2xl shadow-lg overflow-hidden p-4 rotate-2">
                <div className="bg-primary rounded-xl p-6 aspect-[9/16] w-full md:w-[280px] flex flex-col items-center justify-center">
                  <QrCode className="w-24 sm:w-32 h-24 sm:h-32 text-white mb-4" />
                  <div className="text-white font-noto text-center">
                    <p className="text-xs mb-1">동아리명: 프로그래밍 동아리</p>
                    <p className="text-xs mb-3">세션: 주간 미팅 #42</p>
                    <p className="text-sm font-bold">QR코드를 스캔하세요</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 text-center">
          {/* <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary font-michroma">1,000+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-noto">활성 동아리</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary font-michroma">50,000+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-noto">월간 출석체크</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary font-michroma">30+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-noto">대학교</p>
          </div> */}

          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary font-michroma">100+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-noto">대기자수</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary font-michroma">2주 이내</p>
            <p className="text-xs sm:text-sm text-slate-600 font-noto">출시예정</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary font-michroma">무료</p>
            <p className="text-xs sm:text-sm text-slate-600 font-noto">얼리 액세스</p>
          </div>
        </div>
      </div>
    </section>
  )
}
