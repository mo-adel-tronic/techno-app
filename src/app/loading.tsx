'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import LoadingFile from '@/assets/lottie/loading.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-8"
      >
        <Lottie
          animationData={LoadingFile}
          loop={true}
          className="w-32 h-32"
        />
      </motion.div>
      <h1 className="text-2xl font-semibold text-muted-foreground">
        رجاء الإنتظار <br /> جاري تحميل الصفحة
        <br />
        <span className="text-primary animate-pulse">...</span>
      </h1>
    </div>
  );
}
