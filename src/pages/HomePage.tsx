import { useEffect } from 'react'
import { About } from '../components/home/About'
import { Contact } from '../components/home/Contact'
import { Hero } from '../components/home/Hero'
import { Services } from '../components/home/Services'
import { Testimonials } from '../components/home/Testimonials'
import { site } from '../data/site'

export function HomePage() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
