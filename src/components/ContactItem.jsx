import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteContact, getListContacts } from '../services/localstorage';

const ContactItem = ({ contact, setContacts }) => {

  const { id, firstname, lastname, email, phone, address, city, state, country, postal } = contact;
  const navigate = useNavigate();

  const removeContact = () => {
    deleteContact(id)
    setContacts(getListContacts())
  }

  return (
    <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{country}</td>
        <td>{postal}</td>
        <td>
            <div className="d-flex gap-3">
                <span role='button' className='badge bg-success' onClick={() => navigate(`/edit-form/${id}`)}>
                    Edit
                </span>
                <span role='button' className='badge bg-danger' onClick={() => removeContact()}>
                    del
                </span>
            </div>
        </td>
    </tr>
  )
}

export default ContactItem