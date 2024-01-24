import MegaNavbar  from "./components/Layouts/MegaNavbar";
import { ContactProvider } from "./contexts/ContactContext";
import Home from "./components/Layouts/Home";
import ContactPreview from "./components/Popups/ContactPreview";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./components/Popups/Profile";
import EditingForm from "./components/Popups/EditingForm";
import DeleteCaution from "./components/Popups/DeleteCaution";
import Footer from "./components/Layouts/Footer";
function App() {
  return <>
          <ContactProvider>
            <MegaNavbar />
            <Home />
            <ContactPreview />
            <Profile />
            <EditingForm/>
            <DeleteCaution />
            <Footer/>
          </ContactProvider>
          <ToastContainer/>
        </>
    
  
  
}

export default App;
