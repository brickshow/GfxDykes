'use client'

import { Palette, Zap, FileText, Users, Layers, Image, Shirt, Sparkles, Wand2 } from 'lucide-react'

const services = [
  { icon: Palette, title: 'Logo Design', description: 'Unique and memorable brand identities' },
  { icon: FileText, title: 'Flyers', description: 'Eye-catching promotional materials' },
  { icon: Zap, title: 'Tarpaulin Design', description: 'Large format banner designs' },
  { icon: Layers, title: 'Print Design', description: 'Business cards, brochures & more' },
  { icon: Users, title: 'Invitations', description: 'Beautiful event invitations' },
  { icon: Image, title: 'Photo Restoration', description: 'Professional image enhancement' },
  { icon: Shirt, title: 'T-shirt Design', description: 'Creative apparel graphics' },
  { icon: Sparkles, title: 'Canva Templates', description: 'Ready-to-use design templates' },
  { icon: Wand2, title: 'Caricature', description: 'Personalized digital art' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Services I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive design solutions for all your creative needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
