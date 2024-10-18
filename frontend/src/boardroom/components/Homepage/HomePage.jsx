import './HomePage.scss';
import Metrics from '../../components/metrics/Metrics';  
import Overview from '../../components/overview/Overview'; 
import Reports from '../../components/reports/Reports';
import Charts from '../../components/charts/Charts';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="dashboard-components">
        <Metrics />
        <Overview />
        <Reports />
        <Charts />
      </div>
    </div>
  );
};

export default HomePage;
