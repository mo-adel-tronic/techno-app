import DepartmentProvider from "@/features/department/hooks/DepartmentProvider";

export default async function SingleDepartment({
    children, params
  }: {
    children: React.ReactNode,
    params: Promise<{id: number}>
  }) {
    // const departmentID = (await params).id
  return (
    <DepartmentProvider>
        {children}
    </DepartmentProvider>
  )
}
