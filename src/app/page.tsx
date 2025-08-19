import HeroSection from '../components/home/hero-section';
import Navbar from '../components/navbar';
import ServicesSection from '../components/home/services-section';
import EvSection from '../components/home/ev-section';
import EnvironmentSection from '../components/home/environment-section';
import RecycleSection from '../components/home/recycle-section';
import EngineeringSection from '../components/home/engineering-section';
import BlogSection from '../components/home/blog-section';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Landing Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* EV Section */}
      <EvSection />

      {/* Environment Section */}
      <EnvironmentSection />

      {/* Recycle Section */}
      <RecycleSection />

      {/* Engineering Section */}
      <EngineeringSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
