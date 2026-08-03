"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, Loader2, Pencil, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { handleDeleteProperty } from "@/app/dashboard/_actions/properties/deleteProperty";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { IProperty } from "@/types/property";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface Props {
    properties: IProperty[];
}

export default function PropertyTable({ properties, }: Props) {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const handleDelete = async (id: string) => {
        setDeletingId(id);

        const result = await handleDeleteProperty(id);

        if (result.success) {
            toast.success(result.message);
            router.refresh();
        } else {
            toast.error(result.message);
        }

        setDeletingId(null);
    };
    return (
        <div className="overflow-hidden border py-4 px-6">
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Rent</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead className="text-right">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {properties.map((property) => (
                        <TableRow key={property.id}>

                            {/* Property */}

                            <TableCell>
                                <div className="flex items-center gap-4">

                                    <div className="relative h-16 w-16 overflow-hidden ">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            {property.title}
                                        </h4>

                                        <p className="text-sm text-muted-foreground">
                                            {property.city}
                                        </p>
                                    </div>

                                </div>
                            </TableCell>

                            {/* City */}

                            <TableCell>
                                {property.city}
                            </TableCell>

                            {/* Rent */}

                            <TableCell>
                                ৳{property.rentAmount.toLocaleString()}
                            </TableCell>

                            {/* Status */}

                            <TableCell>

                                <Badge
                                    variant={
                                        property.availability === "AVAILABLE"
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {property.availability}
                                </Badge>

                            </TableCell>

                            {/* Date */}

                            <TableCell>
                                {new Date(property.createdAt).toLocaleDateString()}
                            </TableCell>

                            {/* Actions */}

                            <TableCell className="text-right">

                                <div className="flex justify-end gap-2">

                                    <Button
                                        asChild
                                        size="icon"
                                        variant="outline"
                                    >
                                        <Link href={`/properties/${property.id}`}>
                                            <Eye className="h-4 w-4" />
                                        </Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="icon"
                                        variant="outline"
                                    >
                                        <Link
                                            href={`/dashboard/landlord/properties/${property.id}/edit`}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Link>
                                    </Button>

                                    <Button
                                        size="icon"
                                        variant="destructive"
                                        disabled={deletingId === property.id}
                                        onClick={() => handleDelete(property.id)}
                                    >
                                        {deletingId === property.id ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <Trash2 className="h-4 w-4" />
                                        )}
                                    </Button>

                                </div>

                            </TableCell>

                        </TableRow>
                    ))}

                </TableBody>

            </Table>
        </div>
    );
}