import { useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";


// this component will show total amlount of already paid invoices
export default function TotalRevenueInvoices(){

    // function to sum all paid invoices fetched from API
    const [revenue, setRevenue] = useState(null)
    const revenues = () => {
        const value = invoices.reduce((a, b) => (a + b), 0)
        console.log(value)
        setRevenue(value)
    }
    
    
    //state to store all paid invoices into
    const [invoices, setInvoices] = useState([])
    const url = 'api/invoices/paid' ;


    //currently logged in user
    const fetchData = async() => {
        const resp = await fetch(url);
        const data = await resp.json();
        setInvoices(data);
    };

    //watching fetch data and also revenues function 
    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        revenues();
    }, [invoices]);

    return(
        
        <Card
            bg='Secondary'
            key='Secondary' 
            text="dark"
            style={{ width: '14rem' }}
            className="mb-2"
        >
            <CardHeader>
                Total Revenue:
            </CardHeader>
            <Card.Body>
             <Card.Title>{revenue} CZK</Card.Title>
              </Card.Body>
        </Card>
    )
}