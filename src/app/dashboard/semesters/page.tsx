import HeaderBanner from "@/components/page/dashboard/HeaderBanner";
import { fetchAllSemesters } from "@/features/semesters/SemesterRepo";
import SemesterTable from "@/components/page/semester/SemesterTable";
import { RoutesName } from "@/constants/RoutesName";

export const dynamic = 'force-dynamic';

export default async function Semesters() {
  const semesters = await fetchAllSemesters()
  return (
    <>
    <HeaderBanner title='إدارة المستويات' linkCreate={{
        text: 'إضافة مستوى جديد',
        href: RoutesName.SEMESTERS_CREATE
    }} />
    <SemesterTable data={semesters || []} />
    
    </>
  )
}
