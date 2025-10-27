import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [totalEntries, setTotalEntries] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [recentEntries, setRecentEntries] = useState([]);

  // Load stats from localStorage
  useEffect(() => {
    const loadStats = () => {
      const storedEntries = JSON.parse(
        localStorage.getItem("bottleEntries") || "[]"
      );
      setTotalEntries(storedEntries.length);

      const total = storedEntries.reduce((sum, entry) => sum + entry.reward, 0);
      setTotalReward(total);

      // Get last 3 entries for recent activity
      setRecentEntries(storedEntries.slice(0, 3));
    };

    loadStats();

    // Listen for storage changes
    const handleStorageChange = () => {
      loadStats();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-content">
          <div className="hero-icon">♻️</div>
          <h1 className="hero-title">EcoBottle</h1>
          <p className="hero-subtitle">Collect · Track · Recycle</p>
          <p className="hero-description">
            Track your bottle recycling and earn rewards while helping the
            environment
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-number">{totalEntries}</div>
            <div className="stat-label">Bottles Recycled</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <div className="stat-number">${totalReward.toFixed(2)}</div>
            <div className="stat-label">Total Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
}
