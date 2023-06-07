// Importing modules
import { React, useEffect } from "react";
import "./App.css";
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import NavbarDefault from "./components/navbarDefault";


function App() {
    useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:8000"
        )
      ).json();

      console.log(data)
    };

    dataFetch();
    }, []);


  const Sex = [
    {
      value: 'Male',
    },
    {
      value: 'Female',
    }
  ]

  const ExAng = [
    {
      value: 'Yes',
    },
    {
      value: 'No',
    }
  ]

  const FBS = [
    {
      value: "greater than 120 mg/dl",
    },
    {
      value: 'less than or equal to 120 mg/dl',
    }
  ]


  const ChestPain = [
    {
      value: "Typical Angina",
    },
    {
      value: "Atypical Angin",
    },
    {
      value: "Non-anginal Pain",
    },
    {
      value: "No Pain (Asymptomatic)",
    }
  ]
  
  const Rest_ECG = [
    {
      value: "Normal",
    },
    {
      value: "ST-T wave abnormality",
    },
    {
      value: "Probable or Definite Left Ventricular Hypertrophy",
    }
  ]

  const Slope = [
    {
      value: "Upsloping",
    },
    {
      value: "Flat",
    },
    {
      value: "Downsloping",
    }
  ]
  const CAA = [
    {
      value: "0",
    },
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    }
  ]

  const Thal = [
    {
      value: "Normal",
    },
    {
      value: "Fixed Defect",
    },
    {
      value: "Reversible Defect",
    }
  ]

  const buttonStyle = { mt:1, mb:1, bgcolor: '#7B1113', ":hover": {bgcolor: "#5A0C0E", color: 'white'} };
  const cardStyle =  { maxWidth: 450, padding: "10px 5px", margin: "0 auto" };

  return (
    <div className="App">
      
      <NavbarDefault /> 
      
      <Box style={{ display:'flex', justifyContent:'center' }}>
        <Grid sx={{ mt:5, mb:5 }}>
          <Card sx={{ boxShadow:5, mb:3 }} style={cardStyle}>
            <CardContent>

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
                    }}
                    />
                  </Grid>

                  {/* SEX TEXT BOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField select label="Sex" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
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
                    }}
                    />
                  </Grid>

                  {/* CHOLESTEROL TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField label="Cholestoral (in mg/dl)" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
                    }}
                    />
                  </Grid>

                  {/* FASTING BLOOD SUGAR TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField select label="Fasting Blood Sugar" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
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
                    }}
                    />
                  </Grid>

                  {/* EXERCISE INDUCED ANGINA TEXTBOX */}
                  <Grid xs={12} sm={6} item>
                    <TextField select label="Chest Pains after Exercise?" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
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
                    }}
                    />
                  </Grid>

                  {/* SLOPE TEXTBOX */}
                  <Grid item xs={12}>
                    <TextField select label="Slope (of the Peak Exercise ST Segment)" defaultValue = "" variant="outlined" helperText = "" fullWidth required 
                    onChange={(event) => {
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