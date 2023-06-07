import React, { useEffect, useState } from 'react';

const LocationTracker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

 function CurrentLocation() {
    if (latitude && longitude) {
      const apiKey = '927cdd554cc647e7b5385803bacd68b7';
      const geocodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

      fetch(geocodingUrl)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            const address = data.results[0].formatted;
            setAddress(address);
          } else {
            setAddress('Address not found.');
          }
        })
        .catch(error => {
          console.error('Error fetching address:', error);
          setAddress('Error fetching address.');
        });
    }
  }

  return (
    <div>
    <button onClick={CurrentLocation}>CurrentLocation</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      )}
      {address && <p>Address: {address}</p>}
    </div>
  );
};

export default LocationTracker;
