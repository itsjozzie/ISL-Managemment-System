import './BoardroomPage.scss';

const BoardroomPage = () => {
  return (
    <div className="boardroom-page">
      <h1>Boardroom Page</h1>
      <div className="boardroom-details">
        <div className="details-card">
          <h3>Boardroom A</h3>
          <p>Capacity: 10 people</p>
          <p>Available: Yes</p>
        </div>
        <div className="details-card">
          <h3>Boardroom B</h3>
          <p>Capacity: 15 people</p>
          <p>Available: No</p>
        </div>
      </div>
    </div>
  );
};

export default BoardroomPage;
