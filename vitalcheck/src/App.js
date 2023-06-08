// Importing modules
import { React, useState } from "react";
import "./App.css";
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InstantMessage from './InstantMessage.js';

import NavbarDefault from "./components/navbarDefault";


function App() {

  const Sex = [
    {
      value: 'Male',
      parsed: 1
    },
    {
      value: 'Female',
      parsed: 0
    }
  ]

  const ExAng = [
    {
      value: 'Yes',
      parsed: 1
    },
    {
      value: 'No',
      parsed: 0
    }
  ]

  const FBS = [
    {
      value: "greater than 120 mg/dl",
      parsed: 1
    },
    {
      value: 'less than or equal to 120 mg/dl',
      parsed: 0
    }
  ]

  const ChestPain = [
    {
      value: "Typical Angina",
      parsed: 0
    },
    {
      value: "Atypical Angin",
      parsed: 1
    },
    {
      value: "Non-anginal Pain",
      parsed: 2
    },
    {
      value: "No Pain (Asymptomatic)",
      parsed: 3
    }
  ]
  
  const Rest_ECG = [
    {
      value: "Normal",
      parsed: 0
    },
    {
      value: "ST-T wave abnormality",
      parsed: 1
    },
    {
      value: "Probable or Definite Left Ventricular Hypertrophy",
      parsed: 2
    }
  ]

  const Slope = [
    {
      value: "Upsloping",
      parsed: 2
    },
    {
      value: "Flat",
      parsed: 1
    },
    {
      value: "Downsloping",
      parsed: 0
    }
  ]

  const CAA = [
    {
      value: "0",
      parsed: 0
    },
    {
      value: "1",
      parsed: 1
    },
    {
      value: "2",
      parsed: 2
    },
    {
      value: "3",
      parsed: 3
    }
  ]

  const Thal = [
    {
      value: "Normal",
      parsed: 2
    },
    {
      value: "Fixed Defect",
      parsed: 1
    },
    {
      value: "Reversible Defect",
      parsed: 3
    }
  ]

  const buttonStyle = { mt:1, mb:1, bgcolor: '#7B1113', ":hover": {bgcolor: "#5A0C0E", color: 'white'} };
  const cardStyle =  { maxWidth: 450, padding: "10px 5px", margin: "0 auto" };

  const [age, setAge] = useState(0);
  const [sex, setSex] = useState(0);
  const [cp, setCp] = useState(0);
  const [trtbps, setTrtbps] = useState(0);
  const [chol, setChol] = useState(0);
  const [fbs, setFBS] = useState(0);
  const [restecg, setRestecg] = useState(0);
  const [thalachh, setThalachh] = useState(0);
  const [oldpeak, setOldPeak] = useState(0);
  const [slp, setSlp] = useState(0);
  const [caa, setCaa] = useState(0);
  const [thall, setThall] = useState(0);
  const [exng, setExng] = useState(0);
  const [instant, setInstant] = useState(false); 
  const [severity, setSeverity] = useState(''); 
  const [message, setMessage] = useState('');

  const handleSubmit = async () =>{
    const details = {
      "age" : age,
      "sex" : sex,
      "cp" : cp,
      "trtbps" : trtbps,
      "chol" : chol,
      "fbs" : fbs,
      "restecg" : restecg,
      "thalachh" : thalachh,
      "oldpeak" : oldpeak,
      "slp" : slp,
      "caa" : caa,
      "thall" : thall,
      "exng" : exng
    }
    
    const detailsJSON = JSON.stringify(details);
    const data = await (
      await fetch(
        `http://localhost:8000/${detailsJSON}`
      )
    ).json();
    console.log(details);
    if(data.output === "1"){
      setMessage("You are at high risk of heart attacks");
      setSeverity("error")
      setInstant(true);
    }else{
      setMessage("You are at low risk of heart attacks");
      setSeverity("success")
      setInstant(true);
    }
    
    makeTimer();
    console.log(data);
  }

  const makeTimer = () => {
    setInterval(() => {
      setInstant(false)
    }, 5000)
  }

  return (
    <div className="App">
      
      <NavbarDefault /> 
      
      <Box style={{ display:'flex', justifyContent:'center' }}>
        <Grid sx={{ mt:5, mb:5 }}>
          <Card sx={{ boxShadow:5, mb:3 }} style={cardStyle}>
            <CardContent>

              {instant ?  <InstantMessage sev = {severity} message = {message} /> : `` }

              <Typography align = "center" fontWeight="bold" component="h1" variant="h5">
                HEART ATTACK RISK CHECKER
              </Typography>

              <Typography align="center" sx={{ mt:2, mb:3 }}>
                Check if you are at risk to have a heart attack!
              </Typography>

              <form>
                <Grid container spacing={1}>

                  {/* AGE TEXT BOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField label="Age" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      setAge(parseInt(event.target.value));
                    }}
                    />
                  </Grid>

                  {/* SEX TEXT BOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField select label="Sex" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      Sex.map((option) => (option.value === event.target.value ? setSex(option.parsed):""))
                    }}
                    >
                      {Sex.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  
                  {/* CHEST PAIN TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField select label="Type of Chest Pain" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      ChestPain.map((option) => (option.value === event.target.value ? setCp(option.parsed):""))
                    }}
                    >
                      {ChestPain.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* RESTING BLOOD PRESSURE TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField label="Resting Blood Pressure (in mm Hg)" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      setTrtbps(parseInt(event.target.value));
                    }}
                    />
                  </Grid>

                  {/* CHOLESTEROL TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField label="Cholestoral (in mg/dl)" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      setChol(parseInt(event.target.value));
                    }}
                    />
                  </Grid>

                  {/* FASTING BLOOD SUGAR TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField select label="Fasting Blood Sugar" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      FBS.map((option) => (option.value === event.target.value ? setFBS(option.parsed):""))
                    }}
                    >
                      {FBS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* REST ECG TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField select label="Resting Electrocardiographic" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      Rest_ECG.map((option) => (option.value === event.target.value ? setRestecg(option.parsed):""))
                    }}
                    >
                      {Rest_ECG.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* MAX HEART RATE TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField label="Maximum Heart Rate" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      setThalachh(parseInt(event.target.value));
                    }}
                    />
                  </Grid>

                  {/* EXERCISE INDUCED ANGINA TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField select label="Chest Pains after Exercise?" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      ExAng.map((option) => (option.value === event.target.value ? setExng(option.parsed):""))
                    }}
                    >
                      {ExAng.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* OLDPEAK TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField label="OldPeak (ST depression induced by exercise relative to rest?)" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      setOldPeak(parseInt(event.target.value));
                    }}
                    />
                  </Grid>

                  {/* SLOPE TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField select label="Slope (of the Peak Exercise ST Segment)" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      Slope.map((option) => (option.value === event.target.value ? setSlp(option.parsed):""))
                    }}
                    >
                      {Slope.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* CAA TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField select label="Number of Major Vessels" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      CAA.map((option) => (option.value === event.target.value ? setCaa(option.parsed):""))
                    }}
                    >
                      {CAA.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* THAL TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField select label="Thallium Stress Test" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                      event.preventDefault();
                      Thal.map((option) => (option.value === event.target.value ? setThall(option.parsed):""))
                    }}
                    >
                      {Thal.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                      ))}
                    </TextField> 
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" sx={buttonStyle} fullWidth
                    onClick={e => {
                      e.preventDefault()
                      handleSubmit()
                    }}
                    >
                    Submit
                    </Button>
                  </Grid>

                </Grid>
              </form>
              
            </CardContent>
          </Card>
        </Grid>
      </Box>  
    </div>
  );
}
 
export default App;