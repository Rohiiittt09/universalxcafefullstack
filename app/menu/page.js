"use client";
import React, { useEffect, useState } from "react";
import { fetchmenu } from "@/action/userintraction";
import Menucard from "@/components/Menucard";

const page = () => {
  const [allmenu, setallmenu] = useState([]);
  const [load, setload] = useState(false);
  const b = async () => {
    const y = await fetchmenu();
    setallmenu(y);
   setload(true);
  };
  useEffect(() => {
    b();
  }, []);
  if (!load) {
    return (
       <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
    </div>
    )}
  return (
    <div className="pb-5 min-h-screen pt-10 grid sm:grid-cols-3 bg-black/50  grid-cols-2 lg:grid-cols-4 place-items-center place-content-start gap-5">
      {allmenu.map((e) => {
        return <Menucard key={e.id} data={e} />;
      })}
    </div>
  );
};

export default page;
