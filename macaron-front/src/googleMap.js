import React from 'react'
import { 
    GoogleMap, useLoadScript, 
    Marker, InfoWindow
} from '@react-google-maps/api';
import mapStyle from './mapStyle';
import test from './test';
import filming from './filming';



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

export default function MyGoogleMap() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });

    // MARKER
    const [activeMarker, setActiveMarker] = React.useState(null);
    const markers = [];
    
    for (let i = 0, length = 25; i < length; i++) {
        var data = filming[i];
        let newMarker ={ 
            id: i,
            nom_tournage: data.properties.nom_tournage,
            nom_realisateur: data.properties.nom_realisateur ,
            adresse_lieu: data.properties.adresse_lieu ,
            date_debut: data.properties.date_debut,
            date_fin: data.properties.date_fin,
            type_tournage: data.properties.type_tournage,
            nom_producteur: data.properties.nom_producteur,
            position: {
                lat: data.geometry.coordinates[1],
                lng: data.geometry.coordinates[0]
            }
            }
        markers.push(newMarker);     
    }

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
    };

    // MAP
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
        
    }, []);
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps...";

    return ( 
        <div>
            <div>
                <h1>FOCUS <span role="img" aria-label='camera'>🎥</span></h1>
                <select>
                    <option value="">Choisir un arrondissement</option>
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                </select>
            </div>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle} 
                zoom={13} 
                center={center}
                options={options}
                onLoad={onMapLoad}
                onClick={() => setActiveMarker(null)}
            >
                {markers.map(({
                    id, 
                    nom_tournage, 
                    nom_realisateur,
                    adresse_lieu,
                    date_debut,
                    date_fin,
                    type_tournage,
                    nom_producteur,
                    position
                }) => (
                    <Marker
                        key= {id}
                        position={position}
                        onClick={() => handleActiveMarker(id)}
                        icon={{
                            url: "/movie-camera-microsoft.png",
                            scaledSize: new window.google.maps.Size(30,30),
                        }}
                    >
                        {activeMarker === id ? (
                            <InfoWindow
                                onCloseClick={() => 
                                    setActiveMarker(null)
                                }
                            >
                                <div>
                                    <h2>
                                        {nom_tournage}
                                    </h2>
                                    <ul>
                                        <li>réalisateur : {nom_realisateur}</li>
                                        <li>lieu de tournage : {adresse_lieu}</li>
                                        <li>du {date_debut} au {date_fin} </li>
                                        <li>tyde de tournage : {type_tournage}</li>
                                        <li>produit par : {nom_producteur}</li>
                                    </ul>
                                    
                                </div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}
            </GoogleMap>
        </div>
    )
}