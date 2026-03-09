import React from 'react';
import { motion } from 'framer-motion'; // Animation এর জন্য

interface ProgressBarProps {
  progress: string; // '0%', '44%' ইত্যাদি
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // প্রগ্রেস ভ্যালু থেকে নাম্বার বের করে আনা (এনিমেশনের জন্য)
  const numericProgress = parseInt(progress) || 0;

  return (
    <div className="w-full space-y-2">
      {/* প্রগ্রেস লেবেল (অপশনাল, দেখতে সুন্দর লাগে) */}
      <div className="flex justify-between items-center px-1">
        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Progress
        </span>
        <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
          {progress}
        </span>
      </div>

      {/* মেইন বার কন্টেইনার */}
      <div className="relative w-full bg-gray-200/50 dark:bg-white/5 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-100 dark:border-white/5">
        
        {/* এনিমেটেড ফিল বার */}
        <motion.div
          initial={{ width: 0 }} // শুরুতে ০% থাকবে
          whileInView={{ width: progress }} // স্ক্রিনে আসলে এনিমেট হবে
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="relative h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-600 dark:to-blue-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
        >
          {/* বার এর ভেতরে একটি শাইন ইফেক্ট */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;