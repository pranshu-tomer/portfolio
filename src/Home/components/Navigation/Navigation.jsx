"use client"
import React from "react";
import { BtnList } from "../../../data";
import NavBtn from "./NavBtn";

function Navigation(){

    const angle = 360/BtnList.length

    return (
        <div className="w-full fixed h-screen flex items-center justify-center">
            <div className="flex items-center group justify-center relative hover:pause animate-spin-slow">
            {
                BtnList.map((btn,index) => {
                    const angleRad = (index*angle*Math.PI)/180
                    const radius = 'calc(20vw - 1rem)'
                    const x = `calc(${radius}*${Math.cos(angleRad)})`
                    const y = `calc(${radius}*${Math.sin(angleRad)})`
                    return <NavBtn key={btn.label} x={x} y={y} {...btn} />
                })
            }
        </div>
        </div>
    )
}


export default Navigation