import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { IconHome, IconSearch } from "@tabler/icons-react";
import { FormEventHandler } from "react";

export default function SecondNavbar() {
    const { data, setData, get, processing } = useForm({
        search: "",
    });

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get("/dashboard");
    };
    return (
        <header className="navbar-expand-md">
            <div className="collapse navbar-collapse" id="navbar-menu">
                <div className="navbar">
                    <div className="container-xl">
                        <ul className="navbar-nav">
                            <li
                                className={`nav-item ${
                                    route().current("dashboard") ? "active" : ""
                                }`}
                            >
                                <Link
                                    className="nav-link"
                                    href="/dashboard/admin"
                                >
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        <IconHome
                                            className="icon"
                                            size={24}
                                            strokeWidth={2}
                                        />
                                    </span>
                                    <span className="nav-link-title">Home</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form onSubmit={handleSearch} autoComplete="off">
                                <div className="input-icon">
                                    <span className="input-icon-addon">
                                        <IconSearch
                                            className={`icon ${
                                                processing && "spinner-border"
                                            }`}
                                            size={24}
                                            strokeWidth={2}
                                        />
                                    </span>
                                    <TextInput
                                        placeholder="Search…"
                                        value={data.search}
                                        onChange={(e) =>
                                            setData("search", e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
