import { useRef, useState } from 'react';
import './App.css';

function App() {
  
  const [Lang , setLang] = useState("uz")
  const [Color , setColor] = useState("red")
  const divRef = useRef()
  const dialog = useRef()
  const Languare = {
    en: {
      title:"Register",
      name:"enter the name...",
      phone:"phone number...",
      email:"Enter the email...",
      password:"enter the password...",
      button:"Login in",
      color:"color"
    },
    ru: {
      title:"Pегистр",
      name:"введите имя ...",
      phone:"телефонный номер...",
      email:"Введите адрес электронной почты...",
      password:"введите пароль...",
      button:"войти в систему",
      color:"цвет"
    },
    uz:{
      title:"Ro'yxatdan o'tish",
      name:"isminni kiriting...",
      phone:"telefon nomering...",
      email:"emailni kiriting...",
      password:"parolni kiriting...",
      button:"Tizimga kiring",
      color:"rang"
    },
  }
  return (
    <>
      <div 
        className = "div"
        ref = {divRef}
      >
      {Lang}
      <select 
        defaultValue = {Lang}
        onChange = {(e)=> {setLang(e.target.value)
        }
        }
      >
        <option value="uz">Uzbek</option>
        <option value="en">Engilish</option>
        <option value="ru">Rushcha</option>
      </select>
      <label
        className = "label"
      >{Languare[Lang].color}
        <input className="color" 
              value={Color}
              type="color" 
              onChange = {(e)=> {
              setColor(e.target.value);
              divRef.current.style.backgroundColor = e.target.value;
            }
          }
        />
      </label>
      <button
        onClick={()=>{
            dialog.current.open = true
          }
        }

      >
      {Languare[Lang].button}
      </button>
      <dialog className="dialog" ref={dialog} open ={false}>
        <profil>
            <h3 className="title">{Languare[Lang].title}</h3>
            <input 
              placeholder= {Languare[Lang].name}
              type="text" 
            />
            <input 
              placeholder= {Languare[Lang].phone}
              type="number" 
            />
            <input 
              placeholder= {Languare[Lang].email}
              type="email" 
            />
            <input 
              placeholder= {Languare[Lang].password}
              type="password" 
            />
            <button 
                  onClick={()=>{
                    dialog.current.open = !true
                  }
                }>
              {Languare[Lang].button}
            </button>
        </profil>      
      </dialog>
      </div>
    </>
  );
}


export default App;




         

