"use client"
import Users from '../components/Users'

export default function HomePage(){
    return <section>
         <h1>Hola Mundo</h1>
         {
            window.localStorage.getItem('token')
         }
         <button onClick={() => {
            alert("Felicidades, has hecho clic en el botón")
         }}>Clic</button>
        <Users/>

    </section>
   
}