import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FeaturedProject from '@/components/FeaturedProject'
import Approach from '@/components/Approach'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <FeaturedProject />
        <Approach />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

