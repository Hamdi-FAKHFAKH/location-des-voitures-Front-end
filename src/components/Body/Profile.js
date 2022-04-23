import React, { useState, useEffect } from 'react'

export default function Profile() {
    function GetAllVoitures() {
        const requestOptions = {
            method: 'Get',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:3000/api/client/signUp', requestOptions)
          .then(( response ) => {
            if(response.status === 201){
                window.location.href = "/connexion";
            } else if( response.status === 400){
                console.log("des données qui doinvent étre unique mais qui sont déjà crées");
            } else if( response.status === 422 ) {
                console.log(response.statusText);

            } else {
                console.log("une erreure inconnue est survenue ");

            }
            }).catch( error => console.log("erreur signUp: ", error));
    }
  return (
   <div> </div>
  )
}
