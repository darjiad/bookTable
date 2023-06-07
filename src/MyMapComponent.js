import React, { useEffect, useRef } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const MyMapComponent = () => {
  const mapElementRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;

        // Initialize the map
        const map = tt.map({
          key: 't5CA8wgCVSJRsAyEdWx9GF5oJNGvd6QM', // Replace with your TomTom API key
          container: mapElementRef.current,
          center: [latitude, longitude],
          zoom: 12,
        });

        // Add a marker at the current location
        const marker = new tt.Marker().setLngLat([longitude, latitude]).addTo(map);
      } catch (error) {
        console.error('Error retrieving the current position:', error);
      }
    };

    loadMap();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by your browser.'));
      }
    });
  };

  return <div ref={mapElementRef} style={{ height: '400px' }} />;
};

export default MyMapComponent;
