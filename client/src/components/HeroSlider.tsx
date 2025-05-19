import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Engineering Excellence',
    subtitle: 'Building the Infrastructure of Tomorrow',
    description: 'Specializing in Tunnel Structures and Advanced Engineering Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Innovative Solutions',
    subtitle: 'Transforming Ideas into Reality',
    description: 'Cutting-edge engineering for complex infrastructure challenges'
  },
  {
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Precision Engineering',
    subtitle: 'Building with Purpose',
    description: 'Excellence in every detail, from design to implementation'
  }
];

export default function HeroSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 10, 
        stiffness: 80,
        duration: 0.4
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  const overlayStyle = {
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6))',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  } as React.CSSProperties;

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ enabled: true }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true, // Better for mobile
          dynamicMainBullets: 3
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div style={overlayStyle}></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <motion.div 
                className="container mx-auto px-4 text-center text-white"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-medium mb-2 text-secondary"
                  variants={childVariants}
                >
                  {slide.subtitle}
                </motion.h3>
                <motion.h1 
                  className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6"
                  variants={childVariants}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-base md:text-xl lg:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto"
                  variants={childVariants}
                >
                  {slide.description}
                </motion.p>
                <motion.div 
                  variants={childVariants}
                  className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                  <motion.button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Contact Us
                  </motion.button>
                  <motion.button 
                    onClick={() => window.location.href = '/projects'}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View Projects
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Digital animation overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 digital-grid-animation"></div>
    </div>
  );
}