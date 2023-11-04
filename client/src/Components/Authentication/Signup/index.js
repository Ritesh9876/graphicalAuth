import React, { useState } from "react";
import './signup.css'
import { useNavigate } from "react-router-dom";

import TextInput from "../../CommonComponents/TextInput";
import NumberInput from "../../CommonComponents/NumberInput";
import Axios from "../../../Api";
import toast, { Toaster }  from 'react-hot-toast';
export default function Signup() {
  const navigate = useNavigate();

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [age,setAge] = useState()
    const [selected,setSelected] = useState([[],[],[],[],[],[],[],[],[],[],[]])
    const images=[
      "https://images.unsplash.com/photo-1606926730770-218d179a690e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1950&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1539651044670-315229da9d2f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1524481905007-ea072534b820?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?auto=format&fit=crop&q=80&w=1936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1628864021318-17265a845a52?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1612739840009-38a1f9516866?auto=format&fit=crop&q=80&w=1834&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

]

    
    const handleFirstNameChange = (index,name,value) =>{
        setFirstName(value)
    }
    const handleLastNameChange = (index,name,value) =>{
        setLastName(value)
    }
    const handleEmailChange= (index,name,value) =>{
        setEmail(value)
    }
    const handleAddressChange= (index,name,value) =>{
        setAddress(value)
    }
    const handleAgeChange = (index,name,value) =>{
        setAge(value)
    }

    const handleSubmit = async  (e) =>{
      e.preventDefault()
      try{
        selected.forEach(currSel =>{ currSel.sort()})
        const response = await Axios.post(`/signup`,{
          firstName,
          lastName,
          email,
          address,
          age,
          password:selected
        });

        if(response.data.success)
          {
            
            toast.success("sign up successfull")
            console.log("successfully sign up")
          }
      }
      catch(error) {
        toast("failed to signup")
        console.log("this is error",error)
      }
    }

  return (
    <div className="Login_Container">
      <Toaster />
      <div className="Login_Wrapper">
        <form 
        //action="#"
        // onSubmit={(e) => onSubmit(e)}
         >
          <div className="Login-main-content">
            <h1>Sign in Form</h1>
            <div>
                <p className="mb-10">First Name </p>
            <TextInput
            value={firstName}
            handleInputChange= {handleFirstNameChange}
            />
            </div>
            <div className="mt-10">
            <p className="mb-10">Last Name </p>
            <TextInput
            value={lastName}
            handleInputChange={handleLastNameChange}
            />
            </div>

            <div className="mt-10">
            <p className="mb-10">Email </p>
            <TextInput
            value={email}
            handleInputChange={handleEmailChange}
            />
            </div>

            <div className="mt-10">
            <p className="mb-10">Address</p>
            <TextInput
            value={address}
            handleInputChange={handleAddressChange}
            />
            </div>

            <div className="mt-10">
            <p className="mb-10">Age </p>
            <NumberInput
            value={age}
            handleInputChange={handleAgeChange}
            />
            </div>

            <div className="d-flex justify-content-center w-80 flex-wrap">

                {images.map((currentImg,imgIndex) =>{

                    return (
                        <div 
                        key={currentImg +imgIndex}
                        style={{
                            backgroundImage: `url(${currentImg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                        className="w-300px h-200px d-flex flex-wrap mt-10 ml-10">  
                        {[...Array(6)].map((currentItem,index) =>{
                            return (
                                <div 
                                key={"box" + index }
                                onClick= {() =>{
                                  let tempSel= [...selected]
                                  let passLen=0;
                                  selected.forEach((currpicSize) =>{
                                    passLen +=currpicSize.length;
                                  })
                                  
                                    let boxIndex= tempSel[imgIndex].findIndex(currBox => currBox===index)

                                    if(passLen>=4 &&  boxIndex === -1) return 
                                    if(boxIndex === -1) tempSel[imgIndex].push(index)
                                    else{
                                      tempSel[imgIndex].splice(boxIndex,1)
                                    }
                                  setSelected(tempSel)
                                }}

                                className={`w-100px h-100px  ${ selected[imgIndex].findIndex(currSel => currSel=== index) !== -1 ? "border-green":"border-black"}`}>

                                </div>
                            )
                        })}
                    </div>
                    )
                })}
            </div>
            <p>
              already have a  account ? <a href="/">Login</a>
            </p>
          </div>

          <div className="footer">
            <button 
            onClick={(e) =>{
              handleSubmit(e)
            }}
            className="login-btn" >
              Signup
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
