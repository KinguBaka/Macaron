import React from 'react'
import { 
    GoogleMap, useLoadScript, 
    Marker, InfoWindow 
} from '@react-google-maps/api';
import mapStyle from './mapStyle';

export default function MyGoogleMap() {

    const libraries = ["places"];
    const mapContainerStyle = {
        width: '80vw',
        height: '80vh'
    };
    const center = {
        lat: 48.856613,
        lng: 2.352222,
    };
    const options = {
        styles: mapStyle,
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


    return <div>
        <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={12} 
            center={center}
            options={options}

        ></GoogleMap>
    </div>;
}