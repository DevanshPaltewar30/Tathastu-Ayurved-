import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock, FaDirections } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-dark font-semibold tracking-wider uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6"
          >
            Visit Our Clinic
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light text-lg leading-relaxed"
          >
            We are here to assist you on your path to wellness. Reach out to us for appointments, inquiries, or personalized guidance.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-secondary-light/20 text-primary flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text mb-2">Clinic Address</h4>
                <p className="text-text-light leading-relaxed">
                  Behind Rama Bangles Store,
Near Prajapita Brahmakumari Temple,
Bhanapeth Ward, Kasturba Road,
Chandrapur, Maharashtra 442402<br />
                 
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-secondary-light/20 text-primary flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text mb-2">Contact Numbers</h4>
                <p className="text-text-light leading-relaxed mb-1">
                  <span className="font-medium text-text">Phone:</span> +91 94228 39252
                </p>
                <p className="text-text-light leading-relaxed">
                  <span className="font-medium text-text">WhatsApp:</span> +91 94228 39252
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-secondary-light/20 text-primary flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text mb-2">Email Address</h4>
                <p className="text-text-light leading-relaxed">
                  tathastuayurved08@gmail.com<br />
                  
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-secondary-light/20 text-primary flex items-center justify-center text-2xl">
                <FaClock />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text mb-2">Working Hours</h4>
                <p className="text-text-light leading-relaxed">
                  <span className="font-medium text-text">Monday – Saturday:</span><br />
                  9:00 AM – 7:00 PM<br />
                  <span className="text-accent text-sm font-medium mt-1 inline-block">Sunday Closed</span>
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mt-4 pt-8 border-t border-gray-100">
              <a href="tel:+12345678900" className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                <FaPhoneAlt /> Call Now
              </a>
              <a href="https://wa.me/19876543210" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent/10 text-accent-dark hover:bg-accent hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                <FaDirections /> Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-gray-100 relative"
          >
            {/* Using an iframe for Google Maps embed (Placeholder location) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1691234567890!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
