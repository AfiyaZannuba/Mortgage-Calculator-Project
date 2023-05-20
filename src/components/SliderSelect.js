import React from "react";
import SliderComponent from "./common/sliderComponent";

const SliderSelect = ({data,setData}) => {
  console.log(data)
  const bank_limit = 10000
  return (
    <>
      <SliderComponent
        min={1000}
        max={bank_limit}
        defaultValue={data.homevalue}
        value={data.homevalue}
        marks
        step={100}
        label="Home Value"
        unit="$"
        amount={data.homevalue}
        onChange={(e, value) => setData({
          ...data,
          downpayment: value * 0.2,
          loanamount: value * 0.8,
          homevalue: value
        })}
      />
      <SliderComponent
        label="Down Payment"
        unit="$"
        amount={data.downpayment}
        min={0}
        max={data.homevalue}
        defaultValue={data.downpayment}
        value={data.downpayment}
        marks
        step={100}
        onChange={(e,value)=>setData({
          ...data, 
          loanamount: data.homevalue - value,
          downpayment: value
        })}
      />
      <SliderComponent
        label="Loan Amount"
        unit="$"
        amount={data.loanamount}
        min={0}
        max={data.homevalue}
        defaultValue={data.loanamount}
        value={data.loanamount}
        marks
        step={100}
        onChange={(e,value)=>setData({...data, loanamount: value})}
      />
        <SliderComponent
        label="Interest Rate"
        unit="%"
        amount={data.interestrate}
        min={2}
        max={18}
        defaultValue={data.interestrate}
        value={data.interestrate}
        onChange={(e,value)=>setData({...data, interestrate: value})}
        marks
        step={0.5}
      />
    </>
  );
};

export default SliderSelect;
