import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative  overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
                alt="Modern Apartment"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-900/60 to-primary/40" />

            {/* Decorative Blur */}
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Content */}
            <div className="relative min-h-screen flex items-center justify-center px-4 py-10 z-10 p-6">
                {/* Form */}
                {children}
            </div>

        </section>
    );
}