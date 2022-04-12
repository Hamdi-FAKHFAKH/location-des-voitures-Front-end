import React from 'react'
import Listeofcar from './Listeofcar';
import NewCar from './NewCar';

export default function GestionVoitures() {
  const [vue,setvue] = React.useState('vuelisteV');
  return (
    <>
    {vue ==='vuelisteV'?<Listeofcar vue={vue} setvue = {setvue}/>:(vue === 'vuedeformV'?<NewCar vue={vue} setvue={setvue}/>:null)}
    </>
  )
}
