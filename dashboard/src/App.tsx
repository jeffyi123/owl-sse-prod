import { useState, useEffect } from 'react'
import { fetchPortfolio, fetchAlerts } from './api-services'
import AllocationPieChart from './components/PieChart';
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
        <button className="topNav__notification" aria-label="Notifications">
          🔔
        </button>
      </header>

      <section id="center">
        <div>
          <h1>OWL Fund Intelligence</h1>
        </div>
      </section>

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
