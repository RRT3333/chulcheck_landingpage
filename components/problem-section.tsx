import { ClipboardList, TrendingUp, RefreshCcw, Users } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: "정확한 출석 데이터 자동 수집",
      description: "수기로 적고 모으던 불편함 없이, 자동으로 정확한 출석 기록이 저장됩니다.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "활동 참여율이 한눈에",
      description: "누가 얼마나 활동했는지 즉시 확인! 공정한 평가와 피드백이 쉬워집니다.",
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-primary" />,
      title: "수작업 반복 없는 빠른 출석체크",
      description: "QR/PIN으로 단 몇 초 만에 출석 완료! 소중한 시간을 아껴드립니다.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "부원 명단도 깔끔하게 관리",
      description: "부원 정보부터 연명부 정리까지, 엑셀 없이도 오류 없이 관리할 수 있습니다.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-michroma mb-4">
            매번 번거로운 출석체크<br className="md:hidden" /> 더이상 고민하지 마세요
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-noto mb-4">출석부터 명단 관리까지, 단번에 해결하세요.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-2 md:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-primary/30 flex items-start"
            >
              <div className="mr-2 md:mr-4 rounded-full bg-primary/10 p-1.5 md:p-3 flex-shrink-0">{problem.icon}</div>
              <div>
                <h3 className="text-base md:text-xl font-bold text-primary font-noto mb-0.5 md:mb-2">{problem.title}</h3>
                <p className="text-xs md:text-base text-slate-600 font-noto leading-tight">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <div className="bg-primary rounded-2xl p-4 md:p-8 text-white shadow-lg">
            <p className="text-base md:text-xl lg:text-2xl font-medium font-noto leading-tight">
              "가장 번거로운 출석과<br className="md:hidden" /> 운영 관리를 자동화하여 <br className="hidden md:block" />
              <span className="font-bold">여러분이 진짜 중요한<br className="md:hidden" /> 활동에 집중할 수 있도록<br className="md:hidden" /> 도와드립니다."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
