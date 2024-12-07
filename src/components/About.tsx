import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="bg-[#383c4a] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Who We Are</h2>
        <p className="text-[#7c818c] text-center max-w-2xl mx-auto mb-8">
          At Aascii Technologies, we're a team of passionate developers who love solving problems with technology. We make custom software that's simple, efficient, and built just for you. Whether you need to streamline a process or build a brand-new system, we're here to help. We're all about making things faster, easier, and better.
        </p>
        <div className="text-center">
          <Link href="#contact" className="btn-primary py-2 px-4 rounded-full morph-transition">
            Get to Know Us Better
          </Link>
        </div>
      </div>
    </section>
  )
}

