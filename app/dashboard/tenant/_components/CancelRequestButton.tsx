"use client";

import { Button } from "@/components/ui/button";
import { cancelRentalRequest } from "../../_actions/rentalRequests/cancelRentalRequest";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CancelRequestButton({
    status,
    requestId,
}: {
    requestId: string;
    status: string
}) {
    const router = useRouter();

    const handleCancel = async () => {
        try {
            const res = await cancelRentalRequest(requestId);

            if (res.success) {
                toast.success(res.message);
                router.refresh();
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Something went wrong.");
            console.error(error);
        }
    };

    return (
        <Button disabled={status === "ACTIVE"}
            variant="destructive"
            onClick={handleCancel}
        >
            Cancel Request
        </Button>
    );
}