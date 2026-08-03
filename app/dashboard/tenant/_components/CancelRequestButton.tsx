"use client";

import { Button } from "@/components/ui/button";

export default function CancelRequestButton({
    requestId,
}: {
    requestId: string;
}) {
    const handleCancel = async () => {
        // call cancel request server action
        console.log(requestId);
    };

    return (
        <Button
            variant="destructive"
            onClick={handleCancel}
        >
            Cancel Request
        </Button>
    );
}