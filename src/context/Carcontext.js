import React,{createContext,Component} from 'react'

export const Carcontext = createContext();

export default class CarcontextProvider extends Component {

  newDate = new Date()
  hours = this.newDate.getHours();
  minutes = this.newDate.getMinutes();
  minutes = this.minutes < 10 ? '0'+this.minutes : this.minutes;
  date = this.newDate.getDate();

  getCurrentDate(separator='-',houre=0){

    let newDate = new Date()
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    return `${month<10?`0${month}`:`${month}`}${separator}${this.date}${separator}${year}`
  }
  
  getcurrentHeure(houre){
    var hours= this.hours + houre
    if(hours >23)
    {
      this.date = this.date +1 ;
      hours = hours - 24;
    } 
    var strTime = hours + ':' + this.minutes ;
    return strTime;
  }
state={
    infocar:{
        id:'',
        matricule:'',
        image:'',
        prix:'',
        marque:''
    },
    vuehome:true,
    infoRes:{
      depart:'Aéroport Tunis Carthage',
      retour:'Aéroport Tunis Carthage',
      tempsDep:this.getcurrentHeure(1),
      tempsRet:this.getcurrentHeure(2),
      hdep:this.hours,
      mindep:this.minutes,
      daydep:this.date,
      dateDep:this.getCurrentDate(),
      dateRet:this.getCurrentDate(),
      nbheure:1,
      prix : ''
    }
};
setinfocar = (val)=>{
    this.setState({infocar:val})
}
setvuehome = () =>{
    this.setState({vuehome: !this.state.vuehome })
}
setinfoRes = (val)=>{
  this.setState({infoRes:val})
}
  render() {
    return (
      <Carcontext.Provider value={{ ...this.state,setinfocar : this.setinfocar,setvuehome:this.setvuehome,setinfoRes:this.setinfoRes}}>
          {this.props.children}
      </Carcontext.Provider>
      
    )
  }
}

 
