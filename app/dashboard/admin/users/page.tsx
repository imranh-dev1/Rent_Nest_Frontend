import { getUsers } from "../_actions/getUsers";
import UserTable from "../_components/users/UserTable";


export default async function UsersPage() {
    const response = await getUsers();

    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-3xl font-bold">
                    Users Management
                </h1>

                <p className="text-muted-foreground">
                    Manage tenants, landlords and administrators.
                </p>
            </div>

            <UserTable
                users={response.data}
            />

        </div>
    );
}