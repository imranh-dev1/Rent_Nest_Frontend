"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createPayment } from "@/app/dashboard/_actions/payments/createPayment";

interface PaymentButtonProps {
    requestId: string;
    status: string;
}

export default function PaymentButton({
    requestId,
    status,
}: PaymentButtonProps) {
    const router = useRouter();

    const handlePayment = async (requestId: string) => {
        const res = await createPayment(requestId);

        if (res.success) {
            window.location.href = res.data.checkoutUrl;
        } else {
            toast.error(res.message);
        }
    };

    return (
        <Button
            size="sm"
            disabled={status !== "APPROVED"}
            onClick={() => handlePayment(requestId)}
        >
            Pay Now
        </Button>
    );
}