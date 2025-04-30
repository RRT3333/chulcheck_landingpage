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
            출첵으로 출석체크를 시작하는 방법은 매우 간단합니다.
          </p>
        </div>

        {/* Mobile view */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start bg-white rounded-xl p-4 shadow-sm">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-mint/20 mr-4">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xs font-bold text-primary font-michroma mr-2">STEP {index + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900 font-noto">{step.title}</h3>
                </div>
                <p className="text-slate-600 font-noto text-base mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-mint to-primary"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                <div className="flex-1"></div>

                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-mint shadow-md">
                  {step.icon}
                </div>

                <div className="flex-1 text-left pl-12">
                  <span className="text-xs font-bold text-primary font-michroma block mb-1">STEP {index + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900 font-noto">{step.title}</h3>
                  <p className="text-slate-600 font-noto text-base mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
