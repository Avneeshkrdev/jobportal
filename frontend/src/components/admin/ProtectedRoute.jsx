import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null || user.role !== 'recruiter') {
            navigate("/");
        }
    }, [user, navigate]); // Added user and navigate as dependencies

    return (
        <div className="flex items-center justify-center w-full min-h-screen ">
            {/* Only render children if user is authorized */}
            {user && user.role === 'recruiter' && (
                <div className="w-full">
                    {children}
                </div>
            )}
        </div>
    );
};

export default ProtectedRoute;