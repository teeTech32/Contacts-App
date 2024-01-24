import { useContext } from "react";
import contactContext from "../../contexts/ContactContext";
 
function PopButton(){
  const {setAddform } = useContext(contactContext)

const handleForm = ()=>{
  setAddform(true)
}
  return <div class="flex justify-center ">
            <div class="max-w-64  card-body">
              <div class=" bg-pink-200 rounded-t-3xl rounded-bl-3xl shadow-2xl text-base-content mt-5">
              <h2 class="font-bold font-sans text-black hover:text-white text-2xl p-2 item-center flex inline-flex">Hi !, would you like to add more contacts?</h2>
                <button class=" btn btn-sm bg-blue-500 hover:bg-pink-200 hover:text-black rounded-full text-white font-bold m-2" onClick={handleForm}>Add</button>
              </div>
            </div>
         </div>
}
export default PopButton