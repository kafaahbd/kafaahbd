import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface BreadCrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadCrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { lang } = useLanguage();
  const isBn = lang === 'bn';

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-white/40 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-200/50 dark:border-white/10 shadow-sm">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
             <Home className="w-4 h-4 mr-2" />
             {isBn ? 'হোম' : 'Home'}
          </Link>
        </li>
        {items.map((item, index) => {
           const isLast = index === items.length - 1;
           return (
             <li key={item.name} aria-current={isLast ? 'page' : undefined}>
               <div className="flex items-center">
                 <ChevronRight className="w-4 h-4 text-gray-400" />
                 {isLast || !item.url ? (
                    <span className="ml-1 md:ml-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.name}
                    </span>
                 ) : (
                    <Link to={item.url} className="ml-1 md:ml-2 text-sm font-medium text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
                      {item.name}
                    </Link>
                 )}
               </div>
             </li>
           );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
