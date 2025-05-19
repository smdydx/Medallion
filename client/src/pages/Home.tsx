import { Check, Building, HardHat, TrafficCone, Cog, Compass, Lightbulb, MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import HeroSlider from '@/components/HeroSlider';
import DigitalAnimation from '@/components/DigitalAnimation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <div className="relative">
          <HeroSlider />
          <DigitalAnimation />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                About Medallion India
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={2}>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-lg max-w-3xl mx-auto">
                Medallion India Private Limited delivers cutting-edge engineering solutions with a focus on tunnel structures and infrastructure development. Our expertise combines innovation with structural integrity.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <AnimatedSection className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Medallion India office" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </AnimatedSection>
            
            <div className="md:w-1/2">
              <AnimatedSection animation="fade-right">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
                <p className="mb-6">
                  To be the leading engineering consultancy firm providing innovative and sustainable infrastructure solutions across India and beyond.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-right" delay={2}>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>Integrating cutting-edge technology with practical engineering expertise</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>Commitment to environmental sustainability in all projects</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>Robust quality assurance at every stage of project delivery</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>Client-focused solutions tailored to specific project requirements</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Services
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={2}>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-lg max-w-3xl mx-auto">
                We offer comprehensive engineering solutions across various infrastructure domains with a special focus on tunnel structures and systems.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="text-primary text-4xl mb-4">
                <TrafficCone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Tunnel Engineering</h3>
              <p className="mb-4">Comprehensive tunnel design and engineering solutions for transportation and infrastructure projects.</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl" delay={2}>
              <div className="text-primary text-4xl mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Structural Engineering</h3>
              <p className="mb-4">Innovative structural design and analysis for buildings, bridges, and complex infrastructure.</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl" delay={3}>
              <div className="text-primary text-4xl mb-4">
                <HardHat className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Construction Management</h3>
              <p className="mb-4">Expert project management and oversight for efficient, on-time project delivery.</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="text-primary text-4xl mb-4">
                <Compass className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Civil Engineering Design</h3>
              <p className="mb-4">Detailed design services for roads, highways, and civil infrastructure projects.</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl" delay={2}>
              <div className="text-primary text-4xl mb-4">
                <Cog className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Mechanical Systems</h3>
              <p className="mb-4">Design and implementation of mechanical systems for infrastructure and tunnel projects.</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl" delay={3}>
              <div className="text-primary text-4xl mb-4">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Consultancy Services</h3>
              <p className="mb-4">Expert consultation for complex engineering challenges and infrastructure planning.</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Projects
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={2}>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-lg max-w-3xl mx-auto">
                Explore our portfolio of successful engineering projects across India, showcasing our expertise in tunnel structures and infrastructure development.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="project-card bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Highway Tunnel Project" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Highway Tunnel Project</h3>
                <p className="text-gray-600 mb-4">Delhi-Mumbai Expressway</p>
                <p className="mb-4">Design and construction oversight for a 3.2 km twin-tube tunnel system with advanced ventilation.</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="project-card bg-white rounded-lg shadow-md overflow-hidden" delay={2}>
              <img 
                src="https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Metro Rail Infrastructure" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Metro Rail Infrastructure</h3>
                <p className="text-gray-600 mb-4">Bangalore Metro Phase II</p>
                <p className="mb-4">Structural design and engineering for underground metro stations and connecting tunnels.</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="project-card bg-white rounded-lg shadow-md overflow-hidden" delay={3}>
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Highway Bridge Development" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Highway Bridge Development</h3>
                <p className="text-gray-600 mb-4">Ganga River Crossing, Patna</p>
                <p className="mb-4">Design and structural analysis for a 5.6 km cable-stayed bridge across the Ganga River.</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="project-card bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Underground Commercial Complex" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Underground Commercial Complex</h3>
                <p className="text-gray-600 mb-4">Mumbai Business District</p>
                <p className="mb-4">Engineering design for a 3-level underground commercial and parking facility.</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="project-card bg-white rounded-lg shadow-md overflow-hidden" delay={2}>
              <img 
                src="https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Water Resource Project" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Water Resource Project</h3>
                <p className="text-gray-600 mb-4">Himalayan Hydropower Development</p>
                <p className="mb-4">Design of tunnels and underground structures for a major hydroelectric project.</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="project-card bg-white rounded-lg shadow-md overflow-hidden" delay={3}>
              <img 
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Industrial Facility Design" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Industrial Facility Design</h3>
                <p className="text-gray-600 mb-4">Gujarat Manufacturing Hub</p>
                <p className="mb-4">Structural and civil engineering for a state-of-the-art manufacturing facility.</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Team
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={2}>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-lg max-w-3xl mx-auto">
                Meet our team of experienced professionals dedicated to delivering excellence in engineering and infrastructure development.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Afroz Alam" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-1">Afroz Alam</h3>
                <p className="text-gray-600 mb-4">Director</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="mailto:afroz.alam@medallionindia.com" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg" delay={2}>
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Rajesh Kumar" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-1">Rajesh Kumar</h3>
                <p className="text-gray-600 mb-4">Chief Engineer</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg" delay={3}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Priya Sharma" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-1">Priya Sharma</h3>
                <p className="text-gray-600 mb-4">Project Manager</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg" delay={4}>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Vikram Singh" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-1">Vikram Singh</h3>
                <p className="text-gray-600 mb-4">Structural Engineer</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Contact Us
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={2}>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-lg max-w-3xl mx-auto">
                Reach out to us for inquiries about our services or to discuss your engineering project requirements.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Get In Touch</h3>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={2}>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Address:</strong>
                    <p>B335/5(New B-930), Ground floor, Sangam Gali, New Ashok Nagar, Delhi-110096</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Phone:</strong>
                    <p>Mobile: +91 9934320255</p>
                    <p>Office: +91 11 3570 1742</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Email:</strong>
                    <a href="mailto:afroz.alam@medallionindia.com" className="hover:text-primary transition-colors duration-300">
                      afroz.alam@medallionindia.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-heading font-bold mb-4">Office Location</h4>
                <div className="w-full h-64 bg-gray-200 rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.031656068092!2d77.29958481440679!3d28.5722167938235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce489c62c9b5b%3A0x7ccad586fcdcf85a!2sNew%20Ashok%20Nagar%2C%20Delhi%2C%20110096!5e0!3m2!1sen!2sin!4v1651221465190!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
