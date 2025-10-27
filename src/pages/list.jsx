import { useState, useEffect } from "react";

export default function ListPage() {
  const [entries, setEntries] = useState([]);
  const [totalReward, setTotalReward] = useState(0);

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadEntries = () => {
      const storedEntries = JSON.parse(
        localStorage.getItem("bottleEntries") || "[]"
      );
      setEntries(storedEntries);

      // Calculate total reward
      const total = storedEntries.reduce((sum, entry) => sum + entry.reward, 0);
      setTotalReward(total);
    };

    loadEntries();

    // Listen for storage changes (when new entries are added)
    const handleStorageChange = () => {
      loadEntries();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Get display text for container types
  const getTypeDisplay = (type) => {
    const types = {
      regular: "🍼 Regular Bottle",
      wine: "🍷 Wine Box",
      bladder: "🧃 Bladder",
      pouch: "📦 Pouch",
    };
    return types[type] || type;
  };

  // Get display text for size
  const getSizeDisplay = (size) => {
    return size === "under24" ? "🥤 Under 24oz" : "🍺 24+ oz";
  };

  // Delete single entry
  const deleteEntry = (id) => {
    if (window.confirm("Delete this entry?")) {
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      localStorage.setItem("bottleEntries", JSON.stringify(updatedEntries));
      setEntries(updatedEntries);
      const total = updatedEntries.reduce(
        (sum, entry) => sum + entry.reward,
        0
      );
      setTotalReward(total);
    }
  };

  return (
    <div className="list-container">
      {/* Header */}
      <div className="list-header">
        <h1>📋 Recycling History</h1>
        <div className="total-display">
          <span className="total-label">Total Earned</span>
          <span className="total-amount">${totalReward.toFixed(2)}</span>
        </div>
      </div>

      {/* Entries List */}
      <div className="entries-list">
        {entries.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🍼</span>
            <h3>No recycling entries yet</h3>
            <p>Start adding bottles to see your recycling history here!</p>
          </div>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="entry-row">
              <div className="entry-info">
                <span className="entry-date-compact">
                  {entry.dateFormatted}
                </span>
                <span className="entry-details-compact">
                  {entry.count}x{" "}
                  {getSizeDisplay(entry.size)
                    .replace("🥤 ", "")
                    .replace("🍺 ", "")}
                  {" - "}
                  {getTypeDisplay(entry.type)}
                </span>
              </div>
              <div className="entry-reward-compact">
                ${entry.reward.toFixed(2)}
              </div>
              <button
                className="delete-btn-compact"
                onClick={() => deleteEntry(entry.id)}
                title="Delete this entry"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
