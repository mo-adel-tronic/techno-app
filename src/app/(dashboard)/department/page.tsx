import HeaderBanner from '@/components/dashboard/HeaderBanner'
import getAllDepartments from '@/features/department/usecases/GetAll'
import { RoutesName } from '@/lib/constants'

export default async function Department() {
  const departments = await getAllDepartments()
  return (
    <>
    <HeaderBanner title='إدارة القسم العلمي' linkCreate={{
        text: 'إضافة قسم علمي',
        href: RoutesName.DEPARTMENT_CREATE
    }} />

    
    </>
  )
}
