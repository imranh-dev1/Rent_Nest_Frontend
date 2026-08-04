"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createRentalRequest } from "../../_actions/rentalRequest/createRentalRequest";

interface RentalRequestDialogProps {
    propertyId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function RentalRequestDialog({
    propertyId,
    open,
    onOpenChange,
}: RentalRequestDialogProps) {
    const router = useRouter();

    const [leaseMonths, setLeaseMonths] = useState(12);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!message.trim()) {
            toast.error("Please enter your message.");
            return;
        }

        if (leaseMonths <= 0) {
            toast.error("Lease duration must be greater than zero.");
            return;
        }

        try {
            setLoading(true);

            const payload = {
                propertyId,
                leaseMonths,
                message,
            };

            const res = await createRentalRequest(payload);

            if (res.success) {
                toast.success("Rental request submitted successfully.");

                setMessage("");
                setLeaseMonths(12);

                onOpenChange(false);

                router.push("/dashboard/tenant/requests");
                router.refresh();
            } else {
                toast.error(res.message || "Failed to submit request.");
            }
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        Request This Property
                    </DialogTitle>

                    <DialogDescription>
                        Submit your rental request to the landlord.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Lease Duration (Months)
                        </label>

                        <Input
                            type="number"
                            min={1}
                            value={leaseMonths}
                            onChange={(e) =>
                                setLeaseMonths(Number(e.target.value))
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Message
                        </label>

                        <Textarea
                            rows={5}
                            placeholder="Tell the landlord why you're interested in this property..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}

                        Submit Request
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}