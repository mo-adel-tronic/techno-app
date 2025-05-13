"use server";
import { RevalidateKey } from "@/constants/RevalidateKey";
import { RoutesName } from "@/constants/RoutesName";
import { db } from "@/db/conn";
import { Teacher } from "@/db/types";
import { appCache } from "@/lib/AppCache";
import { UpdateResult } from "kysely";

export async function fetchAllTeachers(): Promise<Teacher[] | undefined> {
  const cachedData = appCache(
    async () => {
      return await db.selectFrom("teachers").selectAll().orderBy('t_order').execute();
    },
    [RevalidateKey.AllTeachers],
    { revalidate: 1800, tags: [RevalidateKey.AllTeachers] }
  );
  return cachedData();
}

export async function findTeacherById(
  id: number
): Promise<Teacher | undefined> {
  const res = await db
        .selectFrom("teachers")
        .selectAll()
        .where("id", "=", id)
        .executeTakeFirst();
  return res;
}

export async function findTeacherByEmail(
  token: string,
  email: string
): Promise<Teacher | undefined> {
  const cachedData = appCache(
    async () => {
      return await db
        .selectFrom("teachers")
        .selectAll()
        .where("email", "=", email)
        .where("access_token", "=", token)
        .executeTakeFirst();
    },
    [`${RevalidateKey.TeacherGetByEmail}/${email}`],
    { revalidate: 1800, tags: [`${RevalidateKey.TeacherGetByEmail}/${email}`] }
  );
  return cachedData();
}

export async function updateToken(
  token: string,
  email: string
): Promise<UpdateResult[]> {
  await fetch(process.env.APP_URL + RoutesName.API_REVALIDATE, {
    method: "POST",
    body: JSON.stringify({
      path: `${RevalidateKey.TeacherGetByEmail}/${email}`,
    }),
  });
  return db
    .updateTable("teachers")
    .set({ access_token: token })
    .where("email", "=", email)
    .execute();
}

export async function deleteTeacher(id: number): Promise<{ success: boolean }> {
  try {
    await Promise.resolve(
      db.deleteFrom("teachers").where("id", "=", id).execute()
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

export async function deleteBulkTeachers(
  ids: number[]
): Promise<{ success: boolean }> {
  try {
    await Promise.resolve(
      db.deleteFrom("teachers").where("id", "in", ids).execute()
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

export async function addTeacher(
  teacher: Teacher
): Promise<{ success: boolean }> {
  try {
    await Promise.resolve(
      db
        .insertInto("teachers")
        .values({
          name: teacher.name,
          degree: teacher.degree,
          email: teacher.email,
          t_order: teacher.t_order
        })
        .execute()
    );
    return {
      success: true,
    };
  } catch (e) {
    console.log("insert error: ", e);
    return {
      success: false,
    };
  }
}

export async function updateTeacher(
  teacher: Teacher
): Promise<{ success: boolean }> {
  try {
    await Promise.resolve(
      db
        .updateTable("teachers")
        .set({
          name: teacher.name,
          degree: teacher.degree,
          email: teacher.email,
          t_order: teacher.t_order
        })
        .where("id", "=", teacher.id)
        .execute()
    );
    return {
      success: true,
    };
  } catch (e) {
    console.log("update error: ", e);
    return {
      success: false,
    };
  }
}
