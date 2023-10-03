import React from 'react';
import Currency from '../hooks/Currency';
import App from '../App';

function Input(props) {


    const currencyInfo = Currency(props.currency)
    const cur = Currency("inr")
    const Options=Object.keys(cur);
    // console.log(options)
    

    // const Calculate=(event)=>{
    //     setValueto(props.value * currencyInfo[to])
    //   }

    const writing = (event) => {
        if (props.label1 === "From") {
            {props.setValuefrom(event);}
            props.setValueto(props.value * currencyInfo[props.To] )
        }
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm w-[40vw] h-[23vh]  flex relative ${(props.label1 === "To") ? "-top-[15vh]" : "top-[15vh]"}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {props.label1}
                </label>
                <input
                    className="outline-none w-full bg-gray-200 p-1.5 rounded-md"
                    type="number"
                    placeholder="Amount"
                    onChange={(event)=>{
                        console.log(event.target.value)
                        writing(event.target.value)}} // Add this line
                    value={props.value}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={props.currency}
                    onChange={(props.label1==="From")?(props.CurrencyChangeFrom):(props.CurrencyChangeTo)}
                >
                    {Options.map((currencies) => (
                            <option value={currencies}>
                            {currencies}
                            </option>
                        ))}
                    
                </select>
            </div>
        </div>
    );
}

export default Input;
