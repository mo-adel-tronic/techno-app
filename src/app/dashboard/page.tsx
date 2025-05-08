import { authOptions } from "@/features/auth/AuthOptions"
import { getServerSession } from "next-auth"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
  if(session?.accessToken) {
    return (
        <div>
            welcome admin
        </div>
      )
  } else {
    return <h1>error</h1>
  }
}
