import { useState } from 'react';
import { Login } from "../components/Login";
import { Register } from "../components/Register";

const cards = {
    login: "login",
    register: "register",
};
export const SignIn = ({ authState, authStore }) => {
    const [card, setCard] = useState(cards.login);

    const tabTextClasses = `purple-text text-darken-4 ${card === card.login && "active"}`;

    const handleTabClick = (e, newCard) => {
        e.preventDefault();
        setCard(newCard);
    };
    return (
        <>
            <div className="card-tabs">
                <ul className="tabs tabs-fixed-width ">
                    <li className="tab">
                        <a
                            className={tabTextClasses}
                            href="#!"
                            onClick={(e) => handleTabClick(e, cards.login)}
                        >Login</a>
                    </li>
                    <li className={`tab`}>
                        <a
                            className={tabTextClasses}
                            href="#!"
                            onClick={(e) => handleTabClick(e, cards.register)}
                        > Register</a>
                    </li>
                </ul>
            </div>
            <div className="card-content">
                {card === cards.login && <Login authState={authState} dispatch={authStore.dispatch} />}
                {card === cards.register && <Register authState={authState} dispatch={authStore.dispatch} />}
            </div>
        </>
    );
};