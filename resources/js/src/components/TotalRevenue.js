import { useEffect,useState } from "react";

// this component will show total amlount of already paid invoices
export default function TotalRevenueInvoices(){

    // function to sum all paid invoices fetched from API
    let sum = 0; 
    const revenues = () => {
    for (let i = 0; i < invoices.length; i++) {
        sum += invoices[i];
    }return <>{sum}</>
}
    //state to store all paid invoices into
    const [invoices, setInvoices] = useState([])
    const url = 'api/invoices/paid' ;


    //currently logged in user
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setInvoices(data);
    };

    //watching fetch data and also revenues function 
    useEffect(() => {
        fetchData(), revenues();
    }, []);

  

    return(
        <h4>Total Revenue: {revenues()} CZK</h4>
    )
}