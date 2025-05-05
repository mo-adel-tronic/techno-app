import HeaderBanner from "@/components/dashboard/HeaderBanner"
// import DepartmentForm from "@/features/department/components/DepartmentForm"
import { RoutesName } from "@/lib/constants"

export default function DepartmentEdit() {
  return (
    <>
        <HeaderBanner title='تعديل بيانات القسم' linkCreate={{
                text: 'العودة إلى إدارة القسم العلمي',
                href: RoutesName.DEPARTMENT
            }} />
    
        {/* <DepartmentForm id={parseInt(departmentID)} defaultValues={{
            name: 'قسم تك',
            code: "ET"
        }} isEditMode={true} /> */}
        </>
  )
}
