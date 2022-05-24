import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";


const Getstarted = () => {

  const router = useRouter();

      const gotoSignin = () => {
        router.push("/sidesignin");
      };

  return (
    <Card border="dark" style={{width:"80vh", marginLeft:"12px", marginTop:"60px"}}>
    <Card.Header>Welcome</Card.Header>
    <Card.Body>
      <Card.Title>Get started now!</Card.Title>
      <Card.Text>
        Sign in now to rent a room now!
      </Card.Text>
      <Button variant="dark" onClick={gotoSignin}>Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Getstarted;