import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function PaymentSuccess({
    searchParams,
}: {
    searchParams: Promise<{ session_id?: string }>;
}) {
    const { session_id } = await searchParams;

    return (
        <div className="container py-20 text-center mx-auto">
            <h1 className="text-4xl font-bold text-green-600">
                Payment Successful 🎉
            </h1>

            <p className="mt-4">
                Session ID: {session_id}
            </p>
            <Link href='/'>
                <Button className="my-5">Done</Button>
            </Link>
        </div>
    );
}