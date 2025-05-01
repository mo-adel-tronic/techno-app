'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold text-destructive mb-4"> 403 </h1>
      <p className="text-lg text-muted-foreground mb-8">
        يجب أن تكون مسجلاً للدخول للوصول إلى هذه الصفحة.
      </p>
      <Button asChild>
        <Link href="/">العودة إلى الصفحة الرئيسية</Link>
      </Button>
    </div>
  );
}
