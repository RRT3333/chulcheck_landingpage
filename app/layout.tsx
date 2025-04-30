import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: '출첵 (ChulCheck) - 동아리 출석체크 플랫폼',
  description: '대학 동아리를 위한 스마트한 출석체크 솔루션. QR코드와 PIN으로 간편하게 출석체크하고, 실시간으로 데이터를 분석하세요.',
  generator: 'Next.js',
  applicationName: '출첵 (ChulCheck)',
  keywords: ['출석체크', '동아리', '대학', 'QR코드', '출석 관리', '동아리 관리', '출첵', 'ChulCheck'],
  authors: [{ name: '출첵 팀', url: 'https://chulcheck.kr' }],
  creator: '출첵 팀',
  publisher: '출첵',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chulcheck.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '출첵 (ChulCheck) - 동아리 출석체크 플랫폼',
    description: '대학 동아리를 위한 스마트한 출석체크 솔루션. QR코드와 PIN으로 간편하게 출석체크하고, 실시간 통계를 확인하세요.',
    url: 'https://chulcheck.kr',
    siteName: '출첵 (ChulCheck)',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '출첵 (ChulCheck) - 동아리 출석체크 플랫폼',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '출첵 (ChulCheck) - 동아리 출석체크 플랫폼',
    description: '대학 동아리를 위한 스마트한 출석체크 솔루션',
    images: ['/twitter-image.png'],
    creator: '@chulcheck',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
