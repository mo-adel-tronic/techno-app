import { db } from "@/db/conn";
import { Teacher } from "@/db/types";

export const TeacherRepository = {
  async findByEmail(email: string): Promise<Teacher | undefined> {
    return db.selectFrom('teachers')
      .selectAll()
      .where('email', '=', email)
      .executeTakeFirst();
  },

//   async create(data: { name: string; email: string; password: string }) {
//     return db.insertInto('users')
//       .values(data)
//       .executeTakeFirst();
//   },

//   async updateToken(userId: number, token: string) {
//     return db.updateTable('users')
//       .set({ token })
//       .where('id', '=', userId)
//       .execute();
//   },
};