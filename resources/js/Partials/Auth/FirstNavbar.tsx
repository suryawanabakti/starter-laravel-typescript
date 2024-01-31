import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import { PropsWithChildren } from "react";
import { IconBrandGithub, IconHeart } from "@tabler/icons-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
export default function FirstNavbar({
    user,
}: PropsWithChildren<{ user: any }>) {
    console.log(user);
    return (
        <header className="navbar navbar-expand-md d-print-none">
            <div className="container-xl">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <Link href="/dashboard/admin">
                        <ApplicationLogo
                            width="32"
                            className="navbar-brand-image"
                        />
                    </Link>
                </h1>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item d-none d-md-flex me-3">
                        <div className="btn-list"></div>
                    </div>
                    <div className="d-none d-md-flex">
                        <div className="nav-item dropdown d-none d-md-flex me-3">
                            <a
                                href="#"
                                className="nav-link px-0"
                                data-bs-toggle="dropdown"
                                tabIndex={-1}
                                aria-label="Show notifications"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                </svg>
                                <span className="badge bg-red" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title d-flex justify-content-between w-100">
                                            Notifications
                                            <a
                                                href="#markAllAsRead"
                                                className="text-primary"
                                            >
                                                <small>Mark All As Read</small>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="list-group list-group-flush list-group-hoverable">
                                        {user.notifications.map((data: any) => {
                                            return (
                                                <Link
                                                    href={`/notifications/${data.id}`}
                                                    className="text-decoration-none"
                                                >
                                                    <div className="list-group-item">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                {!data.read_at ? (
                                                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                                                ) : (
                                                                    <span className="status-dot d-block" />
                                                                )}
                                                            </div>
                                                            <div className="col text-truncate">
                                                                {/* <a
                                                                    href="#text"
                                                                    className="text-body d-block"
                                                                ></a> */}
                                                                <div className="d-block text-muted text-truncate mt-n1">
                                                                    {
                                                                        data
                                                                            .data
                                                                            .data
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a
                            href="#profile"
                            className="nav-link d-flex lh-1 text-reset p-0"
                            data-bs-toggle="dropdown"
                            aria-label="Open user menu"
                        >
                            <span
                                className="avatar avatar-sm"
                                style={{
                                    backgroundImage:
                                        "url(/static/avatars/000m.jpg)",
                                }}
                            />
                            <div className="d-none d-xl-block ps-2">
                                <div>{user.name}</div>
                                <div className="mt-1 small text-muted text-capitalize">
                                    {user.roles[0].name}
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <Link
                                href="/notifications"
                                className="dropdown-item"
                            >
                                Notifications
                            </Link>
                            <Link href="/activities" className="dropdown-item">
                                Activities
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="/profile" className="dropdown-item">
                                Settings
                            </Link>
                            <Link
                                href="/logout"
                                method="post"
                                className="dropdown-item"
                                as="button"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
