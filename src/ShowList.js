import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import './ShowList.css'
function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      setShows(response.data);
    });
  }, []);

  return (
    <div>
      <h1>TV Shows List</h1>
      <div className="show-list">
        {shows.map((show) => (
          <Card key={show.show.id} className="show-card">
            <Card.Img variant="top" src={show.show.image?.medium} />
            <Card.Body>
              <Card.Title>{show.show.name}</Card.Title>
              <Card.Text dangerouslySetInnerHTML={{ __html: show.show.summary }}></Card.Text>
              <Link to={`/show/${show.show.id}`}>
                <Button variant="primary">Show Summary</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
