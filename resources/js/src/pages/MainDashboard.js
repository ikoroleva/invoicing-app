// import { use } from "browser-sync";
import { useEffect, useState } from "react";
import TotalRevenueInvoices from "../components/TotalRevenue";


export default function MainDashboard(){
    const [supplier, setSupplier] = useState({});
    

    const url = '/api/suppliers/current' ;
    //currently logged in use
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setSupplier(data);
    
    };

    // const url = '/api/invoices/suppliers/12345678' //make the {ico} -> user.ico
    // const fetchData = async() => {
    // const resp = await axios.get(url);
    // const data = resp.data.json();
    // setSupplier(data)
    // console.log(supplier)
    // };

    useEffect(() => {
        fetchData();
    }, []);
    // const url = '/invoices/suppliers/12345678' //make the {ico} -> user.ico
    // const fetchData = async () => {
    //     const resp = await axios.get(url);
    //     const data = resp.data.json();
    //     setSupplier(data)
    //     console.log(supplier)
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

console.log(supplier);

    return(
        <>
        <h1>Main Dashboard of: {supplier.name}</h1>
        <h3>View Invoices:</h3>
        <TotalRevenueInvoices /> 
        {/* <TotalValueInvoices/> */}
        </>
    )
}