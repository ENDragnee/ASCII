import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-[#404552] text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 morph-transition">Building Smart, Simple, and Affordable Tech Solutions</h1>
        <p className="text-xl mb-8 text-[#7c818c]">We create custom software that makes life easier for businesses and schools. Fast, simple, and high-quality – that's how we do it.</p>
        <div className="space-x-4">
          <Link href="#projects" className="btn-primary py-2 px-4 rounded-full morph-transition">
            See Our Work
          </Link>
          <Link href="#about" className="bg-transparent hover:bg-[#5294e2] text-[#5294e2] hover:text-white font-bold py-2 px-4 rounded-full border border-[#5294e2] morph-transition">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

