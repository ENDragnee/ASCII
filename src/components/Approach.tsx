import { Users, Sliders, CheckCircle } from 'lucide-react'

const features = [
  { icon: Users, title: 'Collaborative', description: 'We work with you to make sure we get it just right.' },
  { icon: Sliders, title: 'Custom', description: 'Every solution is designed for your specific needs.' },
  { icon: CheckCircle, title: 'Quality', description: 'We don\'t stop until everything is perfect.' },
]

export default function Approach() {
  return (
    <section className="bg-[#404552] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">How We Work: Fast, Simple, and Quality</h2>
        <p className="text-[#7c818c] text-center max-w-2xl mx-auto mb-12">
          At Aascii, we don't believe in complicating things. Our approach is all about creating simple, clean systems that work well. We listen to you, understand what you need, and build solutions that get the job done—quickly, effectively, and with quality you can trust.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-[#383c4a] p-6 rounded-lg shadow-md morph-transition">
              <feature.icon className="w-12 h-12 text-[#5294e2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-[#7c818c]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

