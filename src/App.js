



import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(
          response.data.map((user) => ({
            id: user.id,
            firstName: user.name.split(" ")[0],
            lastName: user.name.split(" ")[1] || "",
            email: user.email,
            department: "Unknown",
          }))
        );
      } catch (err) {
        setError("Failed to fetch users. Please try again.");
      }
    };

    fetchUsers();
  }, []);

  // Add or edit user
  const handleSaveUser = async (formData) => {
    if (!formData.firstName ||!formData.lastName || !formData.email || !formData.department) {
      setError("All Fields are required.");
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${formData.id}`, formData);
        setUsers(
          users.map((user) => (user.id === formData.id ? { ...user, ...formData } : user))
        );
        alert("User updated successfully!");
      } else {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
        setUsers([...users, { ...formData, id: response.data.id }]);
        alert("User added successfully!");
      }
      setFormData({ id: "", firstName: "", lastName: "", email: "", department: "" });
      setIsEditing(false);
      setError("");
    } catch (err) {
      setIsEditing(false);
      setError("Failed to save user. Please try again.");
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  // Edit user
  const handleEditUser = (user) => {
    setFormData(user);
    setIsEditing(true);
    setError("");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "#333",
        }}
      >
        User Management
      </h1>

      {error && <p style={{ color: "red", marginBottom: "20px", textAlign: "center" }}>{error}</p>}

      <UserForm
        formData={formData}
        setFormData={setFormData}
        handleSaveUser={handleSaveUser}
        isEditing={isEditing}
      />

      <UserList
        users={users}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default App;


//  fourth pull



