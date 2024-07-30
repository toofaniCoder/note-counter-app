import {
  Container,
  Paper,
  Typography,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TextField,
  Box,
  Button,
  Stack,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import { blue } from "@mui/material/colors";

function App() {
  const [amount, setAmount] = useState({
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
  });

  const handleChange = (e) => {
    setAmount((prevAmount) => ({
      ...prevAmount,
      [e.target.name]: e.target.value,
    }));
  };

  const handleIncrease = (e) => {
    setAmount((prevAmount) => ({
      ...prevAmount,
      [e.target.name]: Number(amount[e.target.name]) + 1,
    }));
  };
  const handlDecrease = (e) => {
    Number(amount[e.target.name]) >0 && setAmount((prevAmount) => ({
      ...prevAmount,
      [e.target.name]: Number(amount[e.target.name]) - 1,
    }));
  };

  const getTotalAmountValue = () => {
    return Object.keys(amount)
      .map((key) => Number(key) * amount[key])
      .reduce((pv, cv) => pv + cv);
  };
  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
          ₹ Note Counter App 💰
        </Typography>

        <TableContainer component={Paper} elevation={0} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>₹ Amount</TableCell>
                <TableCell>Number of Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(amount).map((amountName) => (
                <TableRow key={amountName}>
                  <TableCell>₹{amountName}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} spacing={2}>
                      <Button
                        color="error"
                        variant="outlined"
                        name={amountName}
                        onClick={handlDecrease}
                      >
                        Less
                      </Button>
                      <TextField
                        name={amountName}
                        value={amount[amountName]}
                        onChange={handleChange}
                        size="small"
                        type="number"
                      />
                      <Button
                        color="success"
                        variant="outlined"
                        name={amountName}
                        onClick={handleIncrease}
                      >
                        Add
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ p: 2 , bgcolor:blue[50], color:blue[900]}}> Your Total Amount: ₹{getTotalAmountValue()}</Box>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default App;
