import {
    Mail,
    Phone,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { IProperty } from "@/types/property";

interface Props {
    property: IProperty;
}

export default function LandlordCard({
    property,
}: Props) {
    const landlord = property.landlord;

    return (
        <Card className="px-6 py-8 shadow-sm">

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <UserRound className="h-5 w-5 text-primary" />

                    Landlord Information

                </CardTitle>

            </CardHeader>

            <Separator />

            <CardContent className="space-y-6 pt-6">

                {/* Profile */}

                <div className="flex items-center gap-4">

                    <Avatar className="h-20 w-20 border">

                        <AvatarImage
                            src={landlord.profileImg ?? ""}
                            alt={landlord.name}
                        />

                        <AvatarFallback className="text-xl font-bold">
                            {landlord.name.charAt(0).toUpperCase()}
                        </AvatarFallback>

                    </Avatar>

                    <div>

                        <div className="flex items-center gap-2">

                            <h3 className="text-xl font-semibold">
                                {landlord.name}
                            </h3>

                            <Badge className="bg-emerald-600">

                                <ShieldCheck className="mr-1 h-3.5 w-3.5" />

                                Verified

                            </Badge>

                        </div>

                        <p className="text-sm text-muted-foreground">
                            Property Owner
                        </p>

                    </div>

                </div>

                {/* Contact */}

                <div className="space-y-4">

                    <div className="flex items-center gap-3 border p-4">

                        <Mail className="h-5 w-5 text-primary" />

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Email
                            </p>

                            <p className="font-medium">
                                {landlord.email}
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-3 border p-4">

                        <Phone className="h-5 w-5 text-primary" />

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Phone
                            </p>

                            <p className="font-medium">
                                {landlord.phone || "Not Available"}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Actions */}

                <div className="grid gap-3 sm:grid-cols-2">

                    <Button className="w-full">
                        Contact Owner
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full"
                    >
                        Send Message
                    </Button>

                </div>

            </CardContent>

        </Card>
    );
}