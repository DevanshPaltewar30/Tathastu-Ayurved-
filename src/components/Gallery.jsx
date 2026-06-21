import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

const galleryImages = [
  { id: 1, src: img1, title: 'Clinic Reception', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 2, src: img2, title: 'Consultation Room', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { id: 3, src: img3, title: 'Treatment Rooms', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, src: img4, title: 'Panchakarma Facilities', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 5, src: img5, title: 'Wellness Activities', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-dark font-semibold tracking-wider uppercase text-sm"
          >
            Clinic Tour
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mt-4 mb-6"
          >
            Our Healing Environment
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light text-lg leading-relaxed"
          >
            Take a glimpse into our serene, hygienic, and authentic Ayurvedic clinic designed to bring you peace and promote recovery.
          </motion.p>
        </div>

        {/* Custom Grid for Masonry look */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer bg-primary/5 ${image.colSpan} ${image.rowSpan}`}
            >
              <img 
                src={image.src} 
                alt="Gallery" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
