import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import './BookingForm.css'
function BookingForm({ show }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("booking", JSON.stringify({
      showName: show.name,
      showId: show.id,
      name,
      email,
      phone,
    }));
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="showName">
        <Form.Label>Show Name:</Form.Label>
        <Form.Control type="text" value={show.name} readOnly />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Your Name:</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default BookingForm;
