import SearchBar from "./SearchBar";
import Output from "./Output";
import React, { useState, useEffect, useRef } from 'react';
export default function Main() {
    const [country, setCountry] = useState<String>('');
    const [buttonPress, setButtonPress] = useState<Boolean>(false);

    var prevPress = false;
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("In fetchData " + country);
            if (country === '') return;
            const url = "https://restcountries.com/v3.1/name/" + country;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
                setData(result);


            } catch (error: any) {
                console.error(error.message);
            }
        }

        if (prevPress == false) {

            prevPress = true;
            fetchData();
            setButtonPress(false);
            // console.log("End of useEffect " + prevPress + " " + buttonPress);
            prevPress = false;

        }


    }, [buttonPress]);
    function handleSubmit() {
        setButtonPress(true);

        return;


    }

    function handleInputChange(country: string) {
        setCountry(country);

        return;

    }
    return (<>
        <SearchBar onValueChange={handleInputChange} />
        <button onClick={() => handleSubmit()}>Submit</button>
        {data != null ? data.map((cdata: any, index: any) => (
            <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                <Output countryName={cdata.name.common.toString()}
                    region={cdata.region.toString()}
                    subregion={cdata.subregion?.toString()}
                    population={cdata.population.toString()}
                    flagUrl={cdata.flags.svg.toString()} />
            </div>

        )) : <div />}
    </>);
}