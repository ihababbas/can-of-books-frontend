import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

class UpdateBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book._id,
      title: this.props.book.title,
      description: this.props.book.description,
      status: this.props.book.status,
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleUpdateBook(this.state);
    this.props.closeUpdateModal();
  };

  handleTitleChange = (e) => this.setState({ title: e.target.value });

  handleDescriptionChange = (e) =>
    this.setState({ description: e.target.value });

  handleStatusChange = (e) => this.setState({ status: e.target.value });

  render() {
    console.log(this.props);
    return (
      <Container>
        <Modal show={this.props.showUpdateModal} >
          <Modal.Header closeButton onClick={this.props.closeUpdateModal} />
          <Modal.Title style={{textAlign:"center"}}>Update your book</Modal.Title>
          <Form onSubmit={this.onSubmit} style={{paddingLeft:".5rem", paddingRight:".5rem", textAlign:"center"}}>
            <Form.Group controlId="formTitle">
              <Form.Label>Book's Title</Form.Label>
              <Form.Control style={{width:"auto", marginLeft:"30%", marginRight:"30%"}}
                type="string"
                placeholder={this.props.book.title}
                onChange={this.handleTitleChange}
                defaultValue={this.props.book.title}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description of the book</Form.Label>
              <Form.Control style={{width:"auto", marginLeft:"30%", marginRight:"30%"}}
                type="string"
                placeholder={this.props.book.description}
                onChange={this.handleDescriptionChange}
                defaultValue={this.props.book.description}
              />
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>Status of the book</Form.Label>
              <Form.Control style={{width:"auto", marginLeft:"30%", marginRight:"30%"}}
                type="string"
                placeholder={this.props.book.status}
                onChange={this.handleStatusChange}
                defaultValue={this.props.book.status}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Update your book!
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    );
  }
}

export default UpdateBookModal;