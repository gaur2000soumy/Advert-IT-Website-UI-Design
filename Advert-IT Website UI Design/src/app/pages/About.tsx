import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      color: 'from-[var(--brand-purple)] to-[var(--brand-teal)]',
    },
    {
      icon: TrendingUp,
      title: 'Reliability',
      description: 'Our commitment to quality and timely delivery makes us a trusted partner for businesses worldwide.',
      color: 'from-[var(--brand-teal)] to-[var(--brand-green)]',
    },
    {
      icon: Heart,
      title: 'Growth',
      description: 'We foster continuous learning and development for both our team and our clients.',
      color: 'from-[var(--brand-orange)] to-[var(--brand-purple)]',
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4',
      bio: '15+ years in tech leadership, passionate about digital transformation.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
      bio: 'Expert in scalable architecture and cloud infrastructure.',
    },
    {
      name: 'James Lee',
      role: 'Head of Recruitment',
      image: 'https://images.unsplash.com/photo-1614762586156-8b9a22069f23',
      bio: 'Connecting top talent with innovative companies for over a decade.',
    },
    {
      name: 'Sarah Kim',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1',
      bio: 'Award-winning marketer specializing in digital strategies.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Advert-IT</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A team of innovators, developers, and marketers dedicated to transforming businesses through technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--brand-purple)]/10 to-[var(--brand-teal)]/10 rounded-2xl p-8"
            >
              <Target className="text-[var(--brand-purple)] mb-6" size={48} />
              <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower businesses worldwide by delivering innovative technology solutions, connecting exceptional talent, 
                and creating impactful marketing strategies that drive measurable growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--brand-teal)]/10 to-[var(--brand-green)]/10 rounded-2xl p-8"
            >
              <Eye className="text-[var(--brand-teal)] mb-6" size={48} />
              <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the global leader in integrated technology services, recognized for our commitment to innovation, 
                excellence, and creating lasting partnerships that transform industries and shape the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-teal)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--brand-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-1">{member.name}</h3>
                <p className="text-[var(--brand-purple)] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--brand-gray)] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2014, Advert-IT began with a simple vision: to bridge the gap between technology, 
                  talent, and creative marketing. What started as a small team of passionate developers and marketers 
                  has grown into a global company serving clients across multiple industries.
                </p>
                <p>
                  Over the years, we've evolved our services to meet the changing needs of businesses in the digital age. 
                  From building sophisticated web applications to connecting companies with top-tier tech talent, 
                  we've remained committed to excellence and innovation.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for startups and enterprises alike, helping them navigate 
                  the complexities of digital transformation and achieve sustainable growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624555130666-eb3a38b6c3b6"
                alt="Professional Meeting Room"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
