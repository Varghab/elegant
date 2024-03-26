"use client"
import React, { useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { CiGrid2H } from "react-icons/ci";

type LayoutSelectProps = {
    setLayout : React.Dispatch<React.SetStateAction<"3x3" | "2x2" | "1x1">>,
    layout: '3x3' | '2x2' | '1x1'
}

const LayoutSelect = ({setLayout, layout}:LayoutSelectProps) => {
    return (
        <div className="flex items-center gap-1">
        <span onClick={()=> setLayout('3x3')} className={`p-2 sm:hidden lg:block hidden cursor-pointer rounded-sm ${layout==='3x3'&&'bg-gray-200'}`}>
            <TfiLayoutGrid3Alt />
        </span>
        <span onClick={()=> setLayout('1x1')} className={`p-2 block sm:hidden cursor-pointer rounded-sm ${layout==='1x1'&&'bg-gray-200'}`}>
            <CiGrid2H className="" />
        </span>
        <span onClick={()=> setLayout('2x2')} className={`p-2 sm:hidden lg:block block cursor-pointer rounded-sm ${layout==='2x2'&&'bg-gray-200'}`}>
            <RiLayoutGridFill />
        </span>
        </div>
    );
};

export default LayoutSelect;
