import './Overview.scss';

const Overview = () => {
  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>This section provides an overview of boardroom usage and analytics.</p>
      <div className="overview-stats">
        <div className="stat-item">
          <h3>Boardrooms Available</h3>
          <p>10</p>
        </div>
        <div className="stat-item">
          <h3>Bookings Today</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
