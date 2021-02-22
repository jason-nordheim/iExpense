import { useState } from "react";
import { useStore } from "react-redux";
import { PageTitle } from "../components/common/PageTitle";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

const cards = {
    login: "login",
    register: "register",
};

export const Profile = () => {
    const authStore = useStore();
    const [card, setCard] = useState(cards.login);
    const state = authStore.getState();
    console.log('authState', state);

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
                        {card === cards.login && <Login store={authStore} dispatch={authStore.dispatch} />}
                        {card === cards.register && <Register store={authStore} dispatch={authStore.dispatch} />}
                    </div>
                </div>
            </div>
        </>
    );
};
