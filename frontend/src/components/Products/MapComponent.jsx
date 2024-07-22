import React, { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Map container style
const containerStyle = {
    width: '100%',
    height: '650px',
};

// Center of the map
const center = {
    lat: 33.6844,  // Latitude for Islamabad
    lng: 73.0479   // Longitude for Islamabad
};

const MapComponent = ({ onMapEnd }) => {
    // Callback function for map idle event
    const onIdle = useCallback(() => {
        if (onMapEnd) {
            onMapEnd();
        }
    }, [onMapEnd]);

    return (
        <LoadScript googleMapsApiKey={process.env.AIzaSyAQ8D8xWDAsWbJ2_hcSKvoMyMExWkYMOp0}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onIdle={onIdle}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
