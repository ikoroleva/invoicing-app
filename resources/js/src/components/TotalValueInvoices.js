import { useEffect,useState } from "react";

// this component will show total amlount of already paid invoices
export default function TotalValueInvoices(){

    // function to sum all paid invoices fetched from API
    let sum = 0; 
    const sumOfIssuedInvoices = () => {
    for (let i = 0; i < invoices.length; i++) {
        sum += invoices[i];
    }return <>{sum}</>
}
    //state to store all paid invoices into
    const [invoices, setInvoices] = useState([])
    const url = 'api/invoices/issued';


    //currently logged in user
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setInvoices(data);
    };

    //watching fetch data and also revenues function 
    useEffect(() => {
        fetchData(), sumOfIssuedInvoices();
    }, []);

  

    return(
        <h1>Total value of issueed invoices: {sumOfIssuedInvoices()} CZK</h1>
    )
}