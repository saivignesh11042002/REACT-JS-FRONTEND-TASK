import React,{Component} from "react";
import L from 'leaflet'

import countries from './../data/countries.json'
import { MapContainer,GeoJSON,TileLayer,Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
delete L.Icon.Default.prototype_getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl : require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl : require('leaflet/dist/images/marker-icon.png'),
    shadowUrl : null
});

class Mymap extends Component {
    state = {  } 
    componentDidMount(){
        console.log(countries)

    }
    onEachCountry=(country,layer)=>{
        const countryval=country.properties.ADMIN;
        const val=country.properties.Data;
        console.log(countryval);
        
        layer.bindPopup(countryval + " Data : " + val );
    }
    render() { 
        const mapstyle={
            fillColor:"white",
            color:"black",
            weight:1,
            fillOpacity:1,
        };
        return (
            <div>
                <h1 style={{textAlign:"center"}}>My Map</h1>
                <MapContainer style={{height:"80vh"}} zoom={2} center={[20, 100]}><GeoJSON style={mapstyle} data={countries.features} onEachFeature={this.onEachCountry}></GeoJSON>
               
                
                    </MapContainer>
            </div>
        );
    }
}
 
export default Mymap;