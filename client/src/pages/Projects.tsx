import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Highway Tunnel Project",
      location: "Delhi-Mumbai Expressway",
      category: "tunnel",
      description: "Design and construction oversight for a 3.2 km twin-tube tunnel system with advanced ventilation.",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Metro Rail Infrastructure",
      location: "Bangalore Metro Phase II",
      category: "rail",
      description: "Structural design and engineering for underground metro stations and connecting tunnels.",
      image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Highway Bridge Development",
      location: "Ganga River Crossing, Patna",
      category: "bridge",
      description: "Design and structural analysis for a 5.6 km cable-stayed bridge across the Ganga River.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Smart City Infrastructure",
      location: "Surat, Gujarat",
      category: "urban",
      description: "Comprehensive infrastructure planning and engineering for smart city development.",
      image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Mountain Pass Tunnel",
      location: "Himachal Pradesh",
      category: "tunnel",
      description: "Engineering for a 2.8 km tunnel through challenging Himalayan terrain with specialized ventilation.",
      image: "https://images.unsplash.com/photo-1458324124043-7803d4fec380?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "River Crossing Steel Bridge",
      location: "Brahmaputra River, Assam",
      category: "bridge",
      description: "Design and construction management for a multi-span steel bridge over the Brahmaputra.",
      image: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Projects
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful engineering projects across India, showcasing our expertise in tunnel structures and infrastructure development.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'tunnel' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setFilter('tunnel')}
            >
              Tunnels
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'bridge' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setFilter('bridge')}
            >
              Bridges
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'rail' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setFilter('rail')}
            >
              Rail
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'urban' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setFilter('urban')}
            >
              Urban
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.title} 
              className="project-card bg-white rounded-lg shadow-md overflow-hidden"
              delay={(index % 3 + 1) as 1 | 2 | 3}
            >
              <img 
                src={project.image}
                alt={project.title} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.location}</p>
                <p className="mb-4">{project.description}</p>
                <a href="#" className="text-secondary hover:underline font-medium inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-5xl text-primary mb-4">"</div>
              <p className="mb-6 italic">Medallion India's expertise in tunnel engineering was crucial for the success of our highway project. Their team demonstrated exceptional technical knowledge and professionalism.</p>
              <div className="font-bold">Rajesh Kumar</div>
              <div className="text-gray-600">Project Director, NHAI</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-5xl text-primary mb-4">"</div>
              <p className="mb-6 italic">Working with Medallion India on our metro station design was a seamless experience. Their innovative approach to complex engineering challenges saved both time and resources.</p>
              <div className="font-bold">Priya Mehta</div>
              <div className="text-gray-600">Chief Engineer, Metro Rail Corporation</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-5xl text-primary mb-4">"</div>
              <p className="mb-6 italic">The bridge design provided by Medallion India exceeded our expectations. Their attention to detail and commitment to structural integrity ensured a safe and durable solution.</p>
              <div className="font-bold">Anand Singh</div>
              <div className="text-gray-600">Director, State PWD</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}