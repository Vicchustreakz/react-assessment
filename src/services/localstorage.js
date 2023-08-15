import uuid from "react-uuid";

export const getListContacts = () => {
    if(!localStorage["@contacts"]) {
        localStorage["@contacts"] = JSON.stringify([])
    }

    let contacts = JSON.parse(localStorage["@contacts"]); 
    return contacts;
}

export const getContactById = (id) => {
    const contacts = getListContacts();
    const contact = contacts.find((contact) => contact.id === id)
    return contact;
}

export const addContact = (contact) => {
    const contacts = getListContacts();
    fetch(`https://nominatim.openstreetmap.org/search?q=${contact.city}&format=json`)
        .then(response => response.json())
        .then(data => {
            const [result] = data;
            if (result) {
                const { lat, lon } = result;
                contacts.push({ id: uuid(), ...contact, latitude: lat, longitude: lon });
                localStorage["@contacts"] = JSON.stringify(contacts);
            } else {
                console.log('City coordinates not found');
            }
        })
        .catch(error => {
            console.error('Error fetching city coordinates:', error);
        });
}

export const editContact = (id, newContact) => {
    let contacts = getListContacts();
    contacts = contacts.filter(contact => contact.id !== id);
    fetch(`https://nominatim.openstreetmap.org/search?q=${newContact.city}&format=json`)
        .then(response => response.json())
        .then(data => {
            const [result] = data;
            if (result) {
                const { lat, lon } = result;
                contacts.push({ id: uuid(), ...newContact, latitude: lat, longitude: lon });
                localStorage["@contacts"] = JSON.stringify(contacts);
            } else {
                console.log('City coordinates not found');
            }
        })
        .catch(error => {
            console.error('Error fetching city coordinates:', error);
        });
}

export const deleteContact = (id, newContact) => {
    let contacts = getListContacts();
    contacts = contacts.filter(contact => contact.id !== id);
    localStorage["@contacts"] = JSON.stringify(contacts);
}
