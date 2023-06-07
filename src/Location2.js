// import React from 'react';

// const Location2 = () => {
//  function   CurrentLoaction() {
   
       
//         if ('permissions' in navigator) {
//             navigator.permissions.query({ name: 'geolocation' }).then((result) => {
//               if (result.state === 'granted') {
//                 console.log('Location service is enabled.');
//               } else if (result.state === 'denied') {
//                 console.log('Location service is disabled.');
//               }
//             });
//           } else if ('geolocation' in navigator) {
//             console.log('Location service availability cannot be determined.');
//           } else {
//             console.log('Geolocation is not supported in this browser.');
//           }
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             reverseGeocode(latitude, longitude);
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//       } else {
//         console.log('Geolocation is not supported by this browser.');
//       }
//     };

//     const reverseGeocode = async (latitude, longitude) => {
//       try {
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//         );
//         const data = await response.json();
//         console.log(data)
//         const address = data.display_name;
//         alert('Current Address:'+address);
//         // Do something with the address (e.g., update state)
//       } catch (error) {
//         console.error(error);
//       }
    

//     // getCurrentLocation();
//   }

//   return (
    // <div>
    //   <button style={{backgroundColor:"black",color:"white",fontSize:"16px",padding:"5px"}} onClick={CurrentLoaction}>CurrentLocation</button>
    // </div>
//   );
// };

// export default Location2;

// Existing map initialization script
// Make sure this script runs before the React components are mounted
// Initialize the map container with Leaflet

// location-map.js
import React from 'react';
import Map from './Map';

const Location2 = () => {
  return (
    <>
        <Map/>
    </>
  );
};

export default Location2;

