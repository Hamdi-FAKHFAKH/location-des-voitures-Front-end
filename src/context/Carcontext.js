import React,{createContext,Component} from 'react'

export const Carcontext = createContext();

export default class CarcontextProvider extends Component {
state={
    infocar:{
        matricule:'',
        image:'',
        prix:'',
        marque:''
    },
    vuehome:true
};
setinfocar = (val)=>{
    this.setState({infocar:val})
}
setvuehome = () =>{
    this.setState({vuehome: !this.state.vuehome })
}
  render() {
    return (
      <Carcontext.Provider value={{ ...this.state,setinfocar : this.setinfocar,setvuehome:this.setvuehome}}>
          {this.props.children}
      </Carcontext.Provider>
      
    )
  }
}

 
