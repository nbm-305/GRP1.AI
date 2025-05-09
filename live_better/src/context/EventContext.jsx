import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [aqiAlerts, setAqiAlerts] = useState([]);

  const triggerEmailAlert = async (location, aqiLevel) => {
    console.log("Triggering email alert:", { location, aqiLevel, currentUser });
    if (!currentUser?.email) {
      console.warn("No user email available for alert");
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5001/api/send-aqi-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: currentUser.email,
          locationName: location.name,
          aqi: aqiLevel,
          coordinates: location.coords
        })
      });
      
      if (response.ok) {
        console.log("Email alert sent successfully!");
        setAqiAlerts(prev => [...prev, {
          location,
          aqi: aqiLevel,
          timestamp: new Date().toISOString()
        }]);
      } else {
        console.error("Email alert API returned error:", response.status);
      }
    } catch (error) {
      console.error('Email alert failed:', error);
    }
  };

  // Provide both the state and functions to children
  return (
    <EventContext.Provider value={{ aqiAlerts, triggerEmailAlert }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);