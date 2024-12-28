import React, { useState, useEffect } from "react";
import "./styles/loading.css"

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., API call)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loading screen visible for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="app-content">
          <h1>Welcome to the App!</h1>
          <p>This is the main content.</p>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
