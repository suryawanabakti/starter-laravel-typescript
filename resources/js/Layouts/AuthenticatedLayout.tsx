import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import FirstNavbar from "@/Partials/Auth/FirstNavbar";
import SecondNavbar from "@/Partials/Auth/SecondNavbar";
import Footer from "@/Partials/Auth/Footer";
import LinkHead from "@/Partials/Auth/LinkHead";
import ScriptBody from "@/Partials/Auth/ScriptBody";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
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
