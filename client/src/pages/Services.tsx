import { TrafficCone, Building, HardHat, Compass, Cog, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Services() {
  const services = [
    {
      icon: <TrafficCone className="h-12 w-12" />,
      title: "Tunnel Engineering",
      description: "Comprehensive tunnel design and engineering solutions for transportation and infrastructure projects. Our expertise covers tunnel boring machines (TBM), drill and blast methods, and cut and cover techniques."
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Structural Engineering",
      description: "Innovative structural design and analysis for buildings, bridges, and complex infrastructure. We employ advanced modeling techniques to ensure structural integrity and efficiency."
    },
    {
      icon: <HardHat className="h-12 w-12" />,
      title: "Construction Management",
      description: "Expert project management and oversight for efficient, on-time project delivery. Our approach integrates risk management, quality control, and resource optimization."
    },
    {
      icon: <Compass className="h-12 w-12" />,
      title: "Civil Engineering Design",
      description: "Detailed design services for roads, highways, and civil infrastructure projects. We provide comprehensive solutions from concept to completion."
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Mechanical Systems",
      description: "Design and implementation of mechanical systems for infrastructure and tunnel projects, including ventilation, fire safety, and emergency systems."
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Consultancy Services",
      description: "Expert consultation for complex engineering challenges and infrastructure planning, offering strategic guidance and technical expertise."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            We offer comprehensive engineering solutions across various infrastructure domains with a special focus on tunnel structures and systems.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              delay={(index % 3 + 1) as 1 | 2 | 3}
            >
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-20 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">
            Our Approach
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            We follow a comprehensive methodology to ensure excellence in every project we undertake.
          </p>

          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="text-primary text-4xl mb-4">1</div>
              <h3 className="text-xl font-heading font-bold mb-2">Initial Consultation</h3>
              <p className="text-center">Understanding client needs and project requirements in detail</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="text-primary text-4xl mb-4">2</div>
              <h3 className="text-xl font-heading font-bold mb-2">Planning & Design</h3>
              <p className="text-center">Creating comprehensive solutions with detailed technical specifications</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="text-primary text-4xl mb-4">3</div>
              <h3 className="text-xl font-heading font-bold mb-2">Implementation</h3>
              <p className="text-center">Executing with precision while maintaining quality control</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="text-primary text-4xl mb-4">4</div>
              <h3 className="text-xl font-heading font-bold mb-2">Review & Support</h3>
              <p className="text-center">Continuous monitoring and long-term technical support</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}