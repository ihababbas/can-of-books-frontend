import React from "react";
import Card from 'react-bootstrap/Card';


class Profile extends React.Component {
  
  render() {
    return (
        <div id="profileCard">
        <Card  style={{ width: '18rem' }}>
      <Card.Img className="img-me" variant="top" src={require('./ihab.jpg')} />
      <Card.Body>
        <Card.Title>ihab abbas</Card.Title>
        <Card.Text>
        hope thing be better and make a diffrance on the world
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    )
  }
}

export default Profile;