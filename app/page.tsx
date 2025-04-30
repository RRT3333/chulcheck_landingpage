import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ProblemSection from "@/components/problem-section"
import WorkflowSection from "@/components/workflow-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import WaitlistSection from "@/components/waitlist-section"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <WorkflowSection />
        <TestimonialsSection />
        <CtaSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  )
}
