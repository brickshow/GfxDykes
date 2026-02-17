'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 100 100" className="absolute top-20 right-20 w-96 h-96">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Jordan, a passionate graphic designer with a love for creating beautiful, meaningful designs that communicate powerful messages. With over 5 years of experience in the industry, I've had the privilege of working with diverse clients to bring their visions to life.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My design philosophy centers on combining aesthetic appeal with strategic thinking. I believe that great design isn't just about how something looks—it's about how it functions and connects with your audience.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not designing, you can find me exploring new design trends, attending creative workshops, or collaborating with fellow creatives to push the boundaries of what's possible in visual communication.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">What I'm passionate about:</h3>
                <ul className="space-y-3">
                  {['Brand storytelling', 'Creative problem solving', 'User-centric design', 'Innovation in visual arts'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Statistics */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">150+</div>
              <p className="text-muted-foreground font-semibold">Projects Completed</p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">100+</div>
              <p className="text-muted-foreground font-semibold">Happy Clients</p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">5+</div>
              <p className="text-muted-foreground font-semibold">Years Experience</p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">15+</div>
              <p className="text-muted-foreground font-semibold">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
