import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-32 bg-white border-t border-slate-100">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-primary/10 px-5 py-2.5 text-base font-medium text-primary mb-6">
            🎉 chulcheck.kr, 곧 오픈합니다
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-michroma mb-8">
            가장 먼저 출첵을 경험해보세요
          </h2>
          <p className="mb-10 text-xl text-slate-600 font-noto max-w-2xl mx-auto">
            이메일을 남겨주시면 출첵이 정식 오픈할 때 가장 먼저 알려드리고 <br/> 얼리 액세스 기회를 제공해드립니다.
          </p>

          <div className="bg-slate-50 p-10 rounded-2xl shadow-sm mb-12">
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="이메일 주소" 
                className="flex-1 font-noto h-14 text-lg" 
                required 
              />
              <Button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary/90 font-noto h-14 px-8 text-lg"
              >
                알림받기
              </Button>
            </form>
            <p className="mt-5 text-sm text-slate-500 font-noto">스팸 없이, 출첵 관련 소식만 전해드려요.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-16 text-center">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-primary font-michroma">100+</p>
              <p className="text-base text-slate-600 font-noto mt-2">대기자 수</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-primary font-michroma">2주 이내</p>
              <p className="text-base text-slate-600 font-noto mt-2">출시 예정</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-primary font-michroma">무료</p>
              <p className="text-base text-slate-600 font-noto mt-2">얼리 액세스</p>
            </div>
          </div>
          
          {/* 여기에 API나 다른 페이지 연결 필요 - 본 서비스 오픈 시 연결 */}
        </div>
      </div>
    </section>
  )
}
