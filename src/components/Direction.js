import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
const location={
        lat: 24.012856,
        lng: 89.259056
};
const Direction = () => {
    const [response,setResponse]=useState[null];
    const directionsCallback=res=>{
        if(res!=null){
            setResponse(res);
        }
    }
    return (
       
        <div>
             <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
             >
            <GoogleMap
            // required
            id='direction-example'
            // required
            mapContainerStyle={{
              height: '100vh',
              width: '100%'
            }}
            // required
            zoom={14}
            // required
            center={location}
            
          >
            
                <DirectionsService
                  // required
                  options={{ 
                    destination: 'Dhaka',
                    origin: 'pabna',
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={directionsCallback}
                  
                />
             

            {
              response !== null && (
                <DirectionsRenderer
                  // required
                  options={{ 
                    directions: response
                  }}
                  
                />
              )
            }
          </GoogleMap>
          </LoadScript>
        </div>
        
    );
};

export default Direction;