import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-slate-50">
      <div className="container px-3 md:px-6">
        <div className="bg-primary rounded-3xl p-4 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-mint/20 rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-mint/10 rounded-full blur-3xl -ml-10 -mb-10 md:-ml-20 md:-mb-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-0">
            <div className="md:flex-1">
              <QrCode className="h-8 w-8 md:h-12 md:w-12 text-white/80 mb-2 mx-auto md:mx-0" />
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white font-michroma md:text-4xl">
                지금 바로 출석체크를<br />시작하세요
              </h2>
              <p className="mb-4 text-base text-white/80 font-noto md:text-xl max-w-xl mx-auto md:mx-0">
                이미 수천 개의 대학 동아리가 출첵으로 출석 관리를 간소화하고 있습니다. 지금 바로 무료로 시작해보세요.
              </p>
            </div>
            <div className="md:ml-8">
              {/* 
                본 서비스 오픈 시 실제 서비스 URL로 연결하도록 변경 필요
                예: <Link href="/signup"> 또는 <Link href="/dashboard">
              */}
              <Link href="#waitlist">
                <Button className="h-11 px-6 text-sm font-noto bg-white text-primary hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  무료로 시작하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
