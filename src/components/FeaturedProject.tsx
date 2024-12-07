import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-[#383c4a] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Introducing Lumo – Changing the Way Students Learn</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-[#7c818c] mb-4">
              Lumo is our innovative platform designed to bring Ethiopia's school curriculum to life. It's interactive, fun, and powered by AI to help students learn better. Plus, it works on low-cost hardware, making it affordable and scalable for schools everywhere.
            </p>
            <Link href="#" className="btn-primary py-2 px-4 rounded-full morph-transition">
              Learn More About Lumo
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Lumo in action"
              width={600}
              height={400}
              className="rounded-lg shadow-md morph-transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

