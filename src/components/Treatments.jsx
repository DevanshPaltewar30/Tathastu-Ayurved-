import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaChevronDown, FaTint, FaWeight, FaFemale, FaBone, FaDiagnoses, FaChild } from 'react-icons/fa';

const treatmentsData = [
  {
    id: 1,
    title: 'Panchakarma Therapy',
    icon: <FaTint />,
    description: 'Panchakarma is a traditional Ayurvedic detoxification and rejuvenation treatment designed to remove toxins from the body, restore dosha balance, strengthen immunity, and improve overall health.',
    benefits: ['Full body detoxification', 'Improved digestion', 'Better metabolism', 'Increased energy levels', 'Enhanced immunity', 'Mental clarity and relaxation'],
    suitableFor: ['Chronic health conditions', 'Digestive disorders', 'Stress-related issues', 'Lifestyle disorders', 'Joint and muscle problems'],
    highlights: ['Personalized assessment', 'Detoxification therapies', 'Rejuvenation procedures', 'Lifestyle recommendations']
  },
  {
    id: 2,
    title: 'Ayurvedic Diabetes Management',
    icon: <FaLeaf />,
    description: 'Ayurvedic treatment for diabetes focuses on controlling blood sugar levels naturally through herbal medicines, diet regulation, lifestyle modifications, and metabolic balancing.',
    benefits: ['Better blood sugar management', 'Improved energy levels', 'Reduced complications', 'Enhanced metabolic function'],
    includes: ['Ayurvedic medicines', 'Personalized diet plans', 'Lifestyle counseling', 'Wellness monitoring']
  },
  {
    id: 3,
    title: 'Ayurvedic Obesity Management',
    icon: <FaWeight />,
    description: 'A comprehensive Ayurvedic approach to healthy weight reduction through metabolic correction, detoxification, proper nutrition, and lifestyle improvement.',
    benefits: ['Healthy weight loss', 'Better digestion', 'Improved metabolism', 'Increased confidence', 'Enhanced overall wellness'],
    includes: ['Customized diet planning', 'Herbal formulations', 'Panchakarma support', 'Lifestyle modification']
  },
  {
    id: 4,
    title: 'PCOD & PCOS Treatment',
    icon: <FaFemale />,
    description: 'Natural Ayurvedic treatment for hormonal imbalance, irregular menstrual cycles, and reproductive health concerns.',
    benefits: ['Hormonal balance', 'Improved menstrual regularity', 'Better reproductive health', 'Enhanced overall wellness'],
    includes: ['Herbal medicines', 'Dietary guidance', 'Lifestyle management', 'Stress reduction therapies']
  },
  {
    id: 5,
    title: 'Joint Pain Treatment',
    icon: <FaBone />,
    description: 'Ayurvedic therapies designed to reduce inflammation, improve mobility, and provide long-term relief from joint pain.',
    conditions: ['Arthritis', 'Knee Pain', 'Joint Stiffness', 'Age-related Joint Disorders'],
    benefits: ['Pain relief', 'Improved flexibility', 'Better mobility', 'Reduced inflammation']
  },
  {
    id: 6,
    title: 'Spine Disorder Treatment',
    icon: <FaDiagnoses />,
    description: 'Specialized Ayurvedic treatments for spinal discomfort, posture-related issues, and chronic back pain.',
    conditions: ['Cervical Spondylosis', 'Lumbar Pain', 'Disc Problems', 'Chronic Back Pain'],
    benefits: ['Pain reduction', 'Improved posture', 'Enhanced flexibility', 'Better spinal health']
  },
  {
    id: 7,
    title: 'Frozen Shoulder & Sciatica Care',
    icon: <FaDiagnoses />,
    description: 'Ayurvedic therapies aimed at relieving nerve pain, restoring mobility, and improving quality of life.',
    conditions: ['Frozen Shoulder', 'Sciatica', 'Nerve Compression', 'Muscle Stiffness'],
    benefits: ['Improved movement', 'Reduced pain', 'Better flexibility', 'Faster recovery']
  },
  {
    id: 8,
    title: 'Suvarnaprashan',
    icon: <FaChild />,
    description: 'A traditional Ayurvedic immunity-enhancing therapy for children that supports physical growth, memory development, concentration, and overall health.',
    benefits: ['Improved immunity', 'Better concentration', 'Enhanced memory', 'Healthy development'],
    suitableFor: ['Infants', 'Children', 'Adolescents']
  }
];

const TreatmentCard = ({ treatment, isOpen, onToggle }) => {
  return (
    <motion.div 
      layout
      className={`bg-white rounded-2xl shadow-sm border ${isOpen ? 'border-primary' : 'border-gray-100'} overflow-hidden hover:shadow-md transition-all`}
    >
      <div 
        className="p-6 flex items-center justify-between cursor-pointer group"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-secondary-light/20 text-primary group-hover:bg-primary-light/20'}`}>
            {treatment.icon}
          </div>
          <h3 className={`text-xl font-bold font-serif transition-colors ${isOpen ? 'text-primary' : 'text-text group-hover:text-primary-dark'}`}>
            {treatment.title}
          </h3>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-text-light"
        >
          <FaChevronDown />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0 border-t border-gray-50 mt-2">
              <p className="text-text-light leading-relaxed mb-6 mt-4">
                {treatment.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {treatment.benefits && (
                  <div>
                    <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                      <FaLeaf className="text-secondary text-sm" /> Benefits
                    </h4>
                    <ul className="space-y-2">
                      {treatment.benefits.map((item, idx) => (
                        <li key={idx} className="text-sm text-text/80 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {treatment.conditions && (
                  <div>
                    <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                      <FaLeaf className="text-secondary text-sm" /> Conditions Treated
                    </h4>
                    <ul className="space-y-2">
                      {treatment.conditions.map((item, idx) => (
                        <li key={idx} className="text-sm text-text/80 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {treatment.suitableFor && (
                  <div>
                    <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                      <FaLeaf className="text-secondary text-sm" /> Suitable For
                    </h4>
                    <ul className="space-y-2">
                      {treatment.suitableFor.map((item, idx) => (
                        <li key={idx} className="text-sm text-text/80 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {treatment.includes && (
                  <div>
                    <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                      <FaLeaf className="text-secondary text-sm" /> Treatment Includes
                    </h4>
                    <ul className="space-y-2">
                      {treatment.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-text/80 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {treatment.highlights && (
                  <div className="md:col-span-2">
                    <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                      <FaLeaf className="text-secondary text-sm" /> Treatment Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {treatment.highlights.map((item, idx) => (
                        <span key={idx} className="bg-secondary-light/10 text-primary-dark text-xs px-3 py-1 rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Treatments = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-dark font-semibold tracking-wider uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6"
          >
            Ayurvedic Facilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light text-lg leading-relaxed"
          >
            Explore our comprehensive range of specialized Ayurvedic therapies designed to address the root cause of ailments and restore your body's natural balance.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {treatmentsData.map((treatment) => (
            <TreatmentCard 
              key={treatment.id} 
              treatment={treatment} 
              isOpen={openId === treatment.id}
              onToggle={() => setOpenId(openId === treatment.id ? null : treatment.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Treatments;
