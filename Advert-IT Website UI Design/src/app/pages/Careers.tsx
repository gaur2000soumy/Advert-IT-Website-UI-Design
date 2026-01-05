import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    message: '',
  });

  const jobListings = [
    {
      title: 'Senior Full-Stack Developer',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Join our team to build scalable web applications using React, Node.js, and modern cloud technologies.',
      requirements: ['5+ years experience', 'React & Node.js expertise', 'AWS/Azure knowledge'],
    },
    {
      title: 'React Native Developer',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Build beautiful mobile applications for iOS and Android using React Native.',
      requirements: ['3+ years React Native', 'iOS/Android deployment', 'TypeScript proficiency'],
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Los Angeles',
      type: 'Full-time',
      salary: '$70k - $100k',
      description: 'Drive digital marketing campaigns across multiple channels to increase brand awareness and ROI.',
      requirements: ['SEO/SEM experience', 'Analytics tools', 'Content strategy'],
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Contract',
      salary: '$110k - $160k',
      description: 'Manage cloud infrastructure and CI/CD pipelines for our growing portfolio of projects.',
      requirements: ['Docker & Kubernetes', 'AWS/GCP', 'Terraform/CloudFormation'],
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote / Seattle',
      type: 'Full-time',
      salary: '$80k - $130k',
      description: 'Create intuitive and beautiful user experiences for web and mobile applications.',
      requirements: ['Figma/Sketch expertise', 'Portfolio required', 'User research skills'],
    },
    {
      title: 'IT Recruiter',
      location: 'Hybrid / Boston',
      type: 'Full-time',
      salary: '$60k - $90k + Commission',
      description: 'Help us find and place top technical talent with leading companies.',
      requirements: ['Tech recruitment experience', 'Strong network', 'Communication skills'],
    },
  ];

  const benefits = [
    'Competitive Salary & Equity',
    'Health & Dental Insurance',
    'Flexible Work Schedule',
    'Remote Work Options',
    'Professional Development',
    'Team Events & Retreats',
    'Latest Tech & Tools',
    '401(k) Matching',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData({ name: '', email: '', phone: '', position: '', resume: '', message: '' });
  };

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role and grow with us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-4">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-[var(--brand-purple)]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} className="text-[var(--brand-teal)]" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={16} className="text-[var(--brand-green)]" />
                    {job.salary}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-[var(--brand-navy)] mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-purple)]"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-[var(--brand-purple)] hover:text-[var(--brand-teal)] transition-colors"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[var(--brand-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We offer more than just a job - we provide a platform for growth, innovation, and making a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <Briefcase className="text-[var(--brand-purple)] flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280"
                alt="Team Collaboration"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Apply for a Position</h2>
            <p className="text-xl text-gray-600">Submit your application and we'll get back to you soon</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[var(--brand-gray)] to-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-gray-700 mb-2">Position *</label>
                <select
                  id="position"
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                >
                  <option value="">Select a position</option>
                  {jobListings.map((job, index) => (
                    <option key={index} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="resume" className="block text-gray-700 mb-2">Resume/CV Link *</label>
              <input
                type="url"
                id="resume"
                required
                value={formData.resume}
                onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Cover Letter</label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us why you'd be a great fit..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-teal)] text-white rounded-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
            >
              Submit Application
              <ArrowRight size={20} />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
