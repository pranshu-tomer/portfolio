"use client"
import React from "react";
import { BtnList } from "../../../data";
import NavBtn from "./NavBtn";
import UseScreenSize from '../../../hooks/UseScreenSize'
import Response from '../../../ResponsiveComponent/Response'

function Navigation(){

    const angle = 360/BtnList.length
    const size = UseScreenSize();

    const isLarge = size >= 1024
    const isMedium = size >= 768

    return (
        <div className="w-full fixed h-screen flex items-center justify-center">
            <Response>
                {({size}) => {
                    return size && size >= 480 ? 

                        <div className="flex items-center group justify-center relative hover:pause animate-spin-slow">
                            {
                                BtnList.map((btn,index) => {
                                    const angleRad = (index*angle*Math.PI)/180
                                    const radius = isMedium ? 'calc(20vw - 1rem)' : 'calc(30vw - 1rem)'
                                    const x = `calc(${radius}*${Math.cos(angleRad)})`
                                    const y = `calc(${radius}*${Math.sin(angleRad)})`
                                    return <NavBtn key={btn.label} x={x} y={y} {...btn} />
                                })
                            }
                        </div> 

                        : 
                        
                        <>
                        <div className="px-5 w-full xs:w-max space-y-8 xs:p-0 flex-col items-start flex  xs:items-center group justify-center relative">
                            {
                                BtnList.slice(0,BtnList.length/2).map((btn,index) => {
                                    return <NavBtn key={btn.label} x={0} y={0} {...btn} />
                                })
                            }
                        </div> 
                        <div className="px-5 w-full space-y-8 xs:w-max xs:p-0 flex-col items-end xs:items-center flex group justify-center relative">
                            {
                                BtnList.slice(BtnList.length/2,BtnList.length).map((btn,index) => {
                                    return <NavBtn key={btn.label} x={0} y={0} {...btn} labelDirection="left"/>
                                })
                            }
                        </div> 
                        </>
                }}
            </Response>
        </div>
    )
}


export default Navigation


// 