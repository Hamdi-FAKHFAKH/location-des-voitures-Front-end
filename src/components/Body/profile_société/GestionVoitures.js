import { Carcontext } from 'context/Carcontext';
import React,{useContext} from 'react'


import Listeofcar from './Listeofcar';
import NewCar from './NewCar';
import Updatevoiture from './Updatevoiture';



export default function GestionVoitures() {

  const { vueprofileSociété,setvueprofileSociété} = useContext(Carcontext);
  return (
    <>
    {vueprofileSociété ==='vuelisteV'?<Listeofcar/>:(vueprofileSociété === 'vuedeformV'?<NewCar/>:<Updatevoiture/>)}
    </>
  )
}
