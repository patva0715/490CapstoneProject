'use client'
import React, { useState } from 'react'
import { IoIosLink, IoIosMore } from "react-icons/io";
import dynamic from 'next/dynamic'
import { GrPowerCycle } from "react-icons/gr";
// components/MyChart.js contains the recharts chart
const PieChart = dynamic(
  () => import('./pieChart'),
  { ssr: false }
)
const assets = [{
  type: 'Investment',
  desc: '130 Shares of AMZN',
  value: 12000,
}, {
  type: 'Cash',
  desc: 'Cash in your Chase checking account',
  value: 8540,
}, {
  type: 'Tangible',
  desc: 'A fully paid 2020 BRZ',
  value: 18000,
}, {
  type: 'Investment',
  desc: '130 Shares of FB',
  value: 6050,
}, {
  type: 'Stock',
  desc: '100 Shares in Meta',
  value: 12000,
}, {
  type: 'Stock',
  desc: '50 Shares in AMD',
  value: 12000,
}, {
  type: 'Tangible',
  desc: 'Car',
  value: 12000,
}, {
  type: 'Investment',
  desc: '401K',
  value: 12000,
}, {
  type: 'Other',
  desc: '401K',
  value: 12000,
}, {
  type: 'Other',
  desc: '401K',
  value: 12000,
},]
const NetWorthPage = () => {
  return (
    <>
      <div className='basis-full flex-col items-center py-10 mb-8 flex justify-center'>
        <h1 className='fade text-6xl font-bold'>$132,280</h1>
        <h2 className='fade text-2l text-neutral-300 font-medium mt-4'>NET WORTH</h2>
      </div>
      <div className='flex gap-10 items-stretch '>

        {/* DIVIDER COL 1 */}
        <div className="basis-1/4 w-full ounded-2xl flex flex-col items-center ">
          <div className='flex  py-6 items-center w-full justify-end px-2'>
            <button className='p-2 flex gap-2 items-center font-medium border-dashed border-b-[1px] border-neutral-300 text-neutral-300  opacity-90 hover:bg-neutral-900 hover:text-neutral-100'><GrPowerCycle />View Liabilites</button>

          </div>
          <div className="w-full text-white text-lg  bg-neutral-900 rounded-2xl flex flex-col items-center justify-start px-10 py-8">
            <div className='flex flex-col w-full'>
              <span className='font-bold text-2xl'>$54,922</span>
              <span className='text-neutral-400 text-base'>Total Asset Value</span>
            </div>
            <div className='h-64  w-full overflow-visible'>
              <PieChart />
            </div>
            <div className='mt-4 w-full'>
              <ul>
                <li className='flex items-center gap-2'><div className='min-w-2 aspect-square rounded-full bg-blue-500' /><span className='grow'>Investment</span><span className='text-neutral-400'>$12.2K</span></li>
                <li className='flex items-center gap-2'><div className='min-w-2 aspect-square rounded-full bg-[#00C49F]' /><span className='grow'>Cash</span><span className='text-neutral-400'>$10.2K</span></li>
                <li className='flex items-center gap-2'><div className='min-w-2 aspect-square rounded-full bg-[#FFBB28]' /><span className='grow'>Tangible</span><span className='text-neutral-400'>$3.2K</span></li>
                <li className='flex items-center gap-2'><div className='min-w-2 aspect-square rounded-full bg-[#FF8042]' /><span className='grow'>Retirement</span><span className='text-neutral-400'>$2.2K</span></li>
                <li className='flex items-center gap-2'><div className='min-w-2 aspect-square rounded-full bg-pink-600' /><span className='grow'>Other</span><span className='text-neutral-400'>$2.6K</span></li>
              </ul>

            </div>
          </div>

        </div>
        {/* DIVIDER COL 2 */}
        <div className='basis-3/4 '>
          <div className='flex py-6 px-2 items-center'>
            <span className='w-min whitespace-nowrap mr-4 font-bold text-xl'>Asset List</span>
            <span className='basis-1/12 grow flex mr-4'><input className='p-1 rounded-md bg-neutral-700' placeholder='Search for an asset' /></span>
            <div className='flex mr-2'>
              <DropDown />
            </div>
            <button className='bg-green-300 text-green-700 h-full py-1 rounded-sm px-2 ml-2'>
              Add Asset
            </button>
          </div>

          <div className="w-full text-white text-lg  bg-neutral-900 rounded-2xl  ">
            <div className='flex flex-col p-6'>
              <div className='flex p-2 font-bold text-neutral-300 '>
                <span className='basis-1/12 grow-0 whitespace-nowrap mr-4'>Type</span>
                <span className='basis-1/12 grow'>Description</span>
                <span className='basis-2/12 grow-0'>Value</span>
                <span className='basis-1/12 grow-0'>Files</span>
                <span className='basis-1/12 grow-0'>Action</span>
              </div>
              <div className="w-full h-[1.2px] bg-green-100 opacity-50 my-1"></div>
              {assets.map((asset, idx) => (
                <TableRow key={idx} asset={asset} />
              ))}
            </div>
          </div>

          <div className='flex justify-center gap-2 mt-6'>
            {[1, 2, 3].map((item, idx) => (
              <button key={idx} className='p-2 aspect-square min-w-12 flex items-center justify-center border-neutral-500 border-[1px]'>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
const TableRow = ({ asset }) => {
  return (
    <div>
      <div className='flex p-3 text-neutral-400 border-b-[1px] text-sm font-normal border-neutral-700'>
        <span className='basis-1/12 grow-0 mr-4'>{asset.type}</span>
        <span className='basis-1/12 grow'>{asset.desc}</span>
        <span className='basis-2/12 grow-0'>${asset.value}</span>
        <span className='basis-1/12 grow-0'><IoIosLink /></span>
        <span className='basis-1/12 grow-0'><IoIosMore /></span>
      </div>

    </div>
  )
}

const DropDown = ({ }) => {
  const [open, isOpen] = useState(false)
  const toggle = () => {
    isOpen(!open)
  }
  return (

    <form className="max-w-sm mx-auto ">
      <div className="flex items-center ">

        {/* <label htmlFor="states" className="sr-only text-red-100">Show</label>
         */}
        <span className='mr-1 text-neutral-400'>Show: </span>
        <select className='bg-neutral-500 outline-none p-2 rounded-md'>
          <option value="All Assets">All Assets</option>
          <option value="TX">Tangible</option>
          <option value="WH">Investment</option>
          <option value="FL">Retirement</option>
          <option value="VG">Other</option>
        </select>
      </div>
    </form>


  )
}
export default NetWorthPage