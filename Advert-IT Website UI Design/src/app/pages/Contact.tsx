import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-[var(--brand-purple)] to-[var(--brand-teal)]',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@advert-it.com',
      link: 'mailto:info@advert-it.com',
      color: 'from-[var(--brand-teal)] to-[var(--brand-green)]',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Tech Street, Innovation Hub, CA 94000',
      link: '#',
      color: 'from-[var(--brand-orange)] to-[var(--brand-purple)]',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Innovation Hub',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      city: 'New York',
      address: '456 Digital Avenue, Manhattan',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      city: 'London',
      address: '789 Innovation Road, Tech City',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 block"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <info.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Development</option>
                      <option value="recruitment">IT Recruitment</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="all">All Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-700 mb-2">Budget Range</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="<10k">Less than $10,000</option>
                    <option value="10-50k">$10,000 - $50,000</option>
                    <option value="50-100k">$50,000 - $100,000</option>
                    <option value=">100k">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-purple)] focus:outline-none bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-teal)] text-white rounded-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[var(--brand-gray)] to-white rounded-2xl p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-3">{office.city}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-start gap-2">
                        <MapPin size={20} className="text-[var(--brand-purple)] flex-shrink-0 mt-0.5" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone size={20} className="text-[var(--brand-teal)] flex-shrink-0" />
                        {office.hours}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-teal)] rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6 text-gray-100">
                  Our team is available 24/7 for urgent inquiries and support requests.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--brand-purple)] rounded-lg hover:shadow-xl transition-shadow"
                >
                  <Phone size={20} />
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          {/* Placeholder for map integration */}
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 text-[var(--brand-purple)]" />
            <p className="text-lg">Interactive Map Integration</p>
            <p className="text-sm">Google Maps or similar service would be integrated here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
