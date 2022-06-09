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
    label: 'view 1',
    imgPath:
      'https://blackmonarchhotel.com/wp-content/uploads/2019/05/bathory2.jpg',
  },
  {
    label: 'view 2',
    imgPath:
      'https://blackmonarchhotel.com/wp-content/uploads/2019/05/E4622C65-FF10-4B48-A1CA-FA507FD2AD50.jpg',
  },
  {
    label: 'view 3',
    imgPath:
      'https://blackmonarchhotel.com/wp-content/uploads/2019/05/8CA1C422-2375-4924-B616-D5779DAE3C1D.jpg',
  },
  {
    label: 'view 4',
    imgPath:
      'https://blackmonarchhotel.com/wp-content/uploads/2019/05/B5DD52A4-4323-4B87-AA24-915D7C7995E0.jpg',
  },
];

function Listcarousel3() {
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

      const gotoRentform3 = () => {
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

export default Listcarousel3;
