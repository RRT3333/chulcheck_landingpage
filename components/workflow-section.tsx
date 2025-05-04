import { Building, CalendarPlus, ScanLine, PieChart } from "lucide-react"

export default function WorkflowSection() {
  const steps = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "동아리 생성",
      description: "동아리를 만들고 부원들을 초대하세요.",
    },
    {
      icon: <CalendarPlus className="h-8 w-8 text-primary" />,
      title: "세션 만들기",
      description: "모임이나 행사를 위한 출석 세션을 생성하세요.",
    },
    {
      icon: <ScanLine className="h-8 w-8 text-primary" />,
      title: "QR/PIN 출석",
      description: "QR코드를 스캔하거나 PIN을 입력하여 출석체크하세요.",
    },
    {
      icon: <PieChart className="h-8 w-8 text-primary" />,
      title: "데이터 확인",
      description: "출석 현황과 통계를 실시간으로 확인하세요.",
    },
  ]

  return (
    <section id="workflow" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-michroma md:text-4xl mb-4">
            출첵 사용 방법
          </h2>
          <p className="text-slate-600 font-noto text-lg max-w-2xl mx-auto">
            4단계만 따라하면 누구나 쉽게 시작할 수 있습니다. 지금 바로 시작해보세요!
          </p>
        </div>

        {/* Mobile view */}
        <div className="md:hidden space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start bg-white rounded-xl p-2 shadow-sm">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-2">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xs font-bold text-primary font-michroma mr-1">STEP {index + 1}</span>
                  <h3 className="text-base font-bold text-slate-900 font-noto">{step.title}</h3>
                </div>
                <p className="text-slate-600 font-noto text-sm mt-0.5 leading-tight">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - 가로 레이아웃 */}
        <div className="hidden md:block">
          {/* 상단 라인 */}
          <div className="relative h-1 bg-gradient-to-r from-primary via-mint to-primary mx-auto mb-8 rounded-full max-w-5xl">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className="absolute top-1/2 -translate-y-1/2" 
                style={{ left: `${(index * 100) / (steps.length - 1)}%` }}
              >
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* 단계별 카드 */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <span className="text-sm font-bold text-primary font-michroma block mb-2">STEP {index + 1}</span>
                <h3 className="text-xl font-bold text-slate-900 font-noto mb-2">{step.title}</h3>
                <p className="text-slate-600 font-noto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
