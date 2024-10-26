import Image from "next/image";
import ListTask from "./components/ListTask";

export default function Home() {
  return (
    
 <div className="container">
    
      <div className="col-md-12">
        <h1 className="text-center text-5xl py-5">Panel para Mecanicos</h1>
      <p className="text-center py-5">Aqui se veran los turnos registrados en la app Turnos Taller</p>
      <ListTask />
      </div>
    
  </div>) }
