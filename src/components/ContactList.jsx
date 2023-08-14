import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ContactItem from "./ContactItem";
import { getListContacts } from "../services/localstorage";
import "../index.css";

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

  return (
    <div>
      <h1 className="my-5 text-center">Contacts List</h1>

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

      {contacts.length > 0 ? (
        <div className="card bg-secondary py-3 mb-15 overflow">
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

    </div>
  );
};

export default ContactList;
