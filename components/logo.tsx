import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showTagline?: boolean
  white?: boolean
}

export default function Logo({ className, showTagline = false, white = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("font-michroma text-2xl tracking-wider", white ? "text-white" : "text-primary")}>
        Chulcheck.kr
      </div>
      {showTagline && (
        <p className={cn("text-xs mt-1 font-noto", white ? "text-white/80" : "text-slate-600")}>
          출석을 스마트하게, 동아리를 효율적으로
        </p>
      )}
    </div>
  )
}
