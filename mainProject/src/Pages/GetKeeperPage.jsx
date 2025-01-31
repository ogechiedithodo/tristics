import React, { useEffect, useState } from 'react'
import "../Styles/GetKeeper.css"
import  "./Table"
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';


const employeeData = [

  {
    Name:"Agu Chukwuebuake",
    position: "Staff",
    Id: "001",
    Email: "geraldpo@gmail.com",
    img:""
  },
  {
    Name:"Agu Ezekiel",
    position: "Staff",
    Id: "002",
    Email: "geraldpop@gmail.com",
    img:""
  },
  {
    Name:"Odo Edith",
    position: "Staff",
    Id: "003",
    Email: "odoedith@gmail.com",
    img:""
  },
  {
    Name:"Emma zyko",
    position: "Staff",
    Id: "004",
    Email: "emmayo@gmail.com",
    img:""
  },
  {
    Name:"Antony Aimudu",
    position: "Staff",
    Id: "005",
    Email: "aguka@gmail.com",
    img:""
  },
  {
    Name:"peace Agu",
    position: "Staff",
    Id: "006",
    Email: "peaceagu@gmail.com",
    img:""
  },
  {
    Name:"Mercy Nnadi",
    position: "Staff",
    Id: "007",
    Email: "mercadi@gmail.com",
    img:""
  },
  {
    Name:"Destiny Ona",
    position: "Staff",
    Id: "008",
    Email: "destiny@gmail.com",
    img:""
  },
  {
    Name:"Osuji Wisdom",
    position: "Staff",
    Id: "009",
    Email: "widom@gmail.com",
    img:""
  },
  {
    Name:"Ekah Davidson",
    position: "Staff",
    Id: "010",
    Email: "davion@gmail.com",
    img:""
  },
  {
    Name:"Richeal Nnamdi",
    position: "Staff",
    Id: "011",
    Email: "nnamdi@gmail.com",
    img:""
  },
  {
    Name:"Richeal Okafor",
    position: "Staff",
    Id: "012",
    Email: "okafor@gmail.com",
    img:""
    },
  ]

const GetKeeperPage = () => {
  const [addId, setaddId] = useState([])
  const [text, setText] = useState("")
  const [userId, setUserId] = useState("")
  console.log(userId)

function handleChange (event){
  setText(event.target.value)
}
const nav = useNavigate() 	
function handleCheckIn () {
  if(!userId) return alert("Please select a User")
    
  setaddId([...addId,text])
  // employeeData(setaddId)
  nav(`/table/${userId}`)
}
    

  return (
    <div className='GateKepperMain'>
        <div className='imgDiv'>
        <img src="" alt="" className='img' />
        <div className='KeeperHolde'>
            <div className='top'></div>
            <div className='input1'>
              <select name="" id="" value={userId} onChange={(e)=>setUserId(e.target.value)}>
                <option >Select an employee</option>
                {
                  employeeData.map((item,index)=>(
                    <option value={item.Id} key={index} onChange={setText}>{item.Name}</option>
                  ))
                }
              </select>
                {/* <input type="text" placeholder='Enter Email...' className='inputId' value={text} onChange={handleChange} /> */}
             
                <button className='btn' onClick={handleCheckIn} props={employeeData}><h4>Check-In</h4></button>
                
                
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default GetKeeperPage