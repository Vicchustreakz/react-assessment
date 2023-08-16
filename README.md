dependencies need to install

npm install react react-router-dom react-uuid react-leaflet leaflet bootstrap

Test Data for testing the Application is attached in the folder. 
Test Data for React Assessment.xlsx

Explanation for the solution

App.js 

1. Renders the Navbar component at the top, followed by a container wrapping the Routes component.
2. Inside the Routes component, different routes are defined using the Route component. Depending on the URL, it renders ContactList, ContactForm for creating new contacts, or ContactForm for editing existing contacts.
3. Renders the Footer component at the bottom.

Navbar.jsx

1. Renders the navigation bar at the top of the page.
2. Provides links to navigate to the contact list and the contact creation form.

ContactList.jsx

1. Fetches contacts from local storage using the getListContacts function and displays them in a table format by ContactItem Component.
2. Provides sorting options for the contacts list (A-Z and Z-A).
3. Renders a Leaflet map displaying markers for each contact's location using latitude and longitude.

ContactItem.jsx:

1. Renders a row in the contacts table for each contact item.
2. Allows editing and deleting contacts using buttons with appropriate actions.
3. Used useNavigate hook from react-router-dom for navigation.

ContactForm.jsx:

1. Renders a form for creating or editing a contact.
2. Manages form input state using the useForm custom hook.
3. Fetches contact data by ID from local storage for editing.
4. Handles form submission by adding or editing contacts using the addContact and editContact functions.
5. Displays an alert while processing the form submission.

localstorage.js:

1. Provides functions for interacting with local storage to manage contacts.
2. getListContacts: Retrieves contacts from local storage.
3. getContactById: Retrieves a specific contact by its ID.
4. addContact: Adds a new contact to local storage, including fetching latitude and longitude for the contact's city using the Openstreetmap Nominatim API.
5. editContact: Edits an existing contact in local storage, similar to addContact.
6. deleteContact: Deletes a contact from local storage.

useForm.js:

1. Defines a custom hook useForm for managing form state.
2. Provides functions to handle form input change, reset the form, and set form data.
3. Useful for reusability and keeping form-related logic separate from components.

The Overall process:

The ContactList component displays a list of contacts, allowing sorting and markers on the map.
The Navbar component provides navigation options.
The ContactItem component represents each contact in the list.
The ContactForm component manages contact creation and editing.
The localstorage.js file handles interactions with local storage.


