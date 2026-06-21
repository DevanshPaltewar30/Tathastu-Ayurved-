import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHeartbeat, FaLeaf, FaUserMd, FaSmileBeam } from 'react-icons/fa';
import doctorPhoto from '../assets/Doctor Photo.png';
import logo from '../assets/logo.png';

const stats = [
  { icon: <FaUserMd className="text-3xl text-primary" />, value: '15+', label: 'Years Experience' },
  { icon: <FaSmileBeam className="text-3xl text-primary" />, value: '10k+', label: 'Happy Patients' },
  { icon: <FaHeartbeat className="text-3xl text-primary" />, value: '100%', label: 'Personalized Care' },
  { icon: <FaLeaf className="text-3xl text-primary" />, value: 'Natural', label: 'Facilities' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background gradient/pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/20 to-background z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/floral-motif.png")' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 py-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary-light/30 text-primary-dark px-4 py-2 rounded-full font-medium text-sm w-max">
            Welcome to <img src={logo} alt="तथास्तु" className="h-5 w-auto object-contain inline-block" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary-dark">
            Holistic Healing <br/>
            <span className="text-accent-dark">Through Ayurveda</span>
          </h1>
          <h2 className="text-xl text-text-light font-medium leading-relaxed">
            Experience authentic Ayurvedic treatments designed to restore balance, improve health, and enhance your quality of life through natural healing.
          </h2>
          <p className="text-text/80 leading-relaxed max-w-lg">
            We provide personalized Ayurvedic care focused on treating the root cause of disease while promoting long-term wellness through traditional therapies and modern healthcare understanding.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Link 
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer bg-white border border-primary text-primary hover:bg-primary-light/10 px-8 py-4 rounded-full font-semibold transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center"
        >
          {/* Main Image Grid container to hold both doctor and clinic elegantly */}
          <div className="relative w-full h-full max-w-lg mx-auto">
            {/* Clinic Image (Right/Back) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 top-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                alt="Ayurvedic Clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
            
            {/* Doctor Image (Left/Front) */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-0 bottom-0 w-2/3 h-2/3 rounded-full overflow-hidden shadow-2xl border-8 border-background z-20"
            >
              <img 
                src={doctorPhoto} 
                alt="Doctor Profile" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            
            {/* Decorative leaf element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent-light/30 rounded-full blur-2xl z-0"></div>
          </div>
        </motion.div>

      </div>

      {/* Trust Indicators / Stats */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 -mt-8 md:-mt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index} 
              className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-light/20 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-1">{stat.value}</h3>
              <p className="text-text-light font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
