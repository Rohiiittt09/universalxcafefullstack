"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { userdate } from "@/action/userintraction";
import Link from "next/link";
import { totalorder } from "@/action/userintraction";
import { fetchrev } from "@/action/userintraction";
import { fetchpend } from "@/action/userintraction";
import { completeord } from "@/action/userintraction";
import { fetchcomp } from "@/action/userintraction";

const page = () => {
  const [admin, setadmin] = useState();
  const [load, setload] = useState(false);
  const { data: session, status } = useSession();
  const [totalorders, settotalorders] = useState([]);
  const [rev, setrev] = useState(0);
  const [pend, setpend] = useState([]);
  const [comp, setcomp] = useState([]);
  const [ord, setord] = useState(1);
  const [box, setbox] = useState(false);
  const [orderdetails, setorderdetails] = useState([]);

  const getdata = async () => {
    const a = await userdate(session?.user?.email);
    setadmin(a.email);
    setload(true);
  };
  const ordtl = (e) => {
    setorderdetails(e);
    setbox(true);
  };

  useEffect(() => {
    if (status == "authenticated") {
      getdata();
    }
  }, [session]);
  const x = async () => {
    const a = await totalorder();
    settotalorders(a);
    const b = await fetchrev();
    setrev(b);
    const c = await fetchpend();
    setpend(c);
    const l = await fetchcomp();
    setcomp(l);
  };
  useEffect(() => {
    x();
  }, []);
  const compord = async (id) => {
    await completeord(id);
    x();
  };

  if (!load) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen w-screen flex  flex-col items-center">
      <div className="w-screen flex mt-10 justify-around ">
        <div className="w-1/6 border border-white/70 bg-black/50 rounded-2xl flex flex-col justify-center items-center h-15">
          <h1 className="font-semibold fo text-[16px]">Total Orders</h1>
          <h3>{totalorders.length}</h3>
        </div>
        <Link
          className="w-1/6 border cursor-pointer flex justify-center flex-col items-center border-white/70 bg-black/50 rounded-2xl hover:bg-black/10 h-15"
          href="#pending"
        >
          <h1 className="font-semibold fo text-[16px]">Pending Orders</h1>
          <h3>{pend.length}</h3>
        </Link>
        <Link
          className="w-1/6 border cursor-pointer flex justify-center flex-col items-center border-white/70 bg-black/50 rounded-2xl hover:bg-black/10 h-15"
          href="#complete"
        >
          <h1 className="font-semibold fo text-[16px]">Completed Orders</h1>
          <h3>{comp.length}</h3>
        </Link>
        <div className="w-1/6 border border-white/70 bg-black/50 rounded-2xl flex flex-col justify-center items-center h-15">
          <h1 className="font-semibold fo text-[16px]">Total Revenue</h1>
          <h3>${rev / 100}</h3>
        </div>
        <Link
          className="w-1/6 border flex justify-center cursor-pointer flex-col items-center border-white/70 bg-black/50 rounded-2xl hover:bg-black/10 h-15"
          href="/Admin/addmenu"
        >
          <h1 className="font-semibold fo text-[16px]">Update Menu</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" />
          </svg>
        </Link>
      </div>
      <div id="pending" className="w-full">
        <h1 className="text-3xl ml-5 mt-5">Pending Orders</h1>
      </div>
      <div className=" mt-10 p-5 grid-cols-4 w-screen grid gap-3 place-items-center ">
        {pend.map((e, index) => {
          return (
            <div
              key={e._id}
              className="w-50 bg-black/70 rounded-3xl h-70 border flex flex-col justify-around p-3 border-white"
            >
              <div>
                <h1>order #{10100 + index}</h1>
                <h3>{e.name}</h3>
                <h3>{e.phone}</h3>
              </div>
              <div>
                <h1>Total:{e.amount / 100}</h1>
                <h1>Items:{e.cart.length}</h1>
              </div>

              <div>
                <div className="flex items-center gap-2  text-center">
                  <h1>{e.pregress}</h1>
                  <span>
                    <div className="w-4 h-4 rounded-full bg-orange-600"></div>
                  </span>
                </div>
                <div className="flex items-center gap-2  text-center">
                  <h1>Paid</h1>
                  <span>
                    <div className="w-4 h-4  bg-green-600"></div>
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center w-full">
                <button
                  onClick={() => {
                    compord(e.orderId);
                  }}
                  className="bg-green-500 h-5 cursor-pointer rounded-3xl text-black text-[12px] w-30"
                >
                  Mark Complete
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <button
                  onClick={() => {
                    ordtl(e);
                  }}
                  className=" h-5 cursor-pointer rounded-3xl text-black text-[12px] bg-orange-500 w-30"
                >
                  Orders Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="complete" className="w-full">
        <h1 className="text-3xl ml-5 mt-5">Completed Orders</h1>
      </div>
      <div className=" mt-10 p-5 grid-cols-4 w-screen grid gap-3 place-items-center ">
        {comp.map((e, index) => {
          return (
            <div
              key={e._id}
              className="w-50 bg-black/70 rounded-3xl h-70 border flex flex-col justify-around p-3 border-white"
            >
              <div>
                <h1>order #{10100 + index}</h1>
                <h3>{e.name}</h3>
                <h3>{e.phone}</h3>
              </div>
              <div>
                <h1>Total:{e.amount / 100}</h1>
                <h1>Items:{e.cart.length}</h1>
              </div>

              <div>
                <div className="flex items-center gap-2  text-center">
                  <h1>{e.pregress}</h1>
                  <span>
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                  </span>
                </div>
                <div className="flex items-center gap-2  text-center">
                  <h1>Paid</h1>
                  <span>
                    <div className="w-4 h-4  bg-green-600"></div>
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center w-full">
                <button
                  onClick={() => {
                    ordtl(e);
                  }}
                  className=" h-5 cursor-pointer rounded-3xl text-black text-[12px] bg-orange-500 w-30"
                >
                  Orders Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={
          box
            ? "w-4/5  mx-auto h-100 border overflow-y-scroll overflow-x-hidden bg-black  border-white/40 rounded-2xl flex p5 items-center fixed  top-30  "
            : "hidden"
        }
      >
        <div>
          <h1
            onClick={() => setbox(!box)}
            className="text-7xl rotate-45 absolute top-2 right-2 cursor-pointer "
          >
            +
          </h1>
        </div>
        <div className="w-full h-full flex flex-col p-5">
          <h1 className="text-3xl w-full  text-center">Order Details</h1>

          <h3>{orderdetails.name}</h3>
          <h3>{orderdetails.phone}</h3>
          <h3>{orderdetails.address}</h3>
          <h1>
            Total: $
            {orderdetails.amount
              ? (orderdetails.amount / 100).toFixed(2)
              : "0.00"}
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Items:</h1>
            {orderdetails?.cart?.map((e, index) => {
              return (
                <div key={index} className="flex gap-3 items-center">
                  <img className="w-12 h-12" src={e.img} alt="" />
                  <h4>{e.item}</h4>
                  <h4>{e.type}</h4>
                  <h4>{`${e.qty} * ${e.price}`}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
