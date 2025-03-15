import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Project = ({ heading,projectsData }) => {
  return (
    <Container id="projects" className="mt-5">
      <h2 className="text-center mb-4">{heading}</h2>
      <Row className="d-flex justify-content-center">
        {projectsData.length ? (
          projectsData.map((project, index) => (
            <Card key={index} className="m-2 p-3" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text as="div">
                  <ul>
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-center">No projects available</p>
        )}
      </Row>
    </Container>
  );
};

export default Project;
