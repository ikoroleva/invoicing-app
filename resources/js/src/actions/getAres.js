import axios from "axios";
import * as txml from "txml/dist/txml";

const getAres = async (ico) => {
    try {
        const url_ares = `http://www.invoicing-app.test/api/ares/${ico}`;
        const response = await axios.get(url_ares);
        const data = txml.simplify(txml.parse(response.data));

        //example to get data from response: Name of company
        console.log(data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:OF`]);

        // -- ICO -->
        // console.log(response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ICO`]);

        // //DIC:
        // console.log(response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:DIC`]);

        // // Company name
        // console.log(response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:OF`]);

        // Company address_street name
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:NU`]
        // );

        // // Company address_building number
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:CD`]
        // );

        // // Company address_orientation number
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:CO`]
        // );

        // Company address_PSC
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:PSC`]
        // );

        // Company address_City - not ready yet
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:PSC`]
        // );

        // Registered at Trade court
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ROR`][`D:SZ`][
        //     `D:SD`
        //   ][`D:T`]
        // );

        // Registered at Trade court_file number
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ROR`][`D:SZ`][
        //     `D:OV`
        //   ]
        // );
    } catch (error) {
        console.log(error); // information about the error
        console.log(error.response); // the response object from the failed request
    }
};

export default getAres;
