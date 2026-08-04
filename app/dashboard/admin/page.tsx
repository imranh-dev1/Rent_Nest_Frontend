import { getDashboardStatistics } from "./_actions/getDashboardStatistics";
import DashboardCards from "./_components/DashboardCards";
import PropertiesOverview from "./_components/PropertiesOverview";
import PropertiesPieChart from "./_components/PropertiesPieChart";
import RequestsBarChart from "./_components/RequestsBarChart";
import RequestsOverview from "./_components/RequestsOverview";
import UsersOverview from "./_components/UsersOverview";
import UsersPieChart from "./_components/UsersPieChart";

export default async function AdminDashboardPage() {
    const response = await getDashboardStatistics();

    const stats = response.data;

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-muted-foreground">
                    Welcome back, Admin 👋
                </p>
            </div>

            <DashboardCards stats={stats} />

            <div className="grid gap-6 lg:grid-cols-3">
                <UsersOverview stats={stats} />

                <PropertiesOverview stats={stats} />

                <RequestsOverview stats={stats} />

                <UsersPieChart stats={stats} />

                <PropertiesPieChart stats={stats} />

                <RequestsBarChart stats={stats} />
            </div>

        </div>
    );
}