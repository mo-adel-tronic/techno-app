import { appCache } from "@/lib/AppCache";
import { db } from "@/db/conn";
import { Department } from "@/db/types";
import { RevalidateKey } from "@/constants/RevalidateKey";

export async function fetchAllDepartments(): Promise<Department[] | undefined> {
    const cachedData = appCache(
            async () => {
                return await db.selectFrom('department')
                .selectAll()
                .execute();
            },
            [`${RevalidateKey.AllDepartment}`],
            { revalidate: 1800 }
        )
        return cachedData()
}