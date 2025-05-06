import { authOptions } from "@/features/auth/AuthOptions"
import { getServerSession } from "next-auth"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
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
