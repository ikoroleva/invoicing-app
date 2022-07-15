import { useState, useEffect } from "react";
export default function InvoicesList() {

    //state to store all  invoices into - for curently logged in user
    const [invoices, setInvoices] = useState(null);
    const url = 'api/invoices/suppliers/allinvoices';


    //currently logged in user
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setInvoices(data);
    console.log(invoices)
    };

    //use effect hook to fetch the data
    useEffect(() => {
    fetchData();
  },);

  return(
    <p>testing</p>
  )

}