import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homevalue, downpayment, loanterm, interestrate, loanamount } = data;
  const totalloanmonths = loanterm * 12;
  const interestpermonth = interestrate / 100 / 12;
  const monthlypayment =
    (loanamount *
      interestpermonth *
      (1 + interestpermonth) ** totalloanmonths) /
    ((1 + interestpermonth) ** totalloanmonths - 1);
  const totalinterestgenerated = monthlypayment * totalloanmonths - loanamount;

  const piechartdata = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homevalue, totalinterestgenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Stack>
        <Typography textAlign="center" variant="h6">
          Monthly Payment : $ {monthlypayment.toFixed(2)}
        </Typography>
        <Stack direction="row" justifyContent="center">
          <div>
            {" "}
            <Pie data={piechartdata}></Pie>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Result;
