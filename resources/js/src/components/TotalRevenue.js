import { useEffect,useState } from "react";


export default function TotalRevenue(){

    let sum = 1; 
    const revenues = (array) => {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }}

    const [invoices, setInvoices] = useState([])
    
    const url = 'api/invoices/paid' ;


    //currently logged in user
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setInvoices(data);
    };


        useEffect(() => {
        fetchData(), revenues(invoices);
    }, []);

    // const revenues = (array) => {
    // for (let i = 0; i < array.length; i++) {
          
    //     sum += array[i];
    //     return sum;
    // }}

    console.log(invoices);
    console.log(sum);

    return(
        <h1>Total Revenue</h1>
    )
}