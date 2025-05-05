'use client'

import GlobalError from "@/app/error";
import HeaderBanner from "@/components/dashboard/HeaderBanner";
import { useDepartment } from "@/features/department/hooks/DepartmentProvider"
import { RoutesName } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function DepartmentShow() {
    const departmentContext = useDepartment();
    const router = useRouter()
    if (!departmentContext) {
        return <GlobalError error={new Error('هناك مشكلة في الحصول على بيانات القسم')} reset={() => {
            router.refresh()
        }} />;
    }
    const { department } = departmentContext;
  return (
    <>
        <HeaderBanner title='عرض بيانات القسم' linkCreate={{
                text: 'العودة إلى إدارة القسم العلمي',
                href: RoutesName.DEPARTMENT
            }} />
    
        {
            department && <h1>{department.name}</h1>
        }
        </>
  )
}