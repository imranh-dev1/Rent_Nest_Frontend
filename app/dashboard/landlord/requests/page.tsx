import { getLandlordRentalRequests } from "@/services/getLandlordRentalRequets";
import RentalRequestsTable from "../_components/RentalRequestsTable";

interface PageProps {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function RequestsPage() {

    const requests = await getLandlordRentalRequests();

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-primary p-8 text-primary-foreground">
                <h1 className="text-3xl font-bold">
                    Rental Requests
                </h1>

                <p className="mt-2 text-primary-foreground/80">
                    Review incoming rental requests, approve or reject applications,
                    and manage tenant communications from one place.
                </p>
            </div>

            <RentalRequestsTable
                requests={requests.data}
            />

        </div>
    );
}