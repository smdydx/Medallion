import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Get in touch with our team for inquiries, consultations, or any information about our engineering services.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection animation="fade-right">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-2">Our Office</h3>
                  <p className="text-gray-700">
                    B335/5(New B-930), Ground floor, Sangam Gali,<br />
                    New Ashok Nagar, Delhi-110096
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-2">Phone</h3>
                  <p className="text-gray-700">
                    Mobile: +91 9934320255<br />
                    Office: +91 11 3570 1742
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-2">Email</h3>
                  <p className="text-gray-700">
                    afroz.alam@medallionindia.com<br />
                    info@medallionindia.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-20">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4721044885493!2d77.29518861501736!3d28.61125398242358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4e26bb6f49b%3A0x4a6f9f48f88a9ced!2sNew%20Ashok%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110096!5e0!3m2!1sen!2sin!4v1652791822728!5m2!1sen!2sin" 
              className="w-full h-96" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}