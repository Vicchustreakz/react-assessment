import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ContactList from "./components/ContactList"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create-form" element={<ContactForm />} />
          <Route path="/edit-form/:id" element={<ContactForm />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App