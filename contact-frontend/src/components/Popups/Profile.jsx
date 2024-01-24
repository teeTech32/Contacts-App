import { useContext } from "react"
import contactContext from "../../contexts/ContactContext"
import Modal from "react-modal"
import DeletIcon from "../ReactIcons/DeleteIcon"
function Profile(){

  const { contact, viewProfile, setViewProfile } = useContext(contactContext)
  
  const { first_name, last_name, email, mobile_no, country_name, state_name } = contact
  
  const closeProfile = ()=>{
    setViewProfile(false)
  }

  return <Modal isOpen={viewProfile}>
            <div class=" flex justify-center shadow-xl">
              <div class="w-full mx-auto lg:w-10/12">
                <div class="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-8 md:gap-8">
                  <div class="container relative border-8 border-blue-200 hover:border-pink-200 bg-pink-200 hover:bg-blue-200 ">
                    <DeletIcon onClick={closeProfile} class="absolute text-2xl font-bold top-0 right-0 hover:bg-red-600" />
                    <div class="inline-flex">
                      <div class="col-span-2 inline">
                        <div class="gap-5 m-5 font-bold p-2">
                          <div class="pb-2">First_Name : {first_name}  </div>
                          <div class="pb-2">Last_Name : {last_name}</div>
                          <div class="pb-2"> Email_Address : {email}</div>
                          <div class="pb-2"> Mobile_Contact : {mobile_no} </div>
                          <div class="pb-2">Country_Name : {country_name} </div>
                          <div> State_Name : {state_name} </div>
                        </div>
                      </div>
                      <div class="align-middle ">
                        <div class="custom-card-image mb-6 mt-5 md:mb-4">
                          <div class="rounded-lg card image-full ">
                            <figure class="h-60 w-40">
                              <img src={state_name} alt="ProfileImage" />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          

}
export default Profile