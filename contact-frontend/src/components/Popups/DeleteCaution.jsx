import { useContext } from "react"
import contactContext from "../../contexts/ContactContext"
import Modal from "react-modal"
import DeletIcon from "../ReactIcons/DeleteIcon"
import api from "../../api"
import {toast}  from "react-toastify"

function DeleteCaution({id}){

  const { removeContact, setRemoveContact, fetchContacts } = useContext(contactContext)
  
  const comfirmDelete = async(id) => {
    await api.delete(`/contact/${id}`)
    toast.success('Successfully deleted')
    fetchContacts()
  }

  const cancilDelete = ()=>{
    setRemoveContact(false)
  }

 

  const closeDeleteModal = ()=>{
    setRemoveContact(false)
  }

return<Modal isOpen={removeContact}>
        <div class="p-5 flex justify-center">
          <div class="p-5 container relative hover:text-white h-40 w-56 bg-pink-200 rounded-t-3xl rounded-bl-3xl hover:bg-blue-400 shadow-xl">
           <DeletIcon onClick={closeDeleteModal} class="absolute text-2xl font-bold top-1 right-1 hover:bg-red-600 rounded-tr-xl cursor-pointer" />
            <div class="text-black-800 font-bold text-xl">
              <h1 class="mb-2 ">
                Do you really want to delete this contact?
              </h1>
              <div class="inline-flex gap-11 mb-0">
                <div class="inline">
            <button onClick={cancilDelete} class="pr-4 pl-4 btn btn-sm bg-green-500 hover:bg-green-700 rounded-md shadow-2xl">
                    Cancil
                  </button>
                </div>
                <div class="align-middle">
                  <button onClick={()=>comfirmDelete(id)} class=" pr-1 pl-1 btn btn-sm bg-red-500 rounded-md hover:bg-red-700 shadow-2xl">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
}
export default DeleteCaution