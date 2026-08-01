import Footer from "@/components/footer";
import Navbar from "@/components/shared/Navbar";
import { getCurrentUser } from "@/services/auth.service";

export default async function MainLayout({ children, }: { children: React.ReactNode; }) {
    const user = await getCurrentUser()

    return (
        <>
            <Navbar user={user} />
            <main>{children}</main>
            <Footer />
        </>
    );
}