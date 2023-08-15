import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ContactItem from "./ContactItem";
import { getListContacts } from "../services/localstorage";
import "../index.css"; 
import "leaflet/dist/leaflet.css"

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [sortingOption, setSortingOption] = useState("");

  useEffect(() => {
    setContacts(getListContacts());
  }, []);

  const sortAlphabetically = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const firstNameA = a.firstname || ""; // Handle undefined or null values
      const firstNameB = b.firstname || "";
      return firstNameA.localeCompare(firstNameB);
    });
    setContacts(sortedContacts);
    setSortingOption("alphabetical");
  };

  const sortReverseAlphabetically = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const firstNameA = a.firstname || "";
      const firstNameB = b.firstname || "";
      return firstNameB.localeCompare(firstNameA);
    });
    setContacts(sortedContacts);
    setSortingOption("reverseAlphabetical");
  };

  const markerIcon = new L.icon({
    iconUrl: require("../Icons/location.png"),
    iconSize:[35,35],
    iconAnchor: [16, 32],
  })

  // const position = [10.4300, 79.3200];

  return (
    <div>
      <h1 className="my-5 text-center">Contacts List</h1>

      {contacts.length > 0 ? (
        <div className="text-center mb-3">
        <button
          className="btn btn-primary m-2"
          onClick={sortReverseAlphabetically}
        >
          A-Z ↓
        </button>
        <button className="btn btn-primary m-2" onClick={sortAlphabetically}>
          Z-A ↑
        </button>
      </div>
      ): " "}
      

      {contacts.length > 0 ? (
        <div className="card bg-secondary py-3 mb-5 overflow">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Postal Code</th>
                {/* <th>Latitude</th>
                <th>Longitude</th> */}
                <th></th>
              </tr>
            </thead>

            <tbody>
              {contacts.reverse().map((contact) => (
                <ContactItem
                  contact={contact}
                  key={contact.id}
                  setContacts={setContacts}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No Contacts</h3>
      )}
        
        {contacts.length > 0 ? (
          <div style={{width:"100%", height:"100vh"}} className="container-fluid mb-5 card bg-light">
        
      <MapContainer center={[20.937424, 77.779549]} zoom={5} style={{ height: "100%", width:'100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {contacts.map((contact) => (
          <Marker
            key={contact.id}
            position={[contact.latitude, contact.longitude]}
            icon={markerIcon}
          >
            <Popup>
              {contact.firstname} {contact.lastname}
              <br />
              {contact.city}, {contact.country}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      </div>
        ): <h5 className="text-center mt-4 mb-4">Nothing To Show</h5>}
    </div>
  );
};

export default ContactList;
