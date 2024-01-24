import { useContext } from "react"
import contactContext from "../../contexts/ContactContext"
import Preview from "./Preview"
import Modal from "react-modal"
import DeletIcon from "../ReactIcons/DeleteIcon"
function ContactPreview(){
  const{contacts, viewContacts, setViewContacts,}=useContext(contactContext)

  const closeContacts = (e)=>{
    e.preventDefault()
    setViewContacts(false)
  }

  return <Modal isOpen={viewContacts}>
           <div class="container border-pink-300 border-8 shadow-2xl rounded-xl">
              <DeletIcon class="text-xl right-0 top-0 hover:bg-red-500 cursor-pointer" onClick={closeContacts} />
              <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5">
                {contacts.map((contact) => (
                  <Preview key={contact.id} contact={contact} />
                ))}
              </div>
            </div>
          </Modal>
}
export default ContactPreview