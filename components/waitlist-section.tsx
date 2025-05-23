"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { API_BASE_URL } from "@/config/api"

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    try {
      const res = await fetch(`${API_BASE_URL}/save/${encodeURIComponent(email)}`, {
        method: 'POST',
      });
      if (res.ok) {
        alert("등록되었습니다");
        setEmail("");
      } else {
        alert("서버 오류 또는 등록 실패: " + res.status);
      }
    } catch (err) {
      alert("네트워크 오류: " + JSON.stringify(err));
      console.error(err);
    }
  };

  return (
    <section id="waitlist" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6">
            🎉 chulcheck.kr, 곧 오픈합니다
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-michroma mb-4 sm:mb-6">
            가장 먼저 출첵을 경험해보세요
          </h2>
          <p className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-slate-600 font-noto max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
            이메일을 남겨주시면 출첵이 정식 오픈할 때 가장 먼저 알려드리고 <span className="hidden sm:inline"><br/></span> 얼리 액세스 기회를 제공해드립니다.
          </p>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-sm mb-8 sm:mb-10">
            <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="이메일 주소" 
                className="flex-1 font-noto h-11 sm:h-12 md:h-14 text-sm sm:text-base" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary/90 font-noto h-11 sm:h-12 md:h-14 px-4 sm:px-6 text-sm sm:text-base"
              >
                알림받기
              </Button>
            </form>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 font-noto">스팸 없이, 출첵 관련 소식만 전해드려요.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 text-center">
            <div className="flex flex-col items-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-michroma">100+</p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-noto mt-1 sm:mt-2">대기자 수</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-michroma">2주 이내</p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-noto mt-1 sm:mt-2">출시 예정</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-michroma">무료</p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-noto mt-1 sm:mt-2">얼리 액세스</p>
            </div>
          </div>
          
          {/* 여기에 API나 다른 페이지 연결 필요 - 본 서비스 오픈 시 연결 */}
        </div>
      </div>
    </section>
  )
}
