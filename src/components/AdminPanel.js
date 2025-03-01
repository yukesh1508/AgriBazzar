import { useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";

const AdminPanel = () => {
    const { registrations, removeRegistration } = useContext(RegistrationContext);

    return (
        <div className="container mt-4">
            <h2>Admin Panel - Manage Registrations</h2>

            {registrations.length === 0 ? (
                <p>No registrations available.</p>
            ) : (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((reg, index) => (
                            <tr key={index}>
                                <td>{reg.name}</td>
                                <td>{reg.role}</td>
                                <td>{reg.city}</td>
                                <td>{reg.phone}</td>
                                <td>{reg.email}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeRegistration(index)}
                                    >
                                        ❌ Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminPanel;
