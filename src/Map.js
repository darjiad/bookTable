import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import './Map.css';

const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

 function CurrentLoaction() {
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
  
  }

  useEffect(() => {
    if (latitude && longitude) {
      const reverseGeocode = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const { display_name } = data;
          setAddress(display_name);
        } catch (error) {
          console.error('Error retrieving address:', error);
          setAddress(null);
        }
      };

      reverseGeocode();
    }
  }, [latitude, longitude]);

  if (error) {
    return <p>{error}</p>;
  }

  const handleMarkerClick = () => {
    if (address) {
      alert(`Your address: ${address}`);
    } else {
      alert('Fetching address...');
    }
  };

  return (
    <>
    <div>
      <button style={{backgroundColor:"black",color:"white",fontSize:"16px",padding:"5px"}} onClick={CurrentLoaction}>CurrentLocation</button>
    </div>
    <div>Location is :{address}</div>
    <div className="map-container">
      {latitude && longitude ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={19}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[latitude, longitude]}
            icon={customMarkerIcon}
            eventHandlers={{
              click: handleMarkerClick,
            }}
            
          />
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>

    </>
  );
};

export default Map;

