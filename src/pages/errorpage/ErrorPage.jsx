import { Link } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage = () => {

    return (
        <div className="error-page-container">
            <h2 className="error-page-title">ERROR 404</h2>
                <div className="error-msg">
          <span className="error-msg-title">
            THERE'S NOTHING HERE!
          </span>
                    <Link to="/" className="error-msg-btn">
                        Go Back
                    </Link>
                </div>
        </div>
    );
};

export default ErrorPage;