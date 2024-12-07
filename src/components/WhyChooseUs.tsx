import Link from 'next/link'
import { Users, Target, TrendingUp } from 'lucide-react'

const reasons = [
  { icon: Users, title: 'Dedicated Team', description: 'We\'re here for you, every step of the way.' },
  { icon: Target, title: 'Tailored Solutions', description: 'We focus on what matters to you.' },
  { icon: TrendingUp, title: 'Proven Impact', description: 'Our solutions actually make a difference.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-[#383c4a] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Why Aascii?</h2>
        <p className="text-[#7c818c] text-center max-w-2xl mx-auto mb-12">
          We're more than just developers – we're problem solvers. We don't just build software, we make sure it works for you. From the first idea to the final product, we're committed to giving you the best results. Our goal is to make your work easier, faster, and more efficient.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center bg-[#404552] p-6 rounded-lg shadow-md morph-transition">
              <reason.icon className="w-12 h-12 text-[#5294e2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
              <p className="text-[#7c818c]">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="#contact" className="btn-primary py-2 px-4 rounded-full morph-transition">
            Start Your Project With Us
          </Link>
        </div>
      </div>
    </section>
  )
}

