import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHandHoldingHeart, FaStar, FaLeaf, FaUsers } from 'react-icons/fa';

const values = [
  { icon: <FaHandHoldingHeart />, title: 'Compassion', desc: 'Empathy in every interaction' },
  { icon: <FaLeaf />, title: 'Authenticity', desc: 'Pure traditional practices' },
  { icon: <FaUsers />, title: 'Patient-Centered', desc: 'Focusing on your unique needs' },
  { icon: <FaStar />, title: 'Excellence', desc: 'Highest standard of care' },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6"
          >
            Our Philosophy & Vision
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light text-lg leading-relaxed"
          >
            "Our approach combines ancient Ayurvedic wisdom with personalized healthcare solutions to achieve sustainable wellness."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background-alt p-8 rounded-3xl hover:shadow-lg transition-shadow border border-secondary-light/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-primary/5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <FaEye size={120} />
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-sm relative z-10">
              <FaEye />
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4 relative z-10">Our Vision</h3>
            <p className="text-text/80 leading-relaxed relative z-10">
              To become a trusted center for holistic healing and preventive healthcare, empowering individuals to live balanced and vibrant lives.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-8 rounded-3xl hover:shadow-lg transition-shadow text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <FaBullseye size={120} />
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-2xl mb-6 relative z-10">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-white/90 leading-relaxed relative z-10">
              To deliver authentic Ayurvedic treatments that improve physical, mental, and emotional well-being through personalized, root-cause healing.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-primary-dark">Core Values</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary-light/20 flex items-center justify-center text-primary text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-text mb-2">{item.title}</h4>
                <p className="text-sm text-text-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
