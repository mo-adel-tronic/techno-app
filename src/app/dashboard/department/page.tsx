import HeaderBanner from "@/components/page/dashboard/HeaderBanner";
import DepartmentTable from "@/components/page/department/DepartmentTable";
import { RoutesName } from "@/constants/RoutesName";

export default async function Department() {
//   const departments = await getAllDepartments()
  return (
    <>
    <HeaderBanner title='إدارة القسم العلمي' linkCreate={{
        text: 'إضافة قسم علمي',
        href: RoutesName.DEPARTMENT_CREATE
    }} />
    <DepartmentTable data={[
      {
        id: 1,
        name: 'تكنولوجيا التعليم',
        code: "TR45"
      }
    ]} />
    
    </>
  )
}
