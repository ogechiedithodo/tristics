import React, { useEffect, useState } from 'react'
import "../Styles/Table.css"
import { useParams } from 'react-router-dom'



const Table = () => {
  const { id } = useParams()
  console.log(id)



  const employeeData = [

    {
      Name: "Agu Chukwuebuake",
      position: "Staff",
      Id: "001",
      Email: "geraldpo@gmail.com",
      img: ""
    },
    {
      Name: "Agu Ezekiel",
      position: "Staff",
      Id: "002",
      Email: "geraldpop@gmail.com",
      img: ""
    },
    {
      Name: "Odo Edith",
      position: "Staff",
      Id: "003",
      Email: "odoedith@gmail.com",
      img: ""
    },
    {
      Name: "Emma zyko",
      position: "Staff",
      Id: "004",
      Email: "emmayo@gmail.com",
      img: ""
    },
    {
      Name: "Antony Aimudu",
      position: "Staff",
      Id: "005",
      Email: "aguka@gmail.com",
      img: ""
    },
    {
      Name: "peace Agu",
      position: "Staff",
      Id: "006",
      Email: "peaceagu@gmail.com",
      img: ""
    },
    {
      Name: "Mercy Nnadi",
      position: "Staff",
      Id: "007",
      Email: "mercadi@gmail.com",
      img: ""
    },
    {
      Name: "Destiny Ona",
      position: "Staff",
      Id: "008",
      Email: "destiny@gmail.com",
      img: ""
    },
    {
      Name: "Osuji Wisdom",
      position: "Staff",
      Id: "009",
      Email: "widom@gmail.com",
      img: ""
    },
    {
      Name: "Ekah Davidson",
      position: "Staff",
      Id: "010",
      Email: "davion@gmail.com",
      img: ""
    },
    {
      Name: "Richeal Nnamdi",
      position: "Staff",
      Id: "011",
      Email: "nnamdi@gmail.com",
      img: ""
    },
    {
      Name: "Richeal Okafor",
      position: "Staff",
      Id: "012",
      Email: "okafor@gmail.com",
      img: ""
    },
  ]
  const getUser = () => {
    return employeeData.find((item) => item.Id === id)
  }


  const dateCheckIn = new Date().getDate();
  const monthCheckedIn = new Date().getMonth() + 1;
  const yearCheckedIn = new Date().getFullYear();
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  const sec = date.getSeconds()

  const [allEmployees, setAllEmployees] = useState([])
  const [userRecords, setUserRecords] = useState([]);
  const fetchData = async () => {

    const url = "https://dailyattendance.onrender.com/getallattendance";


    fetch(url).then((res) => res.json())
      .then((res) => {

        console.log(res.data),
          setAllEmployees(res.data)
      }
      )
      .catch((error) => console.log(error))
      .finally(() => console.log("Finally settled"));
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userRecords")) || [];
    setUserRecords(storedUsers);
  }, []);

  useEffect(() => {
    const newUser = getUser();
    if (newUser) {
      setUserRecords((prevRecords) => {
        const isUserExists = prevRecords.some((record) => record.Id === newUser.Id);
        const updatedRecords = isUserExists ? prevRecords : [...prevRecords, newUser];
  
        localStorage.setItem("userRecords", JSON.stringify(updatedRecords));
  
        return updatedRecords;
      });
    }
  }, [id]);

  return (
    <div className='TableBody'>
      <div><h1>Tristics</h1></div>
      <table>


        <tr>
          <th>Employee Name</th>
          <th>Emloyee ID</th>
          <th>Email</th>
          <th>Time</th>

          <th>Date</th>
          <th>Attendance Status</th>
        </tr>
        {userRecords.map((e, i) => (
          <tr key={i}>
            <td>{e.Name}</td>
            <td>{e.Id}</td>
            <td>{e.Email}</td>
            <td>{`${hour}:${min}:${sec}`}</td>
            <td>{`${dateCheckIn}/${monthCheckedIn}/${yearCheckedIn}`}</td>
            <td><button className="btnp">Present</button></td>
          </tr>
        ))}

      </table>

    </div>
  )
}

export default Table
