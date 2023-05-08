import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
//API
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  const [warning, setWarning] = useState("");
  //second API
  const [second, setSecond] = useState("");

  const getWarnings = () => {
    axios
      .get("https://environment.data.gov.uk/flood-monitoring/id/floods")
      .then((res) => {
        const newAlert = res.data.items;
        setWarning(newAlert);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(warning);
  //function

  const getLocations = () => {
    axios
      .get("https://environment.data.gov.uk/flood-monitoring/id/floodAreas")
      .then((resp) => {
        const newLoc = resp.data.items;
        setSecond(newLoc);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getLocations();
    getWarnings();
  }, []);

  return (
    <div>

      <MapContainer
        center={[52.90330510839568, -1.1862272800848968]}
        zoom={7}
        scrollWheelZoom={true}
        style={{
          height: "90vh",
          width: "100vw",
          top: "10px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {warning &&
          second &&
          warning.map((warningItem) => {
            const locationItem = second.find(
              (loc) => loc.fwdCode === warningItem.floodAreaID
            );
            if (locationItem) {
              return (
                <Marker




                  key={locationItem.fwdCode}
                  position={[locationItem.lat, locationItem.long]}
                  icon={
                    new Icon({
                      iconUrl: markerIconPng,
                      iconSize: [30, 45],
                      iconAnchor: [12, 41],
                    })
                  }
                >

                  <Popup>{warningItem.message}  </Popup>

                </Marker>
              );
            }
            return null;
          })}


      </MapContainer>
    </div>
  );
}

export default Main;
