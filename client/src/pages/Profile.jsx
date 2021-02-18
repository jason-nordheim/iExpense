import { useState } from "react";
import { PageTitle } from "../components/common/PageTitle";
import { Login } from "../components/Login";
import { Register } from "../components/Register";


export const Profile = () => {
    const [card, setCard] = useState(cards.login);

    const cards = {
        login: "login",
        register: "register",
    };

    const handleTabClick = (newCard) => {
        setCard(newCard);
    };

    return (
        <>
            <div className="row">
                <PageTitle value="Profile" />
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width ">
                            <li className="tab">
                                <a
                                    className={`purple-text text-darken-4 ${card === card.login && "active"
                                        }`}
                                    href="#!"
                                    onClick={(e) => handleTabClick(cards.login)}
                                >
                                    Login
                                </a>
                            </li>
                            <li className={`tab`}>
                                <a
                                    className={`purple-text text-darken-4 ${card === card.register && "active"
                                        }`}
                                    href="#!"
                                    onClick={() => handleTabClick(cards.register)}
                                >
                                    Register
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-content">
                        {card === cards.login && <Login />}
                        {card === cards.register && <Register />}
                    </div>
                </div>
            </div>
        </>
    );
};
