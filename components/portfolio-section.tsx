'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

const portfolioItems = [
  { id: 1, category: 'logos', title: 'Mock up and Logo Flyers', image: '/mock-up/mock1.jpg', tags: ['Logos', 'Branding'] },
  { id: 2, category: 'logos', title: 'Mock up and Logo Flyers', image: '/mock-up/mock2.jpg', tags: ['Logos', 'Branding'] },
  { id: 3, category: 'logos', title: 'Mock up and Logo Flyers', image: '/mock-up/mock3.jpg', tags: ['Logos', 'Branding'] },
  {
    id: 4,
    category: 'restoration',
    type: 'before-after',
    title: 'Photo Restoration',
    beforeImage: '/mock-up/trans1-before.jpg',
    afterImage: '/mock-up/trans1.jpg',
    tags: ['Restoration', 'Before/After'],
  },
  {
    id: 5,
    category: 'restoration',
    type: 'before-after',
    title: 'Photo Restoration',
    beforeImage: '/mock-up/trans2-before.jpg',
    afterImage: '/mock-up/trans2.jpg',
    tags: ['Restoration', 'Before/After'],
  },
  { id: 6, category: 'flyers', title: 'Flyer', image: '/mock-up/poster1.jpg', tags: ['Flyers'] },
  { id: 7, category: 'flyers', title: 'Flyer', image: '/mock-up/poster2.jpg', tags: ['Flyers'] },
  { id: 8, category: 'flyers', title: 'Flyer', image: '/mock-up/poster3.jpg', tags: ['Flyers'] },
  { id: 9, category: 'fonts', title: 'Premium Font 01', image: '/mock-up/font1.jpg', tags: ['Premium Fonts'] },
  { id: 10, category: 'fonts', title: 'Premium Font 02', image: '/mock-up/font2.jpg', tags: ['Premium Fonts'] },
  { id: 11, category: 'fonts', title: 'Premium Font 03', image: '/mock-up/font3.jpg', tags: ['Premium Fonts'] },
  { id: 12, category: 'text-effects', title: 'Premium Text Effect 01', image: '/mock-up/text1.jpg', tags: ['Text Effects'] },
  { id: 13, category: 'text-effects', title: 'Premium Text Effect 02', image: '/mock-up/text2.jpg', tags: ['Text Effects'] },
  { id: 14, category: 'text-effects', title: 'Premium Text Effect 03', image: '/mock-up/text3.jpg', tags: ['Text Effects'] },
  { id: 15, category: 'text-effects', title: 'Premium Text Effect 04', image: '/mock-up/text4.jpg', tags: ['Text Effects'] },
  { id: 16, category: 'text-effects', title: 'Premium Text Effect 05', image: '/mock-up/text5.jpg', tags: ['Text Effects'] },
  { id: 17, category: 'text-effects', title: 'Premium Text Effect 06', image: '/mock-up/text6.jpg', tags: ['Text Effects'] },
  { id: 18, category: 'text-effects', title: 'Premium Text Effect 07', image: '/mock-up/text7.jpg', tags: ['Text Effects'] },
  { id: 19, category: 'text-effects', title: 'Premium Text Effect 08', image: '/mock-up/text8.jpg', tags: ['Text Effects'] },
  { id: 20, category: 'colors', title: 'Color Palette 01', image: '/mock-up/color1.jpg', tags: ['Colors'] },
  { id: 21, category: 'colors', title: 'Color Palette 02', image: '/mock-up/color2.jpg', tags: ['Colors'] },
  { id: 22, category: 'colors', title: 'Color Palette 03', image: '/mock-up/color3.jpg', tags: ['Colors'] },
  { id: 23, category: 'food', title: 'Food Design 01', image: '/mock-up/food1.jpg', tags: ['Food'] },
  { id: 24, category: 'food', title: 'Food Design 02', image: '/mock-up/food2.jpg', tags: ['Food'] },
  { id: 25, category: 'food', title: 'Food Design 03', image: '/mock-up/food3.jpg', tags: ['Food'] },
  { id: 26, category: 'food', title: 'Food Design 04', image: '/mock-up/food4.jpg', tags: ['Food'] },
  { id: 27, category: 'food', title: 'Food Design 05', image: '/mock-up/food5.jpg', tags: ['Food'] },
]  


export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const filters = ['all', 'logos', 'restoration', 'flyers', 'fonts', 'text-effects', 'colors', 'food']
  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6)
  const [beforeAfterValue, setBeforeAfterValue] = useState(50)
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[number] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-0.5 h-96 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-1/3 w-0.5 h-96 bg-gradient-to-t from-primary/20 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore my recent design projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                setShowAll(false)
              }}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                  : 'bg-background border border-border text-foreground hover:border-primary'
              }`}
            >
              {filter === 'text-effects' ? 'Text Effects' : filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => {
            if ('type' in item && item.type === 'before-after') {
              return (
                <div
                  key={item.id}
                  className="group relative h-80 rounded-xl overflow-hidden bg-background border border-border cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item)
                    setIsModalOpen(true)
                  }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} - Before`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: `inset(0 ${100 - beforeAfterValue}% 0 0)` }}
                    >
                      <img
                        src={item.afterImage}
                        alt={`${item.title} - After`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="absolute inset-y-0"
                      style={{ left: `${beforeAfterValue}%` }}
                    >
                      <div className="w-0.5 h-full bg-primary/80 shadow-[0_0_12px_rgba(0,0,0,0.35)]" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-background/80 text-foreground rounded-full text-xs font-semibold">
                      Before
                    </span>
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold">
                      After
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={beforeAfterValue}
                      onChange={(event) => setBeforeAfterValue(Number(event.target.value))}
                      className="w-full accent-primary"
                      aria-label="Photo restoration before and after slider"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-100 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={item.id}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-background"
                onClick={() => {
                  setSelectedItem(item)
                  setIsModalOpen(true)
                }}
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {showAll ? 'Show Fewer Projects' : 'See All Projects'}
          </button>
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open)
          if (!open) setSelectedItem(null)
        }}
      >
        <DialogContent className="max-w-4xl p-6">
          {selectedItem && (
            <div className="space-y-4">
              <DialogTitle>{selectedItem.title}</DialogTitle>
              {'type' in selectedItem && selectedItem.type === 'before-after' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">Before</div>
                    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
                      <img
                        src={selectedItem.beforeImage}
                        alt={`${selectedItem.title} - Before`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">After</div>
                    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
                      <img
                        src={selectedItem.afterImage}
                        alt={`${selectedItem.title} - After`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full max-h-[70vh] object-contain bg-background"
                  />
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
