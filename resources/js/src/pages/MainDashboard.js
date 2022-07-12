// import { use } from "browser-sync";
import { useEffect, useState } from "react";

export default function MainDashboard(){
    const [supplier, setSupplier] = useState;
    

    // const url = '/invoices/suppliers/12345678' //make the {ico} -> user.ico
    // const fetchData = async() => {
    // const resp = await fetch(url);
    // const data = resp.json();
    // setSupplier(data)
    // console.log(supplier)
    // };

    const url = '/invoices/suppliers/12345678' //make the {ico} -> user.ico
    const fetchData = async() => {
    const resp = await axios.get(url);
    const data = resp.data.json();
    setSupplier(data)
    console.log(supplier)
    };

    useEffect(() => {
        fetchData();
    }, []);



    return(
        <h1>Hi</h1>
    )
}