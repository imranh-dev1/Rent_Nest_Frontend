"use client";

import { Button } from "@/components/ui/button";

export default function CancelRequestButton({
    status,
    requestId,
}: {
    requestId: string;
    status: string
}) {
    const handleCancel = async () => {
        // call cancel request server action
        console.log(requestId);
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