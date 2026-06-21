import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBone, FaCut, FaAllergies, FaStomach, FaHeartbeat, FaFemale, FaChild, FaLungs, FaBrain, FaBaby, FaChevronDown } from 'react-icons/fa';
import { GiStomach, GiHairStrands, GiSkeleton, GiLungs, GiBrain, GiBabyFace } from 'react-icons/gi';
import { MdHealthAndSafety, MdPregnantWoman } from 'react-icons/md';

const treatmentCategories = [
  {
    id: 1,
    title: 'Bone & Joint Disorders',
    color: 'from-amber-500 to-orange-600',
    items: ['Arthritis', 'Frozen Shoulder', 'Cervical Spondylitis', 'Back Pain', 'Gout', 'Osteoarthritis'],
  },
  {
    id: 2,
    title: 'Hair Treatment',
    color: 'from-purple-500 to-pink-600',
    items: ['Hair Fall', 'Dandruff', 'Alopecia', 'Premature Greying', 'Baldness'],
  },
  {
    id: 3,
    title: 'Skin Diseases',
    color: 'from-rose-500 to-red-600',
    items: ['Psoriasis', 'Urticaria', 'Eczema', 'Itching', 'Warts', 'Vitiligo'],
  },
  {
    id: 4,
    title: 'Digestive Disorders',
    color: 'from-green-500 to-emerald-600',
    items: ['Acidity', 'Constipation', 'Piles', 'Bloating', 'Fissure', 'Gas', 'Fatty Liver'],
  },
  {
    id: 5,
    title: 'Lifestyle Disorders',
    color: 'from-blue-500 to-indigo-600',
    items: ['Diabetes', 'Obesity', 'Thyroid', 'Hypertension', 'PCOD'],
  },
  {
    id: 6,
    title: "Women's Health",
    color: 'from-pink-500 to-fuchsia-600',
    items: ['Menstrual Disorders', 'White Discharge', 'Irregular Periods', 'Infertility Issues', 'PCOD'],
  },
  {
    id: 7,
    title: 'Child Care',
    color: 'from-cyan-500 to-teal-600',
    items: ['Frequent Illness', 'Cold, Cough, Asthma', 'Allergy', 'Poor Weight Gain'],
  },
  {
    id: 8,
    title: 'Respiratory Disorders',
    color: 'from-sky-500 to-blue-600',
    items: ['Asthma', 'Bronchitis', 'Cold', 'Allergy'],
  },
  {
    id: 9,
    title: 'Mental Health',
    color: 'from-violet-500 to-purple-600',
    items: ['Stress', 'Insomnia', 'Depression', 'Mental Tension'],
  },
  {
    id: 10,
    title: 'Garbhasanskar (Prenatal Care)',
    color: 'from-orange-400 to-rose-500',
    items: [],
  },
];

const AvailableTreatments = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="available-treatments" className="py-20 bg-background-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-dark font-semibold tracking-wider uppercase text-sm"
          >
            What We Treat
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6"
          >
            Available Treatments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light text-lg leading-relaxed"
          >
            We offer comprehensive Ayurvedic solutions for a wide range of health conditions, treating the root cause naturally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {treatmentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Category Header */}
              <div
                className="p-5 flex items-center justify-between cursor-pointer group"
                onClick={() => setOpenId(openId === category.id ? null : category.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-sm shadow-md`}>
                    <span className="font-bold">{category.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text group-hover:text-primary-dark transition-colors">
                    {category.title}
                  </h3>
                </div>
                {category.items.length > 0 && (
                  <motion.div
                    animate={{ rotate: openId === category.id ? 180 : 0 }}
                    className="text-text-light"
                  >
                    <FaChevronDown className="text-sm" />
                  </motion.div>
                )}
              </div>

              {/* Items List */}
              <AnimatePresence>
                {openId === category.id && category.items.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 border-t border-gray-50">
                      <div className="flex flex-wrap gap-2 mt-4">
                        {category.items.map((item, idx) => (
                          <span
                            key={idx}
                            className={`bg-gradient-to-r ${category.color} text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableTreatments;
