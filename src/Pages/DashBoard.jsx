import React, { useState } from "react";
import "../Styles/DashBoard.css";
import { FaSearch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Img from "../assets/m2.avif"
import Img11 from "../assets/m3.avif"
import Img1 from "../assets/m4.avif"
import Img2 from "../assets/man1.avif"
import Img3 from "../assets/m5.avif"
import Img4 from "../assets/m6.avif"
import Img5 from "../assets/m7.avif"
import Img6 from "../assets/w1.avif"
import Img7 from "../assets/w2.avif"
import Img8 from "../assets/w3.avif"
import Img9 from "../assets/w4.avif"
import Img10 from "../assets/w5.avif"


const Dashboard = () => {
  const [search, setSearch] = useState(""); 
  const [filteredCards, setFilteredCards] = useState([]); 
  const cardDetails = [
    { 
      Name: "Agu Chukwuebuake", 
      position: "Staff", 
      Id: "001",
      Email: "geraldpo@gmail.com", 
      img: Img

     },
    { 
      Name: "Agu Ezekiel", 
      position: "Staff", 
      Id: "002", 
      Email: "geraldpop@gmail.com",
      img : Img11 
    },
    { 
      Name: "Odo Edith", 
      position: "Staff", 
      Id: "003",
      Email: "odoedith@gmail.com", 
       img: Img8
   },
    { 
      Name: "Emma zyko", 
      position: "Staff", 
      Id: "004", 
      Email: "emmayo@gmail.com", 
      img:  Img1
    },
    { 
      Name: "Antony Aimudu", 
      position: "Staff", 
      Id: "005", Email: "aguka@gmail.com", 
      img:  Img2
    },
    { 
      Name: "Peace Agu", 
      position: "Staff", 
      Id: "006", 
      Email: "peaceagu@gmail.com", 
      img: Img9 
    },
    { 
      Name: "Mercy Nnadi", 
      position: "Staff", 
      Id: "007", Email: "mercadi@gmail.com", 
      img: Img7
    },
    { 
      Name: "Destiny Ona", 
      position: "Staff", 
      Id: "008", Email: "destiny@gmail.com",
       img: Img5 },

    { Name: "Osuji Wisdom",
     position: "Staff", 
     Id: "009", 
     Email: "widom@gmail.com", 
     img: Img3
     },
    { 
      Name: "Ekah Davidson", 
      position: "Staff",
      Id: "010", 
      Email: "davion@gmail.com", 
      img:  Img4 
    },
    { 
      Name: "Richeal Nnamdi", 
      position: "Staff", 
      Id: "011", 
      Email: "nnamdi@gmail.com", 
      img: Img6
     },
    { 
      Name: "Richeal Okafor", 
      position: "Staff", 
      Id: "012", 
      Email: "okafor@gmail.com", 
      img: Img10
    },
  ];

  const navigate = useNavigate();
 
  const handleSearch = (event) => {
   
    const target= event.target.value;
    setSearch(target);

   
    const results = cardDetails.filter(
      (item) =>
        item.Id.includes(target) 
    );

    setFilteredCards(results);
  };

  return (
    <div className="DashBoard">
      <div className="Header">
      
      <button className="buttonCheckIn" onClick={() => navigate('/checkin-login')}>
          Check in
        </button>
        <div className="DashBInput">
          <p><FaSearch /></p>
          <input
            type="text"
            placeholder="Search by ID..."
            className="Dashinputpp"
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className="EmployeeWriteUp">
          <h1>Employee Dashboard</h1>
        </div>

        <button className="button"><IoIosPeople className="person" /></button>
      </div>

     
      <div className="CardContainer">
        {(search ? filteredCards : cardDetails).map((item, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={item.img} alt="" className="imgg" />
            </div>
            <div className="card-content">
              <p><b>Name:</b> {item.Name}</p>
              <p><b>Position:</b> {item.position}</p>
              <p><b>Email:</b> {item.Email}</p>
              <p><b>ID No:</b> {item.Id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
