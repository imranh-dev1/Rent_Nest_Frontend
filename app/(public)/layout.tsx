import Navbar from "@/components/shared/Navbar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar /> 
            <main>{children}</main>
        </>
    );
}