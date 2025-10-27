export default function MapPage() {
  const handleFindCenters = () => {
    window.open(
      "https://www2.calrecycle.ca.gov/BevContainer/RecyclingCenters",
      "_blank"
    );
  };

  return (
    <div className="location-container">
      {/* Main Content */}
      <div className="location-content">
        {/* Info Card */}
        <div className="info-card">
          <div className="info-content">
            <h2>California Recycling Centers</h2>
            <div>
              Use the official California Department of Resources Recycling and
              Recovery (CalRecycle) website to find certified beverage container
              recycling centers in your area.
            </div>
            <div style={{ marginTop: 20, marginBottom: -10 }}>
              <button className="find-centers-btn" onClick={handleFindCenters}>
                <span className="btn-icon">🔍</span>
                Find Recycling Centers
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="features-section">
          <h3 className="features-title">What you can do:</h3>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">📮</div>
              <div className="feature-text">
                <strong>Enter your ZIP code</strong> to find nearby centers
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📍</div>
              <div className="feature-text">
                <strong>View locations on map</strong> with addresses and
                directions
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">⏰</div>
              <div className="feature-text">
                <strong>Check operating hours</strong> and contact information
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <div className="feature-text">
                <strong>Find current redemption rates</strong> for different
                container types
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <div className="feature-text">
                <strong>Verify certified centers</strong> that accept beverage
                containers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
