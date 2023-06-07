// import React from 'react'
// import { useEffect } from 'react'

// function Location() {
//     useEffect(
//         ()=>{
//         // if ("geolocation" in navigator) {
//         //     console.log("Available");
//         //   } else {
//         //     console.log("Not Available");
//         //   }
//         // }
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log("Latitude is :", position.coords.latitude);
//             console.log("Longitude is :", position.coords.longitude);
//           });
//           navigator.geolocation.getCurrentPosition(
//             function(position) {
//                 console.log(position);
//               },
//               function(error) {
//                 console.error("Error Code = " + error.code + " - " + error.message);
//               });
//         }
//     ,[])
//   return (
//     <div>Location</div>
//   )
// }

// export default Location
// import React from 'react';
// import Geolocation from 'react-geolocation';
// const Location = () => {
  
//   const handlePosition = (position) => {
//     const { latitude, longitude } = position.coords;
  
//     fetch(
//       `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&addressdetails=1`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const { address } = data;
//         const area = address.neighbourhood || address.suburb || '';
//         const pincode = address.postcode || '';
        
//         console.log('Current Area:', area);
//         console.log('Pin Code:', pincode);
//       })
//       .catch((error) => {
//         console.error('Error fetching address:', error);
//       });
//   };
  
  
//   return (
//     <Geolocation
//       onSuccess={handlePosition}
//       render={({ fetchingPosition, position, error }) => {
//         if (fetchingPosition) {
//           return <div>Fetching position...</div>;
//         }

//         if (position) {
//           return <div>Position obtained!</div>;
//         }

//         if (error) {
//           return <div>Error: {error.message}</div>;
//         }

//         return null;
//       }}
//     />
//   );
// };
// export default Location;

import React from 'react'
import { geocode } from 'opencage-api-client';
import Geolocation from 'react-geolocation';
import { useEffect } from 'react';
function Location() {
useEffect(()=>{
  
},[])
const handlePosition = (position) => {
  const { latitude, longitude } = position.coords;
  convertCoordinatesToAddress(latitude,longitude); // Example coordinates for San Francisco
  // Call the reverse geocoding service here
};

async function convertCoordinatesToAddress(latitude, longitude) {
  try {
    const response = await geocode({
      q: `${latitude},${longitude}`,
      key: '927cdd554cc647e7b5385803bacd68b7', // Replace with your OpenCage Geocoder API key
    });

    if (response.status.code === 200) {
      const { formatted } = response.results[0];
      console.log('Address:', formatted);
      // Do something with the address, such as updating state or displaying it in the UI
    } else {
      console.error('Geocoding API request failed:', response.status.message);
    }
  } catch (error) {
    console.error('Error during geocoding:', error);
  }
}

  return (
    <div>
      <Geolocation
      onSuccess={handlePosition}
      render={({ fetchingPosition, position, error }) => {
        if (fetchingPosition) {
          return <div>Fetching position...</div>;
        }

        if (position) {
          return <div>Position obtained!</div>;
        }

        if (error) {
          return <div>Error: {error.message}</div>;
        }

        return null;
      }}
    />
    </div>
  )
}

export default Location

