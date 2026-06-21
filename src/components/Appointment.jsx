import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    treatment: '',
    preferredDate: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        treatment: '',
        preferredDate: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const text = `Hello, I would like to book an appointment. Name: ${formData.fullName}, Interested in: ${formData.treatment}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 bg-primary-dark rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Content / Info */}
          <div className="lg:w-2/5 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/floral-motif.png")' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Book Your Wellness Journey</h2>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                Take the first step towards holistic healing. Schedule a consultation with our experienced Ayurvedic physicians and discover the right treatment path for you.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-accent text-xl" />
                  <span className="font-medium">Personalized Assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-accent text-xl" />
                  <span className="font-medium">Expert Consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-accent text-xl" />
                  <span className="font-medium">Authentic Treatments</span>
                </li>
              </ul>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/90 italic">
                  "Health is not just the absence of disease, but a state of complete physical, mental, and social well-being."
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-3/5 p-8 md:p-12 bg-background relative">
            <h3 className="text-3xl font-bold text-primary-dark mb-8">Appointment Form</h3>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 flex flex-col items-center text-center h-full justify-center min-h-[400px]"
              >
                <FaCheckCircle className="text-6xl text-green-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Request Submitted Successfully!</h4>
                <p>Thank you for reaching out. Our team will contact you shortly to confirm your appointment time.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text font-medium mb-2" htmlFor="fullName">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-medium mb-2" htmlFor="phoneNumber">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phoneNumber" 
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text font-medium mb-2" htmlFor="emailAddress">Email Address</label>
                    <input 
                      type="email" 
                      id="emailAddress" 
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-medium mb-2" htmlFor="preferredDate">Preferred Date *</label>
                    <input 
                      type="date" 
                      id="preferredDate" 
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text font-medium mb-2" htmlFor="treatment">Treatment Interested In *</label>
                  <select 
                    id="treatment" 
                    name="treatment"
                    required
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                  >
                    <option value="" disabled>Select a treatment...</option>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Panchakarma Therapy">Panchakarma Therapy</option>
                    <option value="Diabetes Management">Diabetes Management</option>
                    <option value="Obesity Management">Obesity Management</option>
                    <option value="PCOD / PCOS Care">PCOD / PCOS Care</option>
                    <option value="Joint Pain Treatment">Joint Pain Treatment</option>
                    <option value="Spine Disorder Treatment">Spine Disorder Treatment</option>
                    <option value="Frozen Shoulder & Sciatica">Frozen Shoulder & Sciatica</option>
                    <option value="Suvarnaprashan">Suvarnaprashan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text font-medium mb-2" htmlFor="message">Brief Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                    placeholder="Briefly describe your symptoms or reason for visit..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="flex-1 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Submitting...' : <><FaCalendarCheck /> Book Appointment</>}
                  </button>
                  <button 
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <FaWhatsapp className="text-xl" /> WhatsApp Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Appointment;
