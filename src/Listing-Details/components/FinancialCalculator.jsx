import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function FinancialCalculator({ carDetails }) {

  const [carPrice, setCarPrice] = useState(0);
  const [intrestRate, setIntrestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downpayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  
    const CalculateMonthlyPayment=()=>{
        const Principal=carPrice-downpayment;
        const MonthlyInterestRate=intrestRate/1200
        const MonthlyPayment=(Principal*MonthlyInterestRate*Math.pow(1+MonthlyInterestRate,loanTerm))/(Math.pow(1+MonthlyInterestRate,loanTerm)-1)
        setMonthlyPayment(MonthlyPayment.toFixed(2))
    }

  return (
    <div className="p-10 shadow-md mt-7 rounded-xl border">
      <h2 className="font-medium text-2xl">Financial Calculator</h2>

      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label>Price $</label>
          <Input type="number" onChange={(e)=>setCarPrice(e.target.value)}/>
        </div>
        <div className="w-full">
          <label>Interest Rate</label>
          <Input type="number" onChange={(e)=>setIntrestRate(e.target.value)}/>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label>Loan Term (Month)</label>
          <Input type="number" onChange={(e)=>setLoanTerm(e.target.value)}/>
        </div>
        <div className="w-full">
          <label>Down Payment</label>
          <Input type="number" onChange={(e)=>setDownPayment(e.target.value)}/>
        </div>
      </div>
      {monthlyPayment>0&& <h2 className="font-bold text-xl mt-5">Your Monthly Payment is : <span className="text-3xl">{monthlyPayment}</span></h2>}
      <Button className="w-full mt-10" size="lg" onClick={CalculateMonthlyPayment}>
        Calculate
      </Button>
    </div>
  );
}

export default FinancialCalculator;