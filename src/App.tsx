import React from 'react';
import { 
  Recycle, 
  Users, 
  BookOpen, 
  Download, 
  LogIn, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  Leaf,
  GraduationCap,
  Scale,
  Trash2,
  QrCode
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Recycle className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">KenWaPWA</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#initiatives" className="text-gray-600 hover:text-blue-600">Initiatives</a>
              <a href="#training" className="text-gray-600 hover:text-blue-600">Training</a>
              <a href="#download" className="text-gray-600 hover:text-blue-600">Download App</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <LogIn className="w-4 h-4 mr-2" />
                Dashboard Login
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Waste Pickers Across Kenya
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join KenWaPWA in our mission to create sustainable waste management solutions while improving lives.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                  Join Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                alt="Waste Management"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About KenWaPWA</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                KenWaPWA works in collaboration with CEJAD to empower waste pickers and promote sustainable waste management practices across Kenya.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-gray-600">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">3</p>
                  <p className="text-gray-600">Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Leaf className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Environmental Awareness</h3>
              <p className="text-gray-600">
                Educating communities about sustainable practices and waste management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Scale className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Policy Advocacy</h3>
              <p className="text-gray-600">
                Working with policymakers to improve waste management systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Trash2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Clean-Up</h3>
              <p className="text-gray-600">
                Organizing regular clean-up drives to promote cleanliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Kisumu', 'Nairobi', 'Nakuru'].map((city) => (
              <div key={city} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{city}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive training programs for waste pickers in {city}.
                </p>
                <button className="text-blue-600 font-semibold flex items-center">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Download Our Apps</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Waste Pickers App</h3>
              <QrCode className="w-32 h-32 mx-auto mb-4" />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 flex items-center mx-auto">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Managers' App</h3>
              <QrCode className="w-32 h-32 mx-auto mb-4" />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 flex items-center mx-auto">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="w-6 h-6" />
                <span className="text-xl font-bold">KenWaPWA</span>
              </div>
              <p className="text-gray-400">
                Empowering waste pickers across Kenya.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#initiatives" className="text-gray-400 hover:text-white">Initiatives</a></li>
                <li><a href="#training" className="text-gray-400 hover:text-white">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  +254 XXX XXX XXX
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  info@kenwapwa.org
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Created by MaraTech Innovation Center
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;