'use server'
import { RevalidateKey } from "@/constants/RevalidateKey";
import { RoutesName } from "@/constants/RoutesName";
import { db } from "@/db/conn";
import { Teacher } from "@/db/types";
import { appCache } from "@/lib/AppCache";
import { UpdateResult } from "kysely";

export async function findTeacherByEmail(token: string,email: string): Promise<Teacher | undefined> {
    const cachedData = appCache(
        async () => {
            return await db.selectFrom('teachers')
            .selectAll()
            .where('email', '=', email)
            .where('access_token', '=', token)
            .executeTakeFirst();
        },
        [`${RevalidateKey.TeacherGetByEmail}/${email}`],
        { revalidate: 1800, tags: [`${RevalidateKey.TeacherGetByEmail}/${email}`] }
    )
    return cachedData()
}

export async function updateToken(token: string, email: string) : Promise<UpdateResult[]> {
    await fetch(process.env.APP_URL + RoutesName.API_REVALIDATE, {
        method: "POST",
        body: JSON.stringify({path: `${RevalidateKey.TeacherGetByEmail}/${email}`})
    })
    return db.updateTable('teachers')
    .set({access_token: token})
    .where('email', '=', email)
    .execute()
}

// export const TeacherRepository = {
//   ,

// //   async create(data: { name: string; email: string; password: string }) {
// //     return db.insertInto('users')
// //       .values(data)
// //       .executeTakeFirst();
// //   },

// //   async updateToken(userId: number, token: string) {
// //     return db.updateTable('users')
// //       .set({ token })
// //       .where('id', '=', userId)
// //       .execute();
// //   },
// };