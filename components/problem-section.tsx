import { ClipboardList, TrendingUp, RefreshCcw, Users, FileQuestion, UserX, FileX } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: <ClipboardList className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />,
      title: "수기 출석부 작성",
      description: "매번 수기로 출석을 체크하고 정리하느라 시간을 낭비하고 계신가요?",
    },
    {
      icon: <FileQuestion className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />,
      title: "데이터 분석의 어려움",
      description: "출석 데이터를 수집해도 의미있는 통계를 내기가 어려우신가요?",
    },
    {
      icon: <UserX className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />,
      title: "대리 출석 문제",
      description: "친구 대신 출석을 체크해주는 부정 출석이 걱정되시나요?",
    },
    {
      icon: <FileX className="h-8 sm:h-10 w-8 sm:w-10 text-primary" />,
      title: "문서 관리의 번거로움",
      description: "출석부를 분실하거나 관리하기 어려워 고민이신가요?",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-michroma mb-3 sm:mb-4">
            출첵은 동아리 운영의 가장 귀찮은 출석 문제를 해결합니다
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-noto max-w-2xl mx-auto">
            <span className="font-bold text-primary">수기 출석 관리, 이제 그만!</span> <br />
            출첵으로 출석 체크는 더 빠르게, 데이터는 더 정확히.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-primary/30 flex items-start"
            >
              <div className="mr-3 sm:mr-4 rounded-full bg-primary/10 p-2 sm:p-3 flex-shrink-0">{problem.icon}</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary font-noto mb-1 sm:mb-2">{problem.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 font-noto">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-lg">
            <p className="text-lg sm:text-xl md:text-2xl font-medium font-noto">
              "가장 번거로운 출석과 운영 관리를 자동화하여<br className="hidden md:block" />
              <span className="font-bold">여러분이 진짜 중요한 활동에 집중할 수 있도록 도와드립니다."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
