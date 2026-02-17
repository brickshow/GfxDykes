'use client'

import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-24 md:pt-0">
      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      {/* Diagonal lines accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <line x1="0" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="0" x2="400" y2="350" stroke="currentColor" strokeWidth="2" />
          <line x1="100" y1="0" x2="400" y2="300" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Main title with animation */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Graphic <span className="text-primary">Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Your Brand, Beautifully Designed
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 animate-bounce">
            <svg className="w-6 h-6 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
