import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-[#383c4a] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Introducing Lumo – Changing the Way Students Learn
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-[#7c818c] mb-4">
              Lumo is our innovative platform designed to bring Ethiopia's school curriculum to life. It's interactive, fun, and powered by AI to help students learn better. Plus, it works on low-cost hardware, making it affordable and scalable for schools everywhere.
            </p>
            <Link
              href="https://easy-learning-two.vercel.app/"
              className="btn-primary py-2 px-4 rounded-full morph-transition inline-flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              <GraduationCap className="h-5 w-5" />
              <span>Try Lumo</span>
            </Link>
          </div>
          <div className="md:w-1/2">
            <GraduationCap className="h-60 w-60 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
