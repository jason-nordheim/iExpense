import { Link } from "react-router-dom";
import { PageTitle } from "../../common/PageTitle";

export const HomePage = () => {
    return (
        <>
            <div className="row">
                <PageTitle value={"Home"} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            Please <Link to="/profile">login</Link> to an account to get started
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
