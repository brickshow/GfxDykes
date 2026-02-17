'use client'

import { Zap } from 'lucide-react'

const tools = [
  { name: 'Adobe Photoshop', level: '100%', color: 'from-blue-500 to-cyan-500' },
  { name: 'Adobe Illustrator', level: '100%', color: 'from-yellow-500 to-orange-500' },
  { name: 'Canva', level: '100%', color: 'from-pink-500 to-red-500' },
]

const skills = [
  'Logo Design',
  'Brand Identity',
  'Print Design',
  'Web Design',
  'Social Media Design',
  'Typography',
  'Color Theory',
  'Illustration',
  'Photo Editing',
  'Layout Design',
  'Packaging Design',
  'UI/UX Design',
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative hexagons */}
      <div className="absolute top-20 left-10 opacity-5">
        <svg viewBox="0 0 200 200" className="w-64 h-64">
          <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="100,40 170,77 170,117 100,160 30,117 30,77" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Tools section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Design <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Professional proficiency in industry-leading design software
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{tool.name}</h3>
                  <span className="text-primary font-bold">{tool.level}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-3 bg-background rounded-full overflow-hidden border border-border">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${tool.color}`}
                    style={{ width: tool.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Core <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Specialized expertise across creative disciplines
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-semibold">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
