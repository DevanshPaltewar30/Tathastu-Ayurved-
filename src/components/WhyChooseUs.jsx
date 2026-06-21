import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaClipboardList, FaLeaf, FaHospital, FaHeartbeat, FaHandsHelping } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserMd />,
    title: 'Experienced Doctor',
    description: 'Expert Ayurvedic care led by a highly qualified physician with years of successful practice.'
  },
  {
    icon: <FaClipboardList />,
    title: 'Personalized Plans',
    description: 'Customized treatment regimens based on your unique body constitution (Prakriti) and current health status.'
  },
  {
    icon: <FaLeaf />,
    title: 'Authentic Therapies',
    description: 'Pure, traditional Ayurvedic medicines and genuine Panchakarma procedures for deep healing.'
  },
  {
    icon: <FaHospital />,
    title: 'Modern Infrastructure',
    description: 'A serene, hygienic, and well-equipped clinic environment that promotes relaxation and recovery.'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Holistic Approach',
    description: 'Treating the root cause of the ailment rather than merely suppressing the symptoms.'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Patient-Focused Care',
    description: 'Compassionate guidance and continuous support throughout your wellness journey.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            Commitment to Your Wellness
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg leading-relaxed"
          >
            We blend the profound wisdom of Ayurveda with modern clinical standards to offer you an unparalleled healing experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center text-3xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
