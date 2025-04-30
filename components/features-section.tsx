import { QrCode, BarChart2, Users, FileSpreadsheet } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <QrCode className="h-12 w-12 text-primary" />,
      title: "QR & PIN 출석체크",
      description: "각 세션마다 고유한 QR코드를 생성하거나 PIN 코드를 사용하여 빠르게 출석체크하세요.",
      primary: true,
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      title: "실시간 통계",
      description: "출석률, 지각률, 개인별 참여도를 시각적으로 분석하여 동아리 활동을 효율적으로 관리하세요.",
      primary: false,
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "다중 역할 관리",
      description: "운영진과 일반 부원 간 자동으로 화면이 분리되어 각 역할에 맞는 기능을 제공합니다.",
      primary: false,
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      title: "CSV 다운로드",
      description: "연명부와 출석 데이터를 클릭 한 번으로 내보내기하여 필요한 보고서를 쉽게 작성하세요.",
      primary: false,
    },
  ]

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="container px-4 md:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 font-michroma md:text-4xl">
          핵심 기능
        </h2>
        <p className="mb-12 text-center text-slate-600 font-noto text-lg max-w-2xl mx-auto">
          출첵은 동아리 활동을 더 효율적으로 관리할 수 있는 다양한 기능을 제공합니다.
        </p>

        {/* QR & PIN 출석체크 - 메인 기능 */}
        <div className="mb-12">
          <div className="bg-primary rounded-2xl p-6 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="rounded-full bg-white/10 p-4 w-16 h-16 flex items-center justify-center">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-michroma mb-2">QR & PIN 출석체크</h3>
                <p className="text-white/90 font-noto text-lg">
                  각 세션마다 고유한 QR코드를 생성하거나 PIN 코드를 사용하여 빠르게 출석체크하세요.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="bg-white/10 rounded-full px-3 py-1 text-sm">동적 QR코드 생성</div>
                  <div className="bg-white/10 rounded-full px-3 py-1 text-sm">4자리 PIN 코드 지원</div>
                  <div className="bg-white/10 rounded-full px-3 py-1 text-sm">위치 기반 출석 확인</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 기타 기능들 */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.slice(1).map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-primary/30 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-2">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 font-noto pt-2">{feature.title}</h3>
              </div>
              <p className="text-slate-600 font-noto ml-14">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
