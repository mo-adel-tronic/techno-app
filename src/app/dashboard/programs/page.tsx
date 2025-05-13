import HeaderBanner from "@/components/page/dashboard/HeaderBanner";
import ProgramsTable from "@/components/page/programs/ProgramsTable";
import { RoutesName } from "@/constants/RoutesName";
import { fetchAllPrograms } from "@/features/programs/ProgramsRepo";

export default async function Programs() {
  const programs = await fetchAllPrograms()
  return (
    <>
    <HeaderBanner title='إدارة البرامج الدراسية' linkCreate={{
        text: 'إضافة برنامج جديد',
        href: RoutesName.PROGRAMS_CREATE
    }} />
    <ProgramsTable data={programs || []} />
    
    </>
  )
}