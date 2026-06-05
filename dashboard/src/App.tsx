import { useState, useEffect } from 'react'
import { fetchPortfolio, fetchAlerts } from './api-services'
import AllocationPieChart from './components/PieChart';
import AlertMenu from './components/AlertsMenu';
import './App.css'

function App() {
  const [portfolio, setPortfolio] = useState([]);
  const [alerts, setAlerts] = useState([]);

  async function loadData() {
    const portfolioData = await fetchPortfolio();
    setPortfolio(portfolioData);
    const alertsData = await fetchAlerts();
    setAlerts(alertsData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <header className="topNav">
        <div className="topNav__brand">OWL Fund Intelligence</div>
        <AlertMenu data={alerts} />
      </header>
      <div id="charts">
        <h2>Portfolio Allocation</h2>
        <AllocationPieChart data={portfolio} />
      </div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
