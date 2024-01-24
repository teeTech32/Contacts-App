import { createContext, useState } from "react";
import api from '../api'

const contactContext = createContext()

export const ContactProvider = ({children}) =>{
  const [addform, setAddform] = useState(false)
  const [viewContacts, setViewContacts] = useState(false)
  const [viewProfile, setViewProfile] = useState(false)
  const [addedit, setAddedit] = useState(false)
  const [editId, setEditId] = useState()
  const [handleRemoveContact, setHandleRemoveContact] = useState(false)
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({})
  const [removeContact, setRemoveContact] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_no: '',
    country_name: '',
    state_name: '',
  })
  const [editData, setEditData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_no: '',
    country_name: '',
    state_name: '',
  })

  const fetchContacts = async() => {
    const response = await api.get("/contacts/")
    setContacts(response.data)  
  }

  const fetchSingle = async (getbyId) => {
    const response = await api.get(`/contact/${getbyId}?`)
    setContact(response.data)
  }

  const popupProfile = async(id) => {
    const response = await api.get(`/contact/${id}?`)
    setContact(response.data)
    setViewProfile(true)
  }

  const onEditform = async (id) => {
    setAddedit(true)
    const response = await api.get(`/contact/${id}?`)
    const edit = response.data
    setEditId(edit.id)
    setEditData({
      first_name: edit.first_name ,
      last_name: edit.last_name,
      email: edit.email,
      mobile_no: edit.mobile_no,
      country_name: edit.country_name,
      state_name: edit.state_name,
      photo_url: edit.photo_url
    })  
  }

  const deleteContact = ()=>{
    setRemoveContact(true)  
  }
 
  return <contactContext.Provider value={{
              addform,
              addedit,
              contacts,
              contact,
              viewContacts,
              viewProfile,
              removeContact,
              handleRemoveContact,
              formData, 
              editData,
              editId,  
              setEditData, 
              setFormData, 
              setViewContacts,
              setViewProfile,
              setAddform,
              setAddedit,
              onEditform,
              setRemoveContact,
              setHandleRemoveContact,
              fetchContacts,
              fetchSingle,
              popupProfile,
              deleteContact,
            }}>
            {children}
         </contactContext.Provider>

}

export default contactContext