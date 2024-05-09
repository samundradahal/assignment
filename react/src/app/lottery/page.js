'use client'
import React ,{useState,useEffect} from 'react'
import {Button} from "@nextui-org/react";

const page = () => {
    const items = ["Car","MacBook","X","iPhone","X","X","Tv","X","X","Smart Watch"]
    const [num,setNum] = useState(null)
    const [paused,isPause] = useState(false)
    const [time,setTime] = useState(null)
    const[display,setDisplay] = useState(null)
    useEffect(()=>{
        if(paused){
            const interval = setInterval(() => {
                const randomNum = Math.floor(Math.random()*(items.length))
                setNum(randomNum)
            }, 100);
            setTime(interval)
            setDisplay(null)
        }
        else{
            clearInterval(time)
        }
    },[paused])
    const pause = ()=>{
        isPause(paused === true?false:true)
        setDisplay(paused === true && items[num] === "X"?"Sorry please try again. ":
        paused === true && items[num] != "X"?"Congrats you have won "+items[num] + "."
        :null)
    }
  return (
    <div>
        {num}
        {items.map((element,id)=>{
            return <div style= {{backgroundColor: id==num ? "red" :null}}className='bg-blue-400 p-1 w-32 h-fit m-2 rounded-sm shadow-lg'>{element}</div>
        })}
        <Button color="primary" onClick={pause}>
        {paused === false?"Spin":"Pause"}
    </Button>

    <div style={{color :items[num] === 'X'?'red':'green'}}>{display}</div>
    </div>
  )
}

export default page