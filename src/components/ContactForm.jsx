import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { addContact, editContact, getContactById } from "../services/localstorage";

const ContactForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [showAlert, setShowAlert] = useState(false);

  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal: ""
    // latitude: "",
    // longitude: ""
  });

  useEffect(() => {
    if (id) {
      const contact = getContactById(id);
      setForm(contact);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editContact(id, inputValues) : addContact(inputValues);
    setShowAlert(true);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div>

      <div className="d-flex my-5 justify-content-between">
        <h3>{id ? "Edit" : "Create"} Contact</h3>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back
        </button>
      </div>

      {
        showAlert && (
          <div className="px-5">
            <div className="alert alert-success" role="alert">
              Done. Please wait...
              <div className="spinner-border spinner-border-sm" role="status" style={{marginLeft:"15px"}}>
                  <span className="sr-only"></span>
              </div>
            </div>
          </div>
        )}

      {/* // Form */}
      <div className="card bg-light p-2 p-md-5 m-2 my-4 m-md-5">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="firstname" className="form-label mt-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={inputValues.firstname}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="lastname" className="form-label mt-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={inputValues.lastname}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="email" className="form-label mt-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label mt-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={inputValues.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="address" className="form-label mt-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={inputValues.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="city" className="form-label mt-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={inputValues.city}
                    onChange={handleInputChange}
                    placeholder="Enter City Name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="state" className="form-label mt-2">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={inputValues.state}
                    onChange={handleInputChange}
                    placeholder="Enter State"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="country" className="form-label mt-2">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={inputValues.country}
                    onChange={handleInputChange}
                    placeholder="Enter Country"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="postal" className="form-label mt-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postal"
                    name="postal"
                    value={inputValues.postal}
                    onChange={handleInputChange}
                    placeholder="Enter Postal Code"
                    required
                  />
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="latitude" className="form-label mt-2">
                    Latitude
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="latitude"
                    name="latitude"
                    value={inputValues.latitude}
                    onChange={handleInputChange}
                    placeholder="Enter Latitude"
                    
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="longitude" className="form-label mt-2">
                    Latitude
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="longitude"
                    name="longitude"
                    value={inputValues.longitude}
                    onChange={handleInputChange}
                    placeholder="Enter longitude"
                    
                  />
                </div>
              </div> */}

              <div className="d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-primary px-5">
                  Done
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
