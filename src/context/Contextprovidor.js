import React,{createContext,useContext,useState} from 'react';


const stateContext = createContext();

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

console.log(initialState);

export default Contextprovidor=({children})=>{
    const [first,setfirst]=useState(second)
    return (
        <StateContext.Provider
        value={{test:'test'}}
        >
        {children}
        </StateContext.Provider>
        
 )
}