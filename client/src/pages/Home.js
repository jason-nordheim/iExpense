import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/PageTitle";

export const Home = () => {
  return (
    <>
      <div className="row">
        <PageTitle value={"Home"} />
      </div>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-content">
              <p>
                Please <Link to="/profile">login</Link> to an account to get
                started
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
