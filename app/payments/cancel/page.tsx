import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentCancel() {
    return (
        <div className="container py-20 text-center mx-auto">
            <h1 className="text-4xl font-bold text-red-600">
                Payment Cancelled
            </h1>

            <p className="mt-4">
                Your payment was cancelled.
            </p>

            <Link href='/'>
                <Button className="my-5">Try again</Button>
            </Link>
        </div>
    );
}