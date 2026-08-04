import { notFound } from "next/navigation";
import { getPropertyById } from "../../_actions/property/getPropertyById";
import PropertyHeader from "../../_components/propertiesDetails/PropertyHeader";
import PropertyDescription from "../../_components/propertiesDetails/PropertyDescription";
import PropertyAmenities from "../../_components/propertiesDetails/PropertyAmenities";
import PropertyDetails from "../../_components/propertiesDetails/PropertyDetails";
import PropertyMap from "../../_components/propertiesDetails/PropertyMap";
import LandlordCard from "../../_components/propertiesDetails/LandlordCard";
import RequestCard from "../../_components/propertiesDetails/RequestCard";
import SimilarProperties from "../../_components/propertiesDetails/SimilarProperties";
import PropertyGallery from "../../_components/propertiesDetails/PropertyGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getReviews } from "@/app/dashboard/_actions/reviews/getReviews";
import { MessageSquare, Star, User } from "lucide-react";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PropertyDetailsPage({
    params,
}: PageProps) {
    const { id } = await params;

    const property = await getPropertyById(id);
    const { data: reviews } = await getReviews(id);

    console.log(reviews)

    if (!property) {
        notFound();
    }

    return (
        <main className="pb-20">
            <div className="container mx-auto space-y-10 px-4 py-10">

                <PropertyGallery property={property} />

                <PropertyHeader property={property} />

                <div className="grid gap-10 lg:grid-cols-12">

                    <div className="space-y-8 lg:col-span-8">

                        <PropertyDescription property={property} />

                        <PropertyAmenities property={property} />

                        <PropertyDetails property={property} />

                        <PropertyMap property={property} />

                        <LandlordCard property={property} />

                    </div>

                    <aside className="lg:col-span-4">

                        <div className="sticky top-24">

                            <RequestCard property={property} />

                        </div>

                    </aside>
                </div>

                <Card className="rounded-2xl border shadow-sm">

                    <CardHeader>

                        <CardTitle>
                            Comments
                        </CardTitle>

                        <CardDescription>
                            Discussion between tenant and landlord.
                        </CardDescription>

                    </CardHeader>

                    <CardContent>

                        {reviews.length > 0 ? (
                            <div className="space-y-5">
                                {reviews.map((comment: any) => (
                                    <div
                                        key={comment.id}
                                        className="flex gap-4 rounded-xl border p-4"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                            <User className="h-5 w-5 text-primary" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold">
                                                        {comment.tenant.name}
                                                    </h4>

                                                    <p className="text-xs text-muted-foreground">
                                                        {new Date(comment.createdAt).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`h-4 w-4 ${star <= comment.rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            <p className="mt-3 leading-7">
                                                {comment.comment}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-dashed py-10 text-center">
                                <MessageSquare className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />

                                <h3 className="font-semibold">
                                    No comments yet
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Start the conversation by adding the first comment.
                                </p>
                            </div>
                        )}

                    </CardContent>

                </Card>
                <SimilarProperties
                    currentId={property.id}
                    categoryId={property.category.id}
                />

            </div>
        </main>
    );
}