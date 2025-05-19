import { Check, Building } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            About Medallion India
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Medallion India Private Limited delivers cutting-edge engineering solutions with a focus on tunnel structures and infrastructure development across India.
          </p>
        </AnimatedSection>

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
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our History</h3>
              <p className="mb-6">
                Founded in 2010, Medallion India has grown to become a recognized leader in engineering consultancy, specializing in tunnel structures and systems. Our journey began with a small team of dedicated engineers committed to excellence and innovation in infrastructure development.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={2}>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <p>Excellence in every project we undertake</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <p>Innovation that drives sustainable infrastructure solutions</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <p>Integrity in all our professional relationships</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-secondary mr-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <p>Commitment to environmental sustainability</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Afroz Alam" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Afroz Alam</h3>
                <p className="text-gray-600 mb-4">Director</p>
                <p className="mb-4">Leading Medallion India with over 20 years of experience in infrastructure development and engineering excellence.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Executive Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Rajiv Kumar</h3>
                <p className="text-gray-600 mb-4">Chief Engineer</p>
                <p className="mb-4">Specialized in tunnel engineering with extensive experience in major infrastructure projects across India.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Executive Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Priya Sharma</h3>
                <p className="text-gray-600 mb-4">Head of Operations</p>
                <p className="mb-4">Ensuring excellence in project delivery with strategic oversight of all operational aspects.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}