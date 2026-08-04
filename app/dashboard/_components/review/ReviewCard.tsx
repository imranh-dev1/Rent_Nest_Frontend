import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Star } from "lucide-react";

interface Props {
    review: any;
}

export default function ReviewCard({ review }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>{review.user.name}</span>

                    <div className="flex items-center gap-1">
                        <Star
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                        {review.rating}
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p>{review.comment}</p>

                <p className="mt-3 text-sm text-muted-foreground">
                    {new Date(review.createdAt).toLocaleDateString()}
                </p>
            </CardContent>
        </Card>
    );
}