import './Metrics.scss';

const Metrics = () => {
  return (
    <div className="metrics">
      <h2>Metrics Overview</h2>
      <div className="metrics-cards">
        <div className="metric-card">
          <h3>Total Bookings</h3>
          <p>150</p>
        </div>
        <div className="metric-card">
          <h3>Active Users</h3>
          <p>300</p>
        </div>
        <div className="metric-card">
          <h3>Feedback Ratings</h3>
          <p>4.5/5</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
