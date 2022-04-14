import React from 'react'
import { 
    GoogleMap, useLoadScript, 
    Marker, InfoWindow
} from '@react-google-maps/api';
import mapStyle from './mapStyle';
import test from './test';

export default function MyGoogleMap() {

    const libraries = ["places"];
    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    };
    const center = {
        lat: 48.856613,
        lng: 2.352222,
    };
    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: true,
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
        JSON.stringify(test)
        map.data.addGeoJson(test)
        
        map.data.setStyle(() => {
            return {
                fillOpacity: 0,
                strokeColor: "grey",
                strokeWeight: 1,
            }
        })
        console.log(map.data);
    }, []);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    
    return <div>
        <div>
            <h1>Action <span role="img" aria-label='camera'>🎥</span></h1>
            <select>
                <option value="">Choisir un arrondissement</option>
                <option value="1">test1</option>
                <option value="2">test2</option>
            </select>
        </div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle} 
            zoom={13} 
            center={center}
            options={options}
            onLoad={onMapLoad}
        >
        </GoogleMap>
    </div>;
}