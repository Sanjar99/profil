import { useRef, useState } from 'react';
import './App.css';

function App() {
  
  const [Lang , setLang] = useState("en")
  const [Color , setColor] = useState("while")
  const [title , setTitle] = useState("25px")
  const [text , setText] = useState("20px")
  const divRef = useRef()
  const titleRef = useRef()
  const textRef = useRef()
  const Languare = {
    en: {
      title:"News in Uzbekistan",
      text:`Uzbekistan is the country most prone to cryptocurrency attacks. Interview with an information security expert
      According to the results of 2020, a ranking of cyber threats has been developed, which includes 108 countries around the world. According to its results, Uzbekistan is ranked 70th, with the lowest level of cybersecurity - 0.7121.`
    },
    ru: {
      title:"Новости в узбекистане",
      text:`Узбекистан - страна, наиболее подверженная атакам криптовалюты. Интервью со специалистом по информационной безопасности
      По итогам 2020 года разработан рейтинг киберугроз, в который вошли 108 стран мира. По его результатам Узбекистан занял 70-е место с самым низким уровнем кибербезопасности - 0,7121.`
    },
    uz:{
      title:"O'zbekistondagi yangiliklar",
      text:`O‘zbekiston kriptomaynerlar hujumiga eng ko‘p uchraydigan mamlakat. Axborot xavfsizligi sohasi mutaxassisi bilan suhbat
      2020-yil yakunlari bo‘yicha jahonning 108 mamlakatini o‘z ichiga olgan Kibertahdidlarga duchor bo‘lish reytingi ishlab chiqildi. Uning natijalariga ko‘ra O‘zbekiston 70-o‘rinda, ya’ni kiberhimoyaning eng past darajasi — 0,7121 indeks bilan baholangan`
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
        onChange = {(e)=> setLang(e.target.value)}
      >
        <option value="uz">Uzbek</option>
        <option value="en">Engilish</option>
        <option value="ru">Rushcha</option>
      </select>
      <label
        className = "label"
      >Tema
        <input 
              type="color" 
              onChange = {(e)=> {
              setColor(e.target.value);
              divRef.current.style.backgroundColor = e.target.value;
            }
          }
        />
        <input 
              placeholder = "fontSize"
              type="number" 
              onChange = {(evt)=> {
              setTitle(evt.target.value);
              setText(evt.target.value);
              titleRef.current.style.fontSize = evt.target.value + "px";
              textRef.current.style.fontSize = evt.target.value + "px";
              
            }
          }

        />
      </label>

          <h2 ref = {titleRef}>{Languare[Lang].title}</h2>
          <p ref = {textRef}>{Languare[Lang].text}</p>
           
         

      </div>
    </>
  );
}


export default App;
