import './UserProfilePage.scss';

const UserProfilePage = () => {
  return (
    <div className="user-profile-page">
      <h1>User Profile Page</h1>
      <div className="profile-info">
        <img src="https://via.placeholder.com/100" alt="User Avatar" />
        <div className="info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
