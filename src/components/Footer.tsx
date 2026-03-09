import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Youtube, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  const footerLinks = [
    { name: t('footer.about'), path: '/about' },
    { name: t('footer.contact'), path: '/contact' },
    { name: t('footer.team'), path: '/team' },
    { name: t('footer.projects'), path: '/projects' },
  ];

  const legalLinks = [
    { name: t('footer.privacy'), path: '/privacy-policy' },
    { name: t('footer.joining'), path: '/joining-conditions' },
    { name: t('footer.terms'), path: '/terms-conditions' },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#080a0e] border-t border-gray-100 dark:border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/">
              <img 
                src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" 
                alt="Kafa'ah" 
                className="h-14 w-auto brightness-110"
              />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              {lang === 'bn' 
                ? "প্রযুক্তির মাধ্যমে উম্মাহর সেবায় নিবেদিত একটি ইসলামিক মাল্টিপ্রজেক্ট কোম্পানি।" 
                : "An Islamic multi-project company dedicated to serving the Ummah through technology."}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, url: "https://www.facebook.com/kafaahbd", color: "hover:bg-blue-600" },
                { icon: <MessageCircle size={18} />, url: "https://wa.me/8801837103985", color: "hover:bg-green-600" },
                { icon: <Youtube size={18} />, url: "#", color: "hover:bg-red-600" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 ${social.color} hover:text-white transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
              {lang === 'bn' ? "দ্রুত লিংক" : "Quick Links"}
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
              {lang === 'bn' ? "সহায়তা" : "Support"}
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://docs.google.com/forms/..." 
                  target="_blank" 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-green-600 dark:text-green-500 hover:underline"
                >
                  {t('footer.join')} <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
              {lang === 'bn' ? "যোগাযোগ" : "Contact Us"}
            </h3>
            <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-600 mt-0.5 shrink-0" />
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-600 shrink-0" />
                <span>+8801837103985</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-600 shrink-0" />
                <span>kafaahbd@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 text-center">
            {lang === 'en' ? t('footer.copyright') : t('footer.copyright.bn')}
          </p>
          <div className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 font-medium">
            Designed with ♥ for the Ummah
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;