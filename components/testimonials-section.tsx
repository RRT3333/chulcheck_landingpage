export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "인기 활동과 참여도 분석이 가능해져, 행사 기획이 수월해졌습니다",
      author: "전민우",
      role: "국제금융학회",
      university: "고려대학교",
    },
    {
      quote: "chulcheck 서비스 덕분에 동아리 운영이 훨씬 체계적이고 편해졌어요!",
      author: "이예림",
      role: "구름톤 유니브",
      university: "한국외국어대학교",
    },
    {
      quote: "출석부 정리 없이도, 필요한 데이터를 한눈에 확인할 수 있어 정말 편해요.",
      author: "윤기현",
      role: "전자음악 동아리",
      university: "홍익대학교",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 font-michroma md:text-4xl">
          사용자 후기
        </h2>
        <p className="mb-12 text-center text-slate-600 font-noto text-lg max-w-2xl mx-auto">
          출첵을 사용하는 학생들의 실제 경험을 들어보세요.
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-slate-50 p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-2 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 opacity-50"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="mb-3 text-slate-600 font-noto text-sm italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-2">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 font-noto text-sm">{testimonial.author}</p>
                  <p className="text-xs text-slate-500 font-noto">
                    {testimonial.role} · {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
