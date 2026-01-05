import { Code, Smartphone, Globe, Users, Target, Megaphone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Infrastructure', 'API Development'],
      color: 'from-[var(--brand-purple)] to-[var(--brand-teal)]',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Support'],
      color: 'from-[var(--brand-teal)] to-[var(--brand-green)]',
    },
    {
      icon: Globe,
      title: 'SaaS Solutions',
      description: 'Scalable software-as-a-service platforms for your business.',
      features: ['Multi-tenancy', 'Subscription Billing', 'Analytics Dashboard', 'API Integration'],
      color: 'from-[var(--brand-green)] to-[var(--brand-purple)]',
    },
    {
      icon: Users,
      title: 'IT Recruitment',
      description: 'Connect with top-tier technology talent to build your dream team.',
      features: ['Developer Hiring', 'Contract Staffing', 'Team Augmentation', 'Tech Screening'],
      color: 'from-[var(--brand-purple)] to-[var(--brand-orange)]',
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation and strategic planning.',
      features: ['Market Analysis', 'Technology Roadmap', 'Competitive Research', 'ROI Planning'],
      color: 'from-[var(--brand-orange)] to-[var(--brand-teal)]',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Advertising',
      description: 'Data-driven marketing campaigns that deliver measurable results.',
      features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Brand Strategy'],
      color: 'from-[var(--brand-teal)] to-[var(--brand-purple)]',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-purple)] text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-purple)]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="text-[var(--brand-purple)] hover:text-[var(--brand-teal)] inline-flex items-center gap-2 transition-colors"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--brand-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', desc: 'Building with agile methodology' },
              { step: '04', title: 'Launch', desc: 'Deployment and ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-[var(--brand-purple)] opacity-20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--brand-purple)] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js', 'TailwindCSS'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-[var(--brand-gray)] to-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold text-[var(--brand-navy)]">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-teal)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Schedule a consultation to discuss your project requirements
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--brand-purple)] rounded-lg hover:shadow-2xl transition-shadow"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
