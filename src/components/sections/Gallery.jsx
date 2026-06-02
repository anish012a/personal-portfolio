import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SectionTitle from '../SectionTitle'

const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'website-design', label: 'Website Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'marketing', label: 'Marketing' }
]

const galleryAssets = [
  {
    src: 'index.jpg',
    title: 'Study in Canada Campaign',
    category: 'Marketing',
    filter: 'marketing',
    description: 'Lead-generation campaign creative with clear hierarchy and an action-led message.'
  },
  {
    src: '691949554_122183064116743567_82088808901871838_n.jpg',
    title: 'AR Clothing Product Shot',
    category: 'Website Design',
    filter: 'website-design',
    description: 'Product-led fashion visual used to support e-commerce presentation.'
  },
  {
    src: '8d194c28-26ec-470c-9cd0-4f0802efe8c1.png',
    title: 'AR New Year Creative',
    category: 'Social Media',
    filter: 'social-media',
    description: 'High-impact social post artwork for brand awareness and seasonal engagement.'
  },
  {
    src: '9f6d35fd-ac49-47fa-9f1b-17e48c230d41.png',
    title: 'Campaign Conversion Visual',
    category: 'Marketing',
    filter: 'marketing',
    description: 'Promotional visual designed for campaign testing and message clarity.'
  },
  {
    src: 'b56cee19-2be4-4109-aaaa-26a5781f9364.png',
    title: 'AR Clothing Zone Brand Art',
    category: 'Branding',
    filter: 'branding',
    description: 'Brand-focused creative built around visual identity, energy, and recognition.'
  },
  {
    src: 'ChatGPT Image Apr 1, 2026, 12_20_41 PM.png',
    title: 'Feature Presentation Card',
    category: 'Website Design',
    filter: 'website-design',
    description: 'Website-ready visual for communicating a product or service feature quickly.'
  },
  {
    src: 'ChatGPT Image Apr 3, 2026, 09_25_45 AM.png',
    title: 'Landing Page Composition',
    category: 'Website Design',
    filter: 'website-design',
    description: 'Responsive landing-page concept with strong image balance and clean spacing.'
  },
  {
    src: 'ChatGPT Image Apr 15, 2026, 08_49_19 PM.png',
    title: 'Brand Story Frame',
    category: 'Branding',
    filter: 'branding',
    description: 'Editorial brand visual created for a story-led service or product section.'
  },
  {
    src: 'ChatGPT Image Feb 26, 2026, 02_51_42 PM.png',
    title: 'Social Campaign Variant',
    category: 'Social Media',
    filter: 'social-media',
    description: 'Variant-based post design suitable for campaign testing across platforms.'
  },
  {
    src: 'ChatGPT Image Feb 26, 2026, 11_34_33 PM.png',
    title: 'Lead Magnet Cover',
    category: 'Marketing',
    filter: 'marketing',
    description: 'Content-led campaign cover with a conversion-focused visual structure.'
  },
  {
    src: 'ChatGPT Image May 12, 2026, 10_41_55 AM.png',
    title: 'Analytics Snapshot',
    category: 'Marketing',
    filter: 'marketing',
    description: 'Data-led visual for summarising performance insights at a glance.'
  },
  {
    src: 'ChatGPT Image May 17, 2026, 01_19_26 PM.png',
    title: 'Video Thumbnail',
    category: 'Social Media',
    filter: 'social-media',
    description: 'Thumbnail artwork built for video visibility and audience click-through.'
  },
  {
    src: 'ChatGPT Image May 7, 2026, 03_06_46 PM.png',
    title: 'Carousel Slide',
    category: 'Social Media',
    filter: 'social-media',
    description: 'Carousel design for story-driven social engagement and message sequencing.'
  },
  {
    src: 'ChatGPT Image May 7, 2026, 04_33_53 PM.png',
    title: 'Service Promo',
    category: 'Marketing',
    filter: 'marketing',
    description: 'Promotional creative designed for service awareness and audience action.'
  },
  {
    src: 'ChatGPT Image May 7, 2026, 04_52_26 PM.png',
    title: 'Case Study Cover',
    category: 'Branding',
    filter: 'branding',
    description: 'Portfolio-ready cover artwork for presenting a detailed brand case study.'
  },
  {
    src: 'd62c86d8-3b87-40e6-b28b-d7f5852cea4a.png',
    title: 'Creative Spotlight',
    category: 'Branding',
    filter: 'branding',
    description: 'High-contrast brand visual with premium spacing and memorable composition.'
  },
  {
    src: 'e97fb72d-c8a3-47f3-b24c-cf94cf7dbda6.png',
    title: 'Website Interface Highlight',
    category: 'Website Design',
    filter: 'website-design',
    description: 'Clean interface composition designed to read well on desktop and mobile.'
  },
  {
    src: 'festive-campaign-art.png',
    title: 'Festive Campaign Artwork',
    category: 'Social Media',
    filter: 'social-media',
    description: 'Seasonal post design tailored for community relevance and engagement.'
  }
]

const imagePath = (fileName) => encodeURI(`/images/${fileName}`)

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(null)

  const filteredAssets = selectedFilter === 'all'
    ? galleryAssets
    : galleryAssets.filter((asset) => asset.filter === selectedFilter)

  const activeAsset = activeIndex === null ? null : filteredAssets[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + filteredAssets.length) % filteredAssets.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % filteredAssets.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, filteredAssets.length])

  const changeFilter = (filter) => {
    setSelectedFilter(filter)
    setActiveIndex(null)
  }

  const stepLightbox = (step) => {
    setActiveIndex((current) => (current + step + filteredAssets.length) % filteredAssets.length)
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Gallery"
          subtitle="Selected social media, website design, branding, and marketing visuals from the existing portfolio assets"
        />

        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-10">
          {galleryFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => changeFilter(filter.id)}
              aria-pressed={selectedFilter === filter.id}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAssets.map((asset, index) => (
            <motion.button
              key={asset.src}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-dark-700 shadow-md text-left"
              aria-label={`Open gallery preview for ${asset.title}`}
            >
              <img
                src={imagePath(asset.src)}
                alt={asset.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold uppercase tracking-wide text-white/70">
                  {asset.category}
                </span>
                <h3 className="text-base font-bold text-white leading-tight mt-1">
                  {asset.title}
                </h3>
                <p className="hidden md:block text-xs text-white/75 mt-1 leading-relaxed">
                  {asset.description}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {activeAsset && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-lg border border-white/30 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              stepLightbox(-1)
            }}
            className="absolute left-4 bottom-5 md:static md:mr-5 w-11 h-11 rounded-lg border border-white/30 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <figure
            className="max-w-4xl w-full max-h-[86vh] grid gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={imagePath(activeAsset.src)}
              alt={activeAsset.title}
              className="w-full max-h-[68vh] object-contain rounded-lg bg-white"
            />
            <figcaption className="text-center text-white">
              <span className="block text-sm font-bold uppercase tracking-wide text-white/60">
                {activeAsset.category}
              </span>
              <strong className="block text-xl md:text-2xl mt-1">
                {activeAsset.title}
              </strong>
              <p className="text-white/75 mt-1">
                {activeAsset.description}
              </p>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              stepLightbox(1)
            }}
            className="absolute right-4 bottom-5 md:static md:ml-5 w-11 h-11 rounded-lg border border-white/30 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  )
}
