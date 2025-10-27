import { useState } from "react";

export default function BottlePage() {
  const [formData, setFormData] = useState({
    count: 1,
    size: "under24", // "under24" or "24plus"
    type: "regular", // "regular", "wine", "bladder", "pouch"
    used: false,
  });

  const [reward, setReward] = useState(0);

  // Calculate reward based on the formula
  const calculateReward = (data) => {
    let unitPrice = 0;

    // Base price by size
    if (data.size === "under24") {
      unitPrice = 0.05; // 5 cents
    } else {
      unitPrice = 0.1; // 10 cents
    }

    // Special pricing for wine containers
    if (
      data.type === "wine" ||
      data.type === "bladder" ||
      data.type === "pouch"
    ) {
      unitPrice = 0.25; // 25 cents
    }

    return unitPrice * data.count;
  };

  const handleInputChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    setReward(calculateReward(newData));
  };

  const handleSubmit = () => {
    // Create a new entry for localStorage
    const entry = {
      id: Date.now(), // Unique identifier
      date: new Date().toISOString(),
      dateFormatted: new Date().toLocaleDateString(),
      timeFormatted: new Date().toLocaleTimeString(),
      count: formData.count,
      size: formData.size,
      type: formData.type,
      used: formData.used,
      reward: reward,
      unitPrice:
        formData.type === "wine" ||
        formData.type === "bladder" ||
        formData.type === "pouch"
          ? 0.25
          : formData.size === "under24"
          ? 0.05
          : 0.1,
    };

    // Get existing entries from localStorage
    const existingEntries = JSON.parse(
      localStorage.getItem("bottleEntries") || "[]"
    );

    // Add new entry to the beginning of the array (most recent first)
    const updatedEntries = [entry, ...existingEntries];

    // Store back to localStorage
    localStorage.setItem("bottleEntries", JSON.stringify(updatedEntries));

    alert(
      `Added ${formData.count} bottles for $${reward.toFixed(
        2
      )} reward!\nEntry saved to your collection.`
    );

    // Reset form
    setFormData({
      count: 1,
      size: "under24",
      type: "regular",
      used: false,
    });
    setReward(0);
  };

  return (
    <div className="bottle-form-container">
      <div className="bottle-form-header">
        <h1>🫙 Bottle Recycling Calculator</h1>
        <p>Enter your bottle details to calculate your recycling reward</p>
      </div>

      <div className="bottle-form">
        {/* Bottle Count */}
        <div className="form-section">
          <label className="form-label">How many bottles?</label>
          <div className="count-selector">
            <button
              className="count-btn"
              onClick={() =>
                handleInputChange("count", Math.max(1, formData.count - 1))
              }
            >
              -
            </button>
            <span className="count-display">{formData.count}</span>
            <button
              className="count-btn"
              onClick={() => handleInputChange("count", formData.count + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Bottle Size */}
        <div className="form-section">
          <label className="form-label">Bottle size</label>
          <div className="option-grid">
            <button
              className={`option-btn ${
                formData.size === "under24" ? "selected" : ""
              }`}
              onClick={() => handleInputChange("size", "under24")}
            >
              <span className="option-icon">🥤</span>
              <span>Under 24 oz</span>
              <span className="option-price">5¢ each</span>
            </button>
            <button
              className={`option-btn ${
                formData.size === "24plus" ? "selected" : ""
              }`}
              onClick={() => handleInputChange("size", "24plus")}
            >
              <span className="option-icon">🍺</span>
              <span>24+ oz</span>
              <span className="option-price">10¢ each</span>
            </button>
          </div>
        </div>

        {/* Container Type */}
        <div className="form-section">
          <label className="form-label">Container type</label>
          <div className="option-grid type-grid">
            <button
              className={`option-btn ${
                formData.type === "regular" ? "selected" : ""
              }`}
              onClick={() => handleInputChange("type", "regular")}
            >
              <span className="option-icon">🍼</span>
              <span>Regular Bottle</span>
            </button>
            <button
              className={`option-btn ${
                formData.type === "wine" ? "selected" : ""
              }`}
              onClick={() => handleInputChange("type", "wine")}
            >
              <span className="option-icon">🍷</span>
              <span>Wine Box</span>
              <span className="option-price">25¢ each</span>
            </button>
            <button
              className={`option-btn ${
                formData.type === "bladder" ? "selected" : ""
              }`}
              onClick={() => handleInputChange("type", "bladder")}
            >
              <span className="option-icon">🧃</span>
              <span>Bladder</span>
              <span className="option-price">25¢ each</span>
            </button>
            <button
              className={`option-btn ${
                formData.type === "pouch" ? "selected" : ""
              }`}
              onClick={() => handleInputChange("type", "pouch")}
            >
              <span className="option-icon">📦</span>
              <span>Pouch</span>
              <span className="option-price">25¢ each</span>
            </button>
          </div>
        </div>

        {/* Used Status */}
        <div className="form-section">
          <label className="form-label">Are these containers used?</label>
          <div className="option-grid">
            <button
              className={`option-btn ${
                formData.used === true ? "selected" : ""
              }`}
              onClick={() => handleInputChange("used", true)}
            >
              <span className="option-icon">✅</span>
              <span>Yes, used</span>
            </button>
            <button
              className={`option-btn ${
                formData.used === false ? "selected" : ""
              }`}
              onClick={() => handleInputChange("used", false)}
            >
              <span className="option-icon">✨</span>
              <span>No, new/clean</span>
            </button>
          </div>
        </div>

        {/* Reward Display */}
        <div className="reward-section">
          <div className="reward-display">
            <span className="reward-label">Your Recycling Reward</span>
            <span className="reward-amount">${reward.toFixed(2)}</span>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
