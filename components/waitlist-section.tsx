import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 bg-white border-t border-slate-100">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            🎉 출첵, 곧 오픈합니다
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-michroma mb-6">
            가장 먼저 출첵을 경험해보세요
          </h2>
          <p className="mb-8 text-lg text-slate-600 font-noto max-w-xl mx-auto">
            이메일을 남겨주시면 출첵이 정식 오픈할 때 가장 먼저 알려드리고 얼리 액세스 기회를 제공해드립니다.
          </p>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm mb-8">
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="이메일 주소" 
                className="flex-1 font-noto h-12 text-base" 
                required 
              />
              <Button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary/90 font-noto h-12 px-6 text-base"
              >
                알림받기
              </Button>
            </form>
            <p className="mt-4 text-sm text-slate-500 font-noto">스팸 없이, 출첵 관련 소식만 전해드려요.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-primary font-michroma">100+</p>
              <p className="text-sm text-slate-600 font-noto">대기자 수</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-primary font-michroma">2주 이내</p>
              <p className="text-sm text-slate-600 font-noto">출시 예정</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-primary font-michroma">무료</p>
              <p className="text-sm text-slate-600 font-noto">얼리 액세스</p>
            </div>
          </div>
          
          {/* 여기에 API나 다른 페이지 연결 필요 - 본 서비스 오픈 시 연결 */}
        </div>
      </div>
    </section>
  )
}
