import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import BookingForm from "./BookingForm";
import './ShowSummary.css'

function ShowSummary() {
  const [show, setShow] = useState({});
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`).then((response) => {
      setShow(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>Summary</h1>
      <Card>
        <Card.Body>
          <Card.Title>{show.name}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: show.summary }}></Card.Text>
          <Button variant="primary" onClick={() => setShowForm(true)}>Book Ticket</Button>
        </Card.Body>
      </Card>
      {showForm && <BookingForm show={show} />}
    </div>
  );
}

export default ShowSummary;
