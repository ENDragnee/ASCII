import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#404552] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-[#7c818c] hover:text-[#5294e2] transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-[#7c818c] hover:text-[#5294e2] transition-colors">Our Services</Link></li>
              <li><Link href="#projects" className="text-[#7c818c] hover:text-[#5294e2] transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-[#7c818c] hover:text-[#5294e2] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#7c818c] hover:text-[#5294e2] transition-colors"><Linkedin /></Link>
              <Link href="#" className="text-[#7c818c] hover:text-[#5294e2] transition-colors"><Twitter /></Link>
              <Link href="#" className="text-[#7c818c] hover:text-[#5294e2] transition-colors"><Facebook /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center mb-2 text-[#7c818c]"><Mail className="mr-2" /> info@aasciihub.com</p>
            <p className="flex items-center text-[#7c818c]"><Phone className="mr-2" /> +251915949551</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Aascii Technologies</h3>
            <p className="text-[#7c818c]">Building smart, simple, and affordable tech solutions for businesses and schools.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#4b5162] text-center">
          <p className="text-[#7c818c]">&copy; {new Date().getFullYear()} Aascii Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

