import HeaderBanner from "@/components/dashboard/HeaderBanner";
import DepartmentForm from "@/features/department/components/DepartmentForm";
import { RoutesName } from "@/lib/constants";

export default function DepartmentCreate() {
  return (
    <>
    <HeaderBanner title='إضافة قسم جديد' linkCreate={{
            text: 'العودة إلى إدارة القسم العلمي',
            href: RoutesName.DEPARTMENT
        }} />

    <DepartmentForm />
    </>
  )
}
