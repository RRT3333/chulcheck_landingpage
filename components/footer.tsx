import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 font-michroma">출첵</h3>
            <ul className="space-y-2 text-sm font-noto">
              <li>
                <Link href="#features" className="text-slate-600 hover:text-primary">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="#workflow" className="text-slate-600 hover:text-primary">
                  사용 방법
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-slate-600 hover:text-primary">
                  고객 사례
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 font-michroma">출첵 팀</h3>
            <ul className="space-y-2 text-sm font-noto">
              <li>
                <Link href="/company" className="text-slate-600 hover:text-primary">
                  팀 소개
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-slate-600 hover:text-primary">
                팀원 모집 
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-primary">
                  투자자 안내
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 font-michroma">지원</h3>
            <ul className="space-y-2 text-sm font-noto">
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  사용 가이드
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 font-michroma">법적 정보</h3>
            <ul className="space-y-2 text-sm font-noto">
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <div className="flex items-center">
            <Logo className="mr-2" />
            <p className="text-center text-sm text-slate-600 font-noto">
              © {new Date().getFullYear()} chulcheck.kr. All rights reserved.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <Link href="#" className="text-slate-600 hover:text-primary px-6 py-2 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 inline-block mr-2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-noto text-sm">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
