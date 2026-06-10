"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { userdate } from "@/action/userintraction";
import { addmenuu } from "@/action/userintraction";
import { fetchmenu } from "@/action/userintraction";
import { deletmenu } from "@/action/userintraction";

const page = () => {
  const [allmenu, setallmenu] = useState([]);
  const { data: session, status } = useSession();
  
  const [form, setform] = useState({ img: "", item: "", type: "", price: "" });
  const [admin, setadmin] = useState();
  const [load, setload] = useState(false);
  const getdataa = async () => {
    const a = await userdate(session?.user?.email);
    setadmin(a.email);
    setload(true);
  };
  useEffect(() => {
    if (status == "authenticated") {
      getdataa();
    }
  }, [session]);

  const deleteitem = async (id) => {
    await deletmenu(id);
    b();
  };
  const edititem = async (id) => {
    allmenu.map((e) => {
      if (e.id == id) {
        setform({ img: e.img, item: e.item, type: e.type, price: e.price });
      }
    });
    deleteitem(id);
  };
  const a = async (x) => {
    await addmenuu(x);
  };
  
  const getdata = async () => {
    const a = await userdate(session?.user?.email);
    setadmin(a.email);
  };
  const b = async () => {
    const y = await fetchmenu();
    setallmenu(y);
  };
  useEffect(() => {
    b();
  }, []);

  useEffect(() => {
    if (status == "authenticated") {
      getdata();
    }
  }, [session]);
  const add = () => {
    a({ ...form, id: crypto.randomUUID() });
    b();
    setform({ img: "", item: "", type: "", price: "" });
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  if (!load) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black/50">
      <div className="w-screen flex flex-col  items-center ">
        <h1 className="text-3xl w-screen flex justify-center ">
          Add More Items
        </h1>
        <div className="w-4/5 mt-5">
          <div className="w-full">
            <input
              value={form.img}
              onChange={handlechange}
              name="img"
              className="p-2 h-8 border-4 rounded-full border-orange-300   w-full"
              type="text"
              placeholder="Enter Item Image Url"
            />
          </div>
          <div className="w-full mt-4 flex flex-col md:flex-row   gap-5">
            <input
              value={form.item}
              onChange={handlechange}
              name="item"
              className="p-2 h-8 border-4 w-1/3 rounded-full border-orange-300   "
              type="text"
              placeholder="Enetr Item Name"
            />

            <input
              value={form.type}
              onChange={handlechange}
              name="type"
              className="p-2 h-8 border-4 w-1/3  rounded-full  border-orange-300    "
              type="text"
              placeholder="Enter Item Type"
            />
            <input
              value={form.price}
              onChange={handlechange}
              name="price"
              className="p-2 h-8 border-4 w-1/3  rounded-full  border-orange-300    "
              type="number"
              placeholder="Enter Item price"
            />
          </div>

          <div className="w-full flex justify-center mt-5">
            <button
              onClick={() => {
                add();
              }}
              className="w-40 rounded-4xl flex text-center justify-center cursor-pointer hover:bg-orange-600 border-orange-300 bg-orange-300"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto">
        <table className="table-auto w-screen md:w-full p-5 mt-5">
          <thead className=" text-center bg-purple-500 text-white">
            <tr className=" ">
              <th className=" text-[12px] md:text-[16px] text-center">image</th>
              <th className="text-[12px] md:text-[16px]  text-center">name</th>
              <th className="text-[12px] md:text-[16px] text-center">type</th>
              <th className="text-[12px] md:text-[16px] text-center">price</th>
              <th className="text-[12px] md:text-[16px] text-center">action</th>
            </tr>
          </thead>
          <tbody className="text-white bg-purple-400  ">
            {allmenu.map((e) => {
              return (
                <>
                  <tr key={e.id} className=" text-center">
                    <td className="">
                      <div className="flex text-[12px] md:text-[16px]  justify-center items-center gap-3">
                        <span>
                          <img className="w-15 h-15" src={`${e.img}`} alt="" />
                        </span>
                      </div>
                    </td>

                    <td className="">
                      <div className="flex text-[12px] md:text-[16px] justify-center items-center gap-3">
                        <span>{e.item}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex text-[12px] md:text-[16px] justify-center items-center gap-3">
                        <span>{e.type}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex text-[12px] md:text-[16px] justify-center items-center gap-3">
                        <span>{e.price}</span>
                      </div>
                    </td>
                    <td>
                      <div className=" flex text-[12px] md:text-[16px] justify-center gap-3">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            deleteitem(e.id);
                          }}
                        >
                          <img src="/delete.svg" alt="Delete" />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            edititem(e.id);
                          }}
                        >
                          <img src="/edit.svg" alt="Edit" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
