// import { use } from "browser-sync";
import { useEffect, useState } from "react";
import TotalRevenueInvoices from "../components/TotalRevenue";
import TotalValueInvoices from "../components/TotalValueInvoices";
import ThisMonthInvoicesValue from "../components/ThisMonthInvoicesValue";
import InvoicesList from "../components/InvoicesList";

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

    useEffect(() => {
        fetchData();
    }, []);
   
console.log(supplier);

    return(
        <>
        <h1>Main Dashboard of: {supplier.name}</h1>
        <h3>View Invoices:</h3>
        <TotalRevenueInvoices /> 
        <TotalValueInvoices/>
        <ThisMonthInvoicesValue/>
        <InvoicesList />
        </>
    )
}