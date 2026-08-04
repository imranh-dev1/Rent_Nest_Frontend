"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { createReview } from "../../_actions/reviews/createReview";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CreateReviewDialogProps {
    propertyId: string;
}

export default function CreateReviewDialog({
    propertyId,
}: CreateReviewDialogProps) {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const router = useRouter();



    const handleSubmit = async () => {
        const payload = {
            rating,
            comment,
        };

        const res = await createReview(propertyId, payload);

        if (res.success) {
            toast.success("Review submitted successfully.", {
                description: "Thank you for sharing your feedback.",
            });

            setComment("");
            setRating(5);
            setOpen(false);

            router.refresh()

        } else {
            toast.error("Failed to submit review.", {
                description: res.message || "Please try again.",
            });
        }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default">
                    Leave a Review
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Review Property</DialogTitle>
                    <DialogDescription>
                        Share your experience to help future tenants.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <div>
                        <p className="mb-3 text-sm font-medium">Rating</p>

                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <Button variant="outline"
                                    key={value}
                                    type="button"
                                    onClick={() => setRating(value)}
                                >
                                    <Star
                                        className={`h-8 w-8 transition ${value <= rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                    />
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-sm font-medium">Comment</p>

                        <Textarea
                            rows={5}
                            placeholder="Write your review..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={handleSubmit}
                        disabled={!comment.trim()}
                    >
                        Submit Review
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}