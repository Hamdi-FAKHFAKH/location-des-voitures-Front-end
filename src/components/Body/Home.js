import React,{useContext} from 'react'
import { Carcontext } from "context/Carcontext";
import HomeCar from './HomeCar';
import CarReservation from './CarReservation';
export default function Home() {
    const {vuehome} = useContext(Carcontext);
  return (
    <>
    {vuehome?<HomeCar/>:<CarReservation/>}
    </>
  )
}
