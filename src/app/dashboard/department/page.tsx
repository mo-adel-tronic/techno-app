import HeaderBanner from "@/components/page/dashboard/HeaderBanner";
import DepartmentTable from "@/components/page/department/DepartmentTable";
import { RoutesName } from "@/constants/RoutesName";
import { fetchAllDepartments } from "@/features/department/DepartmentRepo";

export default async function Department() {
  const departments = await fetchAllDepartments()
  return (
    <>
    <HeaderBanner title='إدارة القسم العلمي' linkCreate={{
        text: 'إضافة قسم علمي',
        href: RoutesName.DEPARTMENT_CREATE
    }} />
    <DepartmentTable data={departments || []} />
    
    </>
  )
}
