import { SignupForm } from "@/app/(auth)/_componets/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full">
        <SignupForm />
      </div>
    </div>
  )
}
