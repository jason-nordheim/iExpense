import { useEffect, useRef, useState } from 'react';
import * as M from "materialize-css/dist/js/materialize";
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';


const cards = {
    login: "login",
    register: "register",
};

export function SignInContainer() {
    const tabsRef = useRef(null);
    const [matTabs, setMatTabs] = useState({});
    const [card, setCard] = useState(cards.login);

    useEffect(() => setMatTabs(M.Tabs.init(tabsRef.current)), []);

    const tabTextClasses = (cardType) => `blue-text text-darken-4 waves-effect waves-blue ${card === cardType && " active"}`;

    const loginId = "login";
    const registerId = "register";

    const handleTabClick = (e, newCard) => {
        e.preventDefault();
        setCard(newCard);
    };
    return (
        <>
            <div className="card-tabs">
                <ul className="tabs tabs-fixed-width" ref={tabsRef}>
                    <li className="tab">
                        <a
                            className={tabTextClasses(card.login)}
                            href={`#${loginId}`}
                            onClick={(e) => handleTabClick(e, cards.login)}
                        >Login</a>
                    </li>
                    <li className="tab">

                        <a
                            className={tabTextClasses(card.register)}
                            href={`#${registerId}`}
                            onClick={(e) => handleTabClick(e, cards.register)}
                        > Register</a>
                    </li>
                </ul>
            </div>
            <div className="card-content">
                <LoginForm id={loginId} />
                <RegisterForm id={registerId} />
            </div>
        </>
    );
}