import { Teacher } from "@/db/types"
import { authOptions } from "@/features/auth/AuthOptions"
import { TeacherRepository } from "@/features/teachers/TeacherRepo"
import { getServerSession } from "next-auth"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    const data : Teacher | undefined = session ? await TeacherRepository.findByEmail(session.user.email || '') : undefined
    console.log(data)
  return (
    <div>
        {
            session && (
                <div>
                    <h1>
                        {
                            session.accessToken.length
                        }
                    </h1>
                    {
                        session.user && (
                            <div>
                                <h1>
                                    {session.user.name}
                                </h1>
                                <h1>
                                    {session.user.email}
                                </h1>
                            </div>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}
