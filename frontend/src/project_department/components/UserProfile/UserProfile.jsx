import './userProfile.scss';
import profile from '../../../assets/images/profile.jpg';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-image-wrapper">
        <img src={profile} alt="User Profile" className="profile-image" />
      </div>
      <div className="profile-info">
        <h5 className="profile-role">Project Manager</h5>
        <h6 className="profile-name">Richard Taji</h6>
      </div>
    </div>
  );
};

export default UserProfile;
