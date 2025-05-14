import React from 'react';
import { 
  Recycle, 
  Download, 
  LogIn, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  Leaf,
  Scale,
  Trash2,
} from 'lucide-react';
import CountUp from 'react-countup';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <img src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738153746/WhatsApp_Image_2025-01-29_at_15.28.35_6b360c36_opwbpe.jpg" alt="Logo" width={100} />
              <span className="text-2xl font-bold text-blue-600">KeNaWPWA</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#initiatives" className="text-gray-600 hover:text-blue-600">Initiatives</a>
              <a href="#training" className="text-gray-600 hover:text-blue-600">Training</a>
              <a href="#download" className="text-gray-600 hover:text-blue-600">Download App</a>
                <a href="https://kenwpwa.co.ke/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <LogIn className="w-4 h-4 mr-2" />
                Dashboard Login
                </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-30 pb-20 bg-gradient-to-br from-blue-50 to-white">
        {/* Your content here */}
      </section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Waste Pickers Across Kenya
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join KeNaWPWA in our mission to create sustainable waste management solutions while improving lives.
              </p>
              <div className="flex space-x-4">
              <a href="#download" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
  Join Now
  <ChevronRight className="w-5 h-5 ml-2" />
</a>

<a href="#download" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
  Learn More
</a>

              </div>
            </div>
            <div className="md:w-1/2 mt-6">
              <img 
                src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738153958/Waste_pickers_NRB_qhnjbu.jpg"
                alt="Waste Management"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About KeNaWPWA</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                KeNaWPWA works in collaboration with CEJAD to empower waste pickers and promote sustainable waste management practices across Kenya.
              </p>
              <img 
                src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738154145/473814228_1162911461872632_103221812701105018_n_wjd9ad.jpg"
                alt="Our Mission"
                className="rounded-lg shadow-xl mt-4"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">
                    <CountUp end={700} duration={5} />+
                  </p>
                  <p className="text-gray-600">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">
                    <CountUp end={3} duration={5} />
                  </p>
                  <p className="text-gray-600">Cities</p>
                </div>
              </div>
              <img 
                src="https://res.cloudinary.com/dylmsnibf/image/upload/c_crop,ar_4:3/v1738154147/475406151_1167995234697588_7899661938621331686_n_nd1nlv.jpg"
                alt="Our Impact"
                className="rounded-lg shadow-xl mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-gray-50">
        {/* Your content here */}
      </section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Leaf className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Environmental Awareness</h3>
                <p className="text-gray-600">
                We are dedicated to raising awareness within communities about the importance of sustainable practices and effective waste management. Through our educational programs, we aim to inform and inspire individuals to adopt environmentally friendly habits that contribute to a cleaner and healthier planet.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Scale className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Policy Advocacy</h3>
                <p className="text-gray-600">
                Engaging with policymakers and government officials to advocate for and implement improved waste management systems and policies. Our goal is to create a more efficient and sustainable framework for waste management that benefits both the environment and the community.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Trash2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Clean-Up</h3>
                <p className="text-gray-600">
                We organize regular community clean-up drives to promote cleanliness and environmental stewardship. These events bring together volunteers from all walks of life to actively participate in cleaning up public spaces, parks, and neighborhoods. By fostering a sense of community and responsibility, we aim to create a cleaner, healthier environment for everyone.
                </p>
            </div>
          </div>
        </div>
      {/* Training Programs */}
      <section id="training" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: 'Kisumu', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155568/sarova2_tcjmox.jpg' },
              { city: 'Nairobi', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155331/joecalih-1Uwcoo-ttjY-unsplash_vo2vsy.jpg' },
              { city: 'Nakuru', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155395/g9s87x0sy6371_g6ngwm.jpg' },
              // { city: 'Kiambu', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155460/kenya-' },
              // { city: 'Narok', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155460/kenya-' },
              // { city: 'Uasin Ngishu', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155460/kenya-' },
              // { city: 'Trans Nzoia', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155460/kenya-' },
              // { city: 'Mombasa', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155460/kenya-' },
            ].map(({ city, imgSrc }) => (
              <div key={city} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{city}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for waste pickers in {city}.
              </p>
              <img src={imgSrc} alt={`${city} Training`} className="rounded-lg shadow-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Download Our Apps</h2>
          <div className="grid md:grid-cols-2 gap-8">
        <div className="text-center bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Pickers' App</h3>
          <img src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738155869/pickers_bb3evc.jpg" alt="Pickers' App" className="rounded-lg mb-4 mx-auto" />
          <a href="https://kenwpwa.co.ke/apps/waste.apk" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center mx-auto">
            <Download className="w-4 h-4 mr-2" />
            Download Now
          </a>
        </div>
        <div className="text-center bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Managers' App</h3>
          <img src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738155879/managers_v3jkfz.jpg" alt="Managers' App" className="rounded-lg mb-4 mx-auto" />
          <a href="https://kenwpwa.co.ke/apps/manager.apk" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center mx-auto">
            <Download className="w-4 h-4 mr-2" />
            Download Now
          </a>
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
                <span className="text-xl font-bold">KeNaWPWA</span>
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
                  +254 702 501 135
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  info@kenawpwa.org
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Powered by MaraTech Innovation Center
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;