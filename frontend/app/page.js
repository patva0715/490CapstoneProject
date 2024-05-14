"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Od from "./odemoeter";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import NetChart from "./chart";
import { GiBrain } from "react-icons/gi";
import { FaRegCircleQuestion } from "react-icons/fa6"
export default function Home() {
  const [netWorth, setNetworth] = useState(300000)

  return (
    <>
      <div className="flex gap-10 flex-nowrap max-w-[1600px]">
        {/* DIVIDER COL1*/}
        <div className="flex basis-4/5  flex-col justify-start  min-h-[200vh] gap-10 ">

          <div className="font-semibold text-3xl h-[6vh] fade delay">
            <h1>Overview</h1>
          </div>

          {/* DIVIDER NET WORTH */}
          <div className="  w-full flex flex-wrap  bg-neutral-900 rounded-2xl overflow-hidden  ">

            <div className="flex w-full items-end">
              <div className="  basis-1/4 grow flex items-end gap-2 p-6">
                {/* <p className="text-4xl font-bold">${netWorth}</p> */}
                <p className="fade text-5xl font-bold ">$33,256</p>
                <p className="fade flex gap-1  text-neutral-400 border-neutral-400 border-b-[1px] border-dashed pb-[1px] pt-1 ">Net worth<FaRegCircleQuestion className="mt-1"/></p>
              </div>
              {/* <div className="basis-1/4 grow-0 flex flex-col items-center p-6">
              <p className="text-md font-medium">$50,456</p>
              <p className="text-sm opacity-50 border-b-[1px] border-dashed pb-[1px] font-normal">Assets</p>
            </div>

            <div className="basis-1/4 grow-0 flex flex-col items-center p-6 ">
              <p className="text-md font-medium">$16,456</p>
              <p className="text-sm opacity-50 border-b-[1px] border-dashed pb-[1px] font-normal">Liabilities</p>
            </div> */}
            </div>

            <div className="w-full h-[499px] ">
              <NetChart setNetworth={setNetworth} />

            </div>

          </div>

          {/* DIVIDER CASH FLOW */}
          <div className=" fade flex flex-wrap  bg-neutral-900 rounded-2xl overflow-hidden  ">

            <div className="basis-full px-6 pt-4 mb-2 flex items-end ">
              <h2 className="mr-3 text-2xl">Cash Flow</h2>
              <button className="text-xs text-green-100 mb-1">View More</button>
              <div className="grow text-right text-xl">
                <select defaultValue={"May"} className="opacity-80 bg-opacity-0 bg-red-300">
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                </select>
              </div>
            </div>

            <div className="w-full h-[1.2px] bg-green-100 opacity-50 mx-4 my-1"></div>

            <div className="flex w-full items-end">
              <div className="basis-1/4 grow-0 flex flex-col items-start p-6">
                <p className="text-4xl font-bold text-green-200 opacity-90">+$1,256</p>
                <p className="text-sm opacity-50 border-b-[1px] border-dashed pb-[1px] pt-1 ">Net Flow</p>
              </div>
              <div className="basis-1/4 grow-0 flex flex-col items-center p-6">
                <p className="text-md font-medium">$8,456</p>
                <span className="text-green-300 opacity-90 text-sm font-light flex"> <FaArrowTrendUp className="txt-red-300 opacity-90 mr-[2px] contain-inline-size" />-6% from July's</span>
                <div className="flex items-end">
                  <p className=" text-sm opacity-50 border-b-[1px] border-dashed pb-[1px] font-normal">Inflow</p>
                </div>
              </div>

              <div className="basis-1/4 grow-0 flex flex-col items-center p-6">
                <p className="text-md font-medium">$2,456</p>
                <span className="text-red-300 opacity-90 text-sm font-light flex"> <FaArrowTrendUp className="txt-red-300 opacity-90 mr-[2px] contain-inline-size" />+16% from July's</span>
                <div className="flex items-end">
                  <p className=" text-sm opacity-50 border-b-[1px] border-dashed pb-[1px] font-normal">Outflow</p>
                </div>
              </div>

              <div className="basis-1/4 grow-0 flex flex-col items-center p-6">
                <p className="text-md font-medium">$25,000</p>
                <span className="text-green-300 opacity-90 text-sm font-light flex"> <FaArrowTrendUp className="txt-red-300 opacity-90 mr-[2px] contain-inline-size" />+5% from July's</span>
                <div className="flex items-end">
                  <p className=" text-sm opacity-50 border-b-[1px] border-dashed pb-[1px] font-normal">Starting Cash</p>
                </div>
              </div>

            </div>

          </div>

        </div>
        {/* DIVIDER COL2*/}
        <div className="  flex basis-1/5  flex-col gap-10 pt-[6vh]">
        <div className="fade w-full   bg-neutral-900 rounded-2xl mt-10  ">
            <div className="p-6 text-neutral-300">
              <h3 className="flex text-xl font-semibold gap-2 items-center mb-2"><GiBrain className="text-xl" />Asset Types.</h3>
              <ul className="flex flex-col gap-2 ">
                <h3>Stocks</h3>
                <Bar positive={true} width={37}/>
                <h3>Car</h3>
                <Bar positive={true} width={20}/>
                <h3>Home</h3>
                <Bar positive={true} width={4}/>
              </ul>
            </div>
          </div>
          <div className="fade w-full   bg-neutral-900 rounded-2xl ">
            <div className="p-6 text-neutral-300">
              <h3 className="flex text-xl font-semibold gap-2 items-center mb-2"><GiBrain className="text-xl" />Liability Types.</h3>
              <ul className="flex flex-col gap-2 ">
                <h3>Loans</h3>
                <Bar positive={false} width={37}/>
                <h3>Car</h3>
                <Bar positive={false} width={15}/>
                <h3>Mortgage</h3>
                <Bar positive={false} width={4}/>
              </ul>
            </div>
          </div>
          <div className="fade w-full flex flex-wrap  bg-neutral-900 rounded-2xl ">
            <div className="p-6">
              <h3 className="flex text-xl font-semibold gap-2 items-center mb-2"><GiBrain className="text-xl" />Things to consider.</h3>
              <ul className="flex flex-col gap-2 text-md opacity-80">
                <li>You have more than enough cash to payoff one of your high interest credit cards</li>
                <li>Your cash could be deposited into a high yield savings account</li>
                <li>Consolidate multiple debts into a single loan with a lower interest rate to simplify your payments and save on interest costs.</li>
              </ul>
              <button className="text-green-100 opacity-80 mt-2 underline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Bar = ({ width, label,positive }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      {positive?<div className="bg-green-400 h-2.5 rounded-full" style={{width: `${width}%`}}></div>:
      <div className="bg-red-400 h-2.5 rounded-full" style={{width: `${width}%`}}></div>}
    </div>
  )
}
