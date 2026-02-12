import React, { useState } from 'react';

import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo submission logic
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-start gap-16 px-6 pt-24 pb-20 md:flex-row">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <h1 className="font-display mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Let's Talk
        </h1>
        <p className="mb-12 max-w-lg text-lg leading-relaxed text-zinc-400">
          I'm currently available for freelance projects and full-time opportunities. If you have a
          project that needs some creative touch, I'd love to hear about it.
        </p>

        <div className="space-y-8">
          <div className="group flex items-center gap-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4 transition-colors group-hover:border-white/20">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-medium text-white">Email Me</h3>
              <a
                href="mailto:contact@darshansingh.dev"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                contact@darshansingh.dev
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4 transition-colors group-hover:border-white/20">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-medium text-white">Call Me</h3>
              <a
                href="tel:+919876543210"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4 transition-colors group-hover:border-white/20">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-medium text-white">Location</h3>
              <p className="text-zinc-400">Bangalore, India</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full rounded-3xl border border-white/5 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-md md:w-1/2 md:p-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-400">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-all focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-400">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-all focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="4"
              className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-all focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-bold text-black transition-colors hover:bg-zinc-200"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
