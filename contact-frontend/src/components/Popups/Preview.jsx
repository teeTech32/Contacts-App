import DeletIcon from "../ReactIcons/DeleteIcon"
import { useContext } from "react"
import contactContext from "../../contexts/ContactContext"
import DeleteCaution from "./DeleteCaution"

function Preview({ contact: { first_name, last_name, mobile_no, state_name, id, }}){
  const {popupProfile, onEditform, deleteContact } = useContext(contactContext)

  return <div class="compact side card bg-base-100 bg-pink-200 hover:bg-blue-200 shadow-xl hover:text-white">
            <div class="absolute flex inline-flex right-0 p-2 font-bold ">
              <div onClick={()=>onEditform(id)}  class="inline text-xl hover:bg-green-500 pr-2 cursor-pointer">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"></path></svg>
              </div>
              <DeletIcon onClick={()=>deleteContact(id)} class="align-middle text-xl hover:bg-red-500 cursor-pointer"/>
            </div>
            <DeleteCaution id={id}/>
            <div class="absolute top-0 left-0  pl-2">
              <div class="text-sm text-black-800 font-bold cursor-pointer">
                ID: {id}
              </div>
            </div>
            <button onClick={() => popupProfile(id)}>
              <div class="card-body flex-row items-center space-x-4">
                <div>
                  <div class="avatar">
                    <div class="rounded-full shadow-xl w-14 h-14 ">
                      <img src={state_name} alt="ProfileImage"/>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="card-title">{first_name} {last_name}</h2>
                  <div className="text-base-content text-opacity-80">
                  {mobile_no}
                  </div>
                </div>
              </div>
            </button>
          </div>
        
        
}
export default Preview