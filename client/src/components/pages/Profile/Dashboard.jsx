import { userActions } from "../../../auth/_user.actions";
import { useAuthContext } from "../../../hooks/useAuthContext";

export function Dashboard() {
    const [authState, dispatch] = useAuthContext();

    const handleLogout = (event) => {
        event.preventDefault();
        userActions.logout(dispatch);
    };

    return (
        <>
            <div className="card-action right-align">
                <button class="waves-effect waves-light btn blue accent-4"
                    onClick={handleLogout}>Logout</button>
            </div>
            <div className="card-content">
                Welcome {authState.user.username}
            </div>

        </>
    );
}