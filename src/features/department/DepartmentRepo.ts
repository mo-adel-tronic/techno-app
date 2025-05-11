'use server'
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
            [RevalidateKey.AllDepartment],
            { revalidate: 1800, tags: [RevalidateKey.AllDepartment] }
        )
        return cachedData()
}
export async function addDepartment(department: Department) : Promise<{success: boolean, id?: number}> {
    try {
        const res = await Promise.resolve(db.insertInto('department')
    .values({
        name: department.name,
        depart_code: department.depart_code
    })
    .execute())
    return {
        success: true,
        id: res[0]?.insertId !== undefined ? Number(res[0].insertId) : undefined
    }
    } catch (e) {
        console.log('insert error: ', e)
        return {
            success: false
        }
    }
}

export async function deleteDepartment(
  id: number
): Promise<{ success: boolean }> {
  try {
    await Promise.resolve(
      db.deleteFrom("department").where("id", "=", id).execute()
    );
    return {
      success: true,
    };
  } catch (e) {
    console.log("delete error: ", e);
    return {
      success: false,
    };
  }
}

export async function deleteBulkDepartments(
  ids: number[]
): Promise<{ success: boolean }> {
  try {
    await Promise.resolve(
      db.deleteFrom("department").where("id", "in", ids).execute()
    );
    return {
      success: true,
    };
  } catch (e) {
    console.log("delete error: ", e);
    return {
      success: false,
    };
  }
}