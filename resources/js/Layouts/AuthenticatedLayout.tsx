import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import FirstNavbar from "@/Partials/Auth/FirstNavbar";
import SecondNavbar from "@/Partials/Auth/SecondNavbar";
import Footer from "@/Partials/Auth/Footer";
import LinkHead from "@/Partials/Auth/LinkHead";
import ScriptBody from "@/Partials/Auth/ScriptBody";
import { Link } from "@inertiajs/react";

export default function Authenticated({
    user,
    header,
    children,
    link,
}: PropsWithChildren<{ user: User; header?: ReactNode; link?: string }>) {
    return (
        <>
            <LinkHead />
            <div className="page">
                {/* Navbar */}
                <FirstNavbar user={user} />
                <SecondNavbar />
                <div className="page-wrapper">
                    {/* Page body */}
                    {header && (
                        <div className="page-header d-print-none">
                            <div className="container-xl">
                                <div className="row g-2 align-items-center">
                                    <div className="col">
                                        <h2 className="page-title">{header}</h2>
                                    </div>
                                    {link && (
                                        <div className="col-auto">
                                            <Link href={link}>Kembali</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {children}
                    <Footer />
                </div>
            </div>

            <ScriptBody />
        </>
    );
}
