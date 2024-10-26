"use client";
import { useRouter } from "next/navigation";
import React from "react";

function TaskCard({ task }) {
  const router = useRouter();

  

  const handleTaskDone = async (id) => {
    console.log(id);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/reparado/`,
      {
        method: "POST",
      }
    );
    if (res.status === 200) {
      router.refresh();
    }
  };
  return (
    <div className="border-8 border-slate-400 text-center ">
      <div className=" rounded-md text-center ">
        
          {task.reparado && <span className="text-3xl text-green-400"> Ya se reparó ✅ </span>}{" "}<br />
       
          {task.vehiculo}
          
        
          <p>{task.dueño}</p>
       
        
          <p>{task.falla}</p>
        
       
          <p className="px-5">{task.fecha}</p>
        
      </div>
      <div >
        <button
          className="text-white rounded p-2 bg-green-500 max-w-20 "
          onClick={() => handleTaskDone(task.id)}
        >
          Vehiculo Reparado
        </button>

        
      </div>
    </div>
  );
}

export default TaskCard;
