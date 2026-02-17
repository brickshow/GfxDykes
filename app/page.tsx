'use client'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import PortfolioSection from '@/components/portfolio-section'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="text-lg md:text-xl font-semibold tracking-[0.2em] uppercase text-foreground"
          >
            GfxDykes
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="bg-background text-foreground overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}
