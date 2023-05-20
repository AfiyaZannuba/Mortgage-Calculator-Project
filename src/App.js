import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  const [data, setData] = useState({
    homevalue: 3000,
    downpayment: 3000 * 0.2,
    loanamount: 3000 * 0.8,
    loanterm: 5,
    interestrate: 5
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} marginRight="50px">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
