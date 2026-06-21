import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMedal, FaCheckCircle, FaUserMd } from 'react-icons/fa';
import doctorPhoto from '../assets/Doctor Photo.png';

const specializations = [
  'Panchakarma',
  'Diabetes Management',
  'Obesity Treatment',
  'PCOD Care',
  'Joint Pain',
  'Spine Disorders'
];

const DoctorProfile = () => {
  return (
    <section className="py-20 bg-background-alt relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Column */}
            <div className="lg:w-2/5 relative bg-primary/5 p-8 flex items-center justify-center">
              {/* Decorative background shape */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src={doctorPhoto} 
                  alt="Dr. Profile" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2 text-accent-dark font-medium uppercase tracking-wider text-sm">
                  <FaUserMd /> <span>Chief Physician</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-2">
                  Dr. Rupali N Uttarwar
                </h2>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-4 mt-6 mb-8">
                  <div className="flex items-center gap-2 bg-secondary-light/20 text-primary-dark px-4 py-2 rounded-full font-semibold">
                    <FaGraduationCap className="text-xl" />
                    <span>BAMS, MD (Ayurveda)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent/20 text-accent-dark px-4 py-2 rounded-full font-semibold">
                    <FaMedal className="text-xl" />
                    <span>15+ Years Experience</span>
                  </div>
                </div>

                {/* Biography */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-text mb-3 font-serif">About The Doctor</h3>
                  <p className="text-text-light leading-relaxed mb-4">
                    With over 15 years of dedicated practice in Ayurvedic medicine, Dr. Rupa brings a profound understanding of traditional healing methodologies combined with modern medical insights. Her approach is deeply rooted in the philosophy of treating the whole person rather than just the symptoms.
                  </p>
                  <p className="text-text-light leading-relaxed">
                    She is committed to patient-centered care, taking the time to understand each individual's unique constitution (Prakriti) and developing tailored treatment plans that empower patients on their journey to holistic well-being.
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="text-xl font-bold text-text mb-4 font-serif">Specializations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {specializations.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-text/80 font-medium">
                        <FaCheckCircle className="text-secondary" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
