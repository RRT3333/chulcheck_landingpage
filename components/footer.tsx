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
                <Link href="#" className="text-slate-600 hover:text-primary">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  가격 안내
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  고객 사례
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 font-michroma">기능</h3>
            <ul className="space-y-2 text-sm font-noto">
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  QR 출석체크
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  통계 및 분석
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-primary">
                  동아리 관리
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
          <div className="flex gap-4">
            <Link href="#" className="text-slate-600 hover:text-primary">
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-primary">
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
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-primary">
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
