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
    contacts.push({id: uuid(),...contact});
    localStorage["@contacts"] = JSON.stringify(contacts);
}

export const editContact = (id, newContact) => {
    let contacts = getListContacts();
    contacts = contacts.filter(contact => contact.id !== id);
    contacts.push(newContact);
    localStorage["@contacts"] = JSON.stringify(contacts);
}

export const deleteContact = (id, newContact) => {
    let contacts = getListContacts();
    contacts = contacts.filter(contact => contact.id !== id);
    localStorage["@contacts"] = JSON.stringify(contacts);
}
