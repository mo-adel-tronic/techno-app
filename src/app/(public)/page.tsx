import LoginButton from "@/components/page/login/LoginButton";
import AppLogo from "@/components/shared/AppLogo";
import { findTeacherByEmail } from "@/features/teachers/TeacherRepo";

export default async function Home() {
  const data = await findTeacherByEmail('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiI2NjA3OTlmNi04MDQ5LTQ1ZTgtYmU0Zi0wM2E5MWFlNzgzMjciLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZDY3ODllY2QtMDFhOC00Zjk3LTlmODUtYWE0ODI5MWY1NTcwL3YyLjAiLCJpYXQiOjE3NDY3NDIyNjQsIm5iZiI6MTc0Njc0MjI2NCwiZXhwIjoxNzQ2NzQ2MTY0LCJlbWFpbCI6Ik11aGFtbWFkQWRlbE11aGFtbWFkLmdzQHNlZHUuYXN1LmVkdS5lZyIsIm5hbWUiOiLZhdit2YXYryDYudin2K_ZhCDZhdit2YXYryDYo9it2YXYryIsIm9pZCI6IjM3NGNhY2IxLTY3ZDctNDllOS1iZmUxLTU3ZDBmMzE2NjFmMiIsInByZWZlcnJlZF91c2VybmFtZSI6Ik11aGFtbWFkQWRlbE11aGFtbWFkLmdzQHNlZHUuYXN1LmVkdS5lZyIsInJoIjoiMS5BVHdBelo1NDFxZ0JsMC1maGFwSUtSOVZjUGFaQjJaSmdPaEZ2azhEcVJybmd5YzhBSFU4QUEuIiwic2lkIjoiMDAyZTZhZTktYzllOS1jZDlmLTU2YTUtZDNmZDlmMWNkODJjIiwic3ViIjoiV3dyclJFWmtBc1VrRlhfQlN0UUkzb0dIOVhWRmpYVE5mTWxhNVdsY251byIsInRpZCI6ImQ2Nzg5ZWNkLTAxYTgtNGY5Ny05Zjg1LWFhNDgyOTFmNTU3MCIsInV0aSI6IkhiOXRSTWZjN2syaHpDTzQ2bHZKQUEiLCJ2ZXIiOiIyLjAifQ.T0crnWEh0Zea8O3n12PHIdqrfGMj4vVST8DauXNdNdJXBbzYVj7XVli4Qf-UeZxJBAuDxxc3MkKvDPgE6pj5CtlkE-gYKkN7KN1I0tNmpgPGd2xFfRz-XvcykZMHh3JG0q0sk9_bkDCGtx0DmBGLtzbMUydsVy3GlzJqdWtnJ3ffljjXdNBUHc_UwMF4JQ8DyqTqsuWYNqpiN1SQ0zXSVO386Lqhx3Pkle8QioiGDv0hLAzSqlavt0W3ihimsRxIDM15dovzHmTEyPMGdQbc-zB16xEc1JspaaY72Ukn1BTz2QovcSVJd2DuYBg624Cz9I0VQUZKFi-n1-dp5WRA8g', 'muhammadadelmuhammad.gs@sedu.asu.edu.eg')
  return (
    <main className="min-h-[calc(100vh-45px)] flex items-center justify-center bg-app-card px-8">
      <div 
      style={{
        boxShadow: "0 0 36px 1px rgba(0, 0, 0, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }} 
      className="border-2 border-gray-100 rounded-lg p-4 w-full md:w-4/6 flex flex-col items-center justify-center">
        <AppLogo />
        <h1 className="text-lg md:text-2xl font-bold text-white my-4 ">مرحباً بك في منصة <span className="text-2xl md:text-3xl text-app-primary font-text-en">Techno Torial</span></h1>
        <div 
        className="w-5/6 bg-gradient-to-r from-app-background/10 to-gray-300/5 text-white text-sm font-bold text-center rounded-lg p-4"
        >
          <p className="my-4">سجل دخولك باستخدام حساب Microsoft الخاص بمؤسستك التعليمية</p>
          <LoginButton />
        </div>
      </div>
      <h1>
        {
          data?.name
        }
      </h1>
    </main>
  );
}
