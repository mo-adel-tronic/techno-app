import { db } from "@/lib/prisma";
import { Department } from "../types";
import { appCache } from "@/lib/AppCache";
import { RoutesName } from "@/lib/constants";

export default async function getAllDepartments(): Promise<Department[]> {
  try {
    const cachedData = appCache(
      async () => {
        const departments = await db.department.findMany();
        return departments.map((department) => ({
          id: department.id,
          name: department.name,
          code: department.depart_code,
        }));
      },
      [RoutesName.DEPARTMENT],
      { revalidate: 1800 }
    );
    return await cachedData();
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw new Error("فشل الوصول للبيانات، حاول مره أخرى");
  }
}
