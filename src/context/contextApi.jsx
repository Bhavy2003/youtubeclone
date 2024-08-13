import React, { createContext , useState,useEffect } from "react";
import {fetchdatafromapi} from '../utils/api';
export const Context = createContext();
 const AppContext=({children})=>{
    const [loading,setLoading]=useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [selectedCategories,setSelectedCategories]=useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
        fetchselecteddata(selectedCategories)
    },[selectedCategories])
     const fetchselecteddata=(query)=>{
        setLoading(true);
        fetchdatafromapi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResult(contents)
            setLoading(false);
        })
     }
    return(
        <Context.Provider value={{loading,setLoading,searchResult,setSearchResult,selectedCategories,setSelectedCategories,mobileMenu,setMobileMenu}}>
            {children}
        </Context.Provider>

    )
}
export default AppContext
