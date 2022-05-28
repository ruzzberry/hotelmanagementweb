import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useRouter } from "next/router";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://via.placeholder.com/540x352.png/FDE5B4/000000/?text=Ruzle%27s+Placeholder+1',
  },
  {
    label: 'Bird',
    imgPath:
      'https://via.placeholder.com/540x352.png/FFCBA5/000000/?text=Ruzle%27s+Placeholder+2',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://via.placeholder.com/540x352.png/FFC8C4/000000/?text=Ruzle%27s+Placeholder+3',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://via.placeholder.com/540x352.png/FF9899/000000/?text=Ruzle%27s+Placeholder+4',
  },
];

function Listcarousel2() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const router = useRouter();

      const gotoRentform2 = () => {
        router.push("/");
      };
      
  return (
    <Box sx={{ maxHeight:"400px",maxWidth: "540px", flexGrow: 1, float:"right",}}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "352px",
                  display: 'block',
                  maxWidth: "540px",
                  overflow: 'hidden',
                  width: '100%',
                  borderTopRightRadius:"20px",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
        borderBottomRightRadius:"20px", 
        backgroundColor:"#FFFFFF",}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Listcarousel2;
