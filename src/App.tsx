import { 
  Recycle, 
  Download, 
  LogIn, 
  MapPin, 
  Phone, 
  Mail,
  Leaf,
  Scale,
  Trash2,
  ArrowRight,
} from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738153746/WhatsApp_Image_2025-01-29_at_15.28.35_6b360c36_opwbpe.jpg" alt="Logo" width={100} />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">KeNaWPWA</span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Initiatives', 'Training', 'Download App'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                href="https://kenwpwa.co.ke/login" 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 flex items-center transition-all duration-200"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Dashboard
              </motion.a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6"
              >
                Empowering Waste Pickers Across Kenya
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Join KeNaWPWA in our mission to create sustainable waste management solutions while improving lives and protecting our planet.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="#download" 
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 flex items-center font-semibold transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400/10 font-semibold transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738153958/Waste_pickers_NRB_qhnjbu.jpg"
                  alt="Waste Management"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent"
          >
            About KeNaWPWA
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                KeNaWPWA works in collaboration with CEJAD to empower waste pickers and promote sustainable waste management practices across Kenya.
              </p>
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738154145/473814228_1162911461872632_103221812701105018_n_wjd9ad.jpg"
                  alt="Our Mission"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <motion.div 
                  className="text-center bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-6 rounded-xl border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    <CountUp end={700} duration={3} />+
                  </p>
                  <p className="text-gray-700 mt-2">Members</p>
                </motion.div>
                <motion.div 
                  className="text-center bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-6 rounded-xl border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    <CountUp end={3} duration={2} />
                  </p>
                  <p className="text-gray-700 mt-2">Cities</p>
                </motion.div>
              </div>
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://res.cloudinary.com/dylmsnibf/image/upload/c_crop,ar_4:3/v1738154147/475406151_1167995234697588_7899661938621331686_n_nd1nlv.jpg"
                  alt="Our Impact"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Our Initiatives
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: Leaf, 
                title: 'Environmental Awareness',
                desc: 'We are dedicated to raising awareness within communities about the importance of sustainable practices and effective waste management. Through our educational programs, we aim to inform and inspire individuals to adopt environmentally friendly habits.'
              },
              { 
                icon: Scale, 
                title: 'Policy Advocacy',
                desc: 'Engaging with policymakers and government officials to advocate for improved waste management systems and policies. Our goal is to create a more efficient and sustainable framework that benefits the environment and community.'
              },
              { 
                icon: Trash2, 
                title: 'Community Clean-Up',
                desc: 'We organize regular community clean-up drives to promote cleanliness and environmental stewardship. These events bring together volunteers to actively participate in cleaning public spaces.'
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-green-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-green-300/50"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Training Programs */}
      <section id="training" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Training Programs
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { city: 'Kisumu', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155568/sarova2_tcjmox.jpg' },
              { city: 'Nairobi', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155331/joecalih-1Uwcoo-ttjY-unsplash_vo2vsy.jpg' },
              { city: 'Nakuru', imgSrc: 'https://res.cloudinary.com/dylmsnibf/image/upload/v1738155395/g9s87x0sy6371_g6ngwm.jpg' },
            ].map(({ city, imgSrc }) => (
              <motion.div 
                key={city}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-green-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-green-600">{city}</h3>
                </motion.div>
                <p className="text-gray-700 mb-4">
                  Comprehensive training programs for waste pickers in {city}.
                </p>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={imgSrc} alt={`${city} Training`} className="w-full" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Download Our Mobile App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of waste pickers already using KeNaWPWA to transform their livelihoods
            </p>
          </motion.div>

          {/* App Card */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-3xl shadow-2xl border-2 border-gray-200"
              whileHover={{ y: -10 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* QR Code */}
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-300">
                    <img 
                      src="/frame.png" 
                      alt="KeNaWPWA App QR Code" 
                      className="w-72 h-72 object-contain"
                    />
                    <p className="text-center text-gray-600 font-semibold mt-4">Scan to Download</p>
                  </div>
                </motion.div>

                {/* Download Details */}
                <div className="flex flex-col">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Pickers' App
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    The essential companion for waste pickers. Track your collections, connect with buyers, and grow your business with our powerful platform.
                  </p>
                  
                  <motion.a 
                    href="/kenawpwa.apk" 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-green-600/50 flex items-center justify-center font-bold text-lg transition-all duration-200 mb-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-6 h-6 mr-3" />
                    Download App
                  </motion.a>

                  {/* Requirements */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-blue-900">Requirements:</span> Android 8.0 or higher
                    </p>
                  </div>

                  {/* Legal Links */}
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 mb-3">Before downloading, please review:</p>
                    <motion.a 
                      href="/KENAWPWA_TERMS_AND_CONDITIONS.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Terms & Conditions
                    </motion.a>
                    <motion.a 
                      href="/KENAWPWA_PRIVACY_POLICY.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Privacy Policy
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Important Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 max-w-4xl mx-auto mt-12"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="text-3xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-900 mb-3">
                  IMPORTANT: Please Read Before Downloading
                </h3>
                <ul className="text-gray-800 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">1.</span>
                    <span>Review the Terms & Conditions and Privacy Policy before installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">2.</span>
                    <span>Ensure your device meets the minimum system requirements (Android 8.0+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">3.</span>
                    <span>Prepare your registration details (National ID, Phone Number, Email)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3">4.</span>
                    <span>Complete full registration upon first launch to activate your account</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-6 text-base">
                  For technical support or questions, contact us at <span className="font-semibold text-gray-900">info@kenawpwa.org</span> or call <span className="font-semibold text-gray-900">+254 702 501 135</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-4 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">KeNaWPWA</span>
              </motion.div>
              <p className="text-gray-400">
                Empowering waste pickers across Kenya for a sustainable future.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Initiatives', 'Training'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  +254 702 501 135
                </li>
                <li className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  info@kenawpwa.org
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Powered By</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                MaraTech Innovation Center
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-400 text-sm">
              © 2025 KeNaWPWA. All rights reserved. Powered by MaraTech
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;