import './userProfile.scss';
import profile from '../../../assets/images/profile.jpg';
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="sidebar-brand">
          <img src={profile} alt="Logo" className="sidebar-logo" />
        </div>
      <div className="profile-info">
        <h5>PROJECT MANAGER</h5>
        <h6>RICHARD TAJI</h6>
      </div>
    </div>
  );
};

export default UserProfile;
