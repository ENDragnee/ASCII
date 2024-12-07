import Link from 'next/link'
import { Code, Smartphone, Brain, RefreshCw, Cloud, Palette } from 'lucide-react'

const services = [
  { icon: Code, title: 'Custom Software Development', description: 'We build systems designed just for your needs.' },
  { icon: Smartphone, title: 'Web & Mobile Solutions', description: 'Seamless apps and websites that make life easier.' },
  { icon: Brain, title: 'AI-Powered Automation', description: 'We use AI to automate boring tasks, so you don\'t have to.' },
  { icon: RefreshCw, title: 'Digital Transformation', description: 'Helping you rethink and improve how you work with tech.' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Reliable, scalable cloud setups for businesses of all sizes.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Intuitive and beautiful designs that users love.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#404552] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What We Do</h2>
        <p className="text-[#7c818c] text-center max-w-2xl mx-auto mb-12">
          We offer tailored solutions to help businesses and schools run more smoothly. From automating tasks to designing user-friendly apps, we make tech work for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#383c4a] p-6 rounded-lg shadow-md morph-transition">
              <service.icon className="w-12 h-12 text-[#5294e2] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-[#7c818c]">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#contact" className="btn-primary py-2 px-4 rounded-full morph-transition">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

