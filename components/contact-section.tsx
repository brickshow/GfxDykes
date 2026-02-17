'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/pamintuan26#', label: 'Facebook' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact info cards */}
            <div className="p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                Jordan02614@gmail.com
              </a>
            </div>

            <div className="p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-lg mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +639927376929 - +639480523540
              </a>
            </div>

            <div className="p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground">
                City, Country
              </p>
            </div>
          </div>

          {/* Payment methods and social links */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 pt-8 border-t border-border">
            {/* Payment methods */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Payment Methods</h3>
              <div className="flex flex-wrap gap-4">
                {['GCash', 'Maya', 'Bank Transfer'].map((method) => (
                  <div key={method} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-semibold hover:border-primary transition-colors">
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © Studio Launch Web. All rights reserved.
        </p>
      </div>
    </section>
  )
}
