import { useContext } from "react";
import contactContext from "../../contexts/ContactContext";
import PopButton from "./PopButton";
import ContactForm from "../Popups/ContactForm";

function Home(){
  const {addform} = useContext(contactContext)

 
  return addform ? <ContactForm />:<PopButton/> 

}
export default Home