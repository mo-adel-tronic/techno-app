'use server'
import { db } from "@/lib/prisma";
import { Department } from "../types";
import { appCache } from "@/lib/AppCache";
import { RoutesName } from "@/lib/constants";

export default async function getDepartment(id : number): Promise<Department> {
    try {
        const department = await db.department.findFirst({
            where: {
                id: id
            }
        });
        if (!department) {
            throw new Error("بيانات القسم غير موجودة");
        }
        const cachedData = appCache(() => {
            return Promise.resolve({
                id: department.id,
                name: department.name,
                code: department.depart_code
            });
        }, [RoutesName.DEPARTMENT + '/' + id.toString()], {revalidate: 1800})
        return (await cachedData());
    } catch (error) {
        console.error("Error fetching departments:", error);
        throw new Error("فشل الوصول للبيانات، حاول مره أخرى");
    }
}