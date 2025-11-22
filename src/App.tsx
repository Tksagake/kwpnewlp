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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://res.cloudinary.com/dylmsnibf/image/upload/v1738153746/WhatsApp_Image_2025-01-29_at_15.28.35_6b360c36_opwbpe.jpg" alt="Logo" width={100} />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">KeNaWPWA</span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Initiatives', 'Training', 'Download App'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
              >
                Empowering Waste Pickers Across Kenya
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
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
                className="rounded-2xl shadow-2xl overflow-hidden border border-cyan-500/30"
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
      <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            About KeNaWPWA
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-700/50 to-purple-700/30 p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
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
              className="bg-gradient-to-br from-slate-700/50 to-purple-700/30 p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <motion.div 
                  className="text-center bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-6 rounded-xl border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    <CountUp end={700} duration={3} />+
                  </p>
                  <p className="text-gray-300 mt-2">Members</p>
                </motion.div>
                <motion.div 
                  className="text-center bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-6 rounded-xl border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    <CountUp end={3} duration={2} />
                  </p>
                  <p className="text-gray-300 mt-2">Cities</p>
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
      <section id="initiatives" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="group bg-gradient-to-br from-slate-700/50 to-purple-700/30 p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Training Programs */}
      <section id="training" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-slate-700/50 to-purple-700/30 p-6 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-cyan-400">{city}</h3>
                </motion.div>
                <p className="text-gray-300 mb-4">
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
      <section id="download" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background */}
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
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Download Our Mobile Apps
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of waste pickers already using KeNaWPWA to transform their livelihoods
            </p>
          </motion.div>

          {/* App Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Pickers' App Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-700/60 to-purple-700/40 p-8 rounded-3xl shadow-2xl border-2 border-green-500/50 hover:border-green-500 transition-all duration-300"
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <motion.div
                  className="rounded-2xl mb-8 overflow-hidden shadow-2xl border-2 border-green-500/30"
                  whileHover={{ scale: 1.08 }}
                >
                  <img src="/frame.png" alt="Pickers' App" className="w-full h-64 object-cover" />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Pickers' App
                </h3>
                <p className="text-gray-300 text-lg mb-6 flex-grow">
                  The essential companion for waste pickers. Track your collections, connect with buyers, and grow your business with our powerful platform.
                </p>
                
                <motion.a 
                  href="/kenawpwa.apk" 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-green-500/50 flex items-center justify-center font-bold text-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Now
                </motion.a>
              </div>
            </motion.div>

            {/* Platform App Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-700/60 to-purple-700/40 p-8 rounded-3xl shadow-2xl border-2 border-cyan-500/50 hover:border-cyan-500 transition-all duration-300"
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <motion.div
                  className="rounded-2xl mb-8 overflow-hidden shadow-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center h-64"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="text-center">
                    <Download className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <p className="text-cyan-300 font-semibold text-lg">Coming Soon</p>
                  </div>
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Web Platform
                </h3>
                <p className="text-gray-300 text-lg mb-6 flex-grow">
                  Access KeNaWPWA from your browser. Manage your profile, view statistics, and collaborate with the community online.
                </p>
                
                <button 
                  disabled
                  className="w-full bg-gray-600 text-white px-8 py-4 rounded-xl cursor-not-allowed flex items-center justify-center font-bold text-lg opacity-70"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Coming Soon
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Important Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/20">
                  <span className="text-2xl">📖</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-300 mb-3">
                  IMPORTANT: Please Read Before Downloading
                </h3>
                <ul className="text-gray-200 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-amber-400 font-bold mr-3">1.</span>
                    <span>Review the app guidelines and terms of service before installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 font-bold mr-3">2.</span>
                    <span>Ensure your device meets the minimum system requirements (Android 8.0+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 font-bold mr-3">3.</span>
                    <span>Prepare your registration details (National ID, Phone Number, Email)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 font-bold mr-3">4.</span>
                    <span>Complete full registration upon first launch to activate your account</span>
                  </li>
                </ul>
                <p className="text-gray-300 mt-6 text-base">
                  For technical support or questions, contact us at <span className="font-semibold text-cyan-400">info@kenawpwa.org</span> or call <span className="font-semibold text-cyan-400">+254 702 501 135</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-cyan-500/20 text-white py-16">
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
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">KeNaWPWA</span>
              </motion.div>
              <p className="text-gray-400">
                Empowering waste pickers across Kenya for a sustainable future.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Initiatives', 'Training'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  +254 702 501 135
                </li>
                <li className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  info@kenawpwa.org
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Powered By</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                MaraTech Innovation Center
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="border-t border-cyan-500/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-400 text-sm">
              © 2025 KeNaWPWA. All rights reserved. Made with passion for a sustainable Kenya.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;