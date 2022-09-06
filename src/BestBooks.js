import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import BookFormModal from "./BookFormModal";
import Button from 'react-bootstrap/Button';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     new : [],
      books: []
    }
  }
  closeModal = () => {
    this.setState({showForm: false}); 
  }

  showModal = () => {
    this.setState({showForm: true}); 
  } 
  componentDidMount = () => {
    axios
    .get(`http://localhost:3001/books`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  addbook = (newBook) =>{
    console.log(newBook)
    console.log("done")
   const book = newBook;
    axios
    .post(`http://localhost:3001/books`,book)
    .then(result =>{
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  deleteBook= (id) => {
    axios
    .delete(`http://localhost:3001/book/${id}`) //http://localhost:3010/deleteCat?id=${id}
    .then(result =>{
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */
return (
  <div>

<Button id="bookbutton" style = {{marginLeft: '3.5rem'}} variant="primary" onClick={() => this.setState({ showForm: true })}>Add a New Book</Button>
      {this.state.showForm && <BookFormModal 
      handleCreateBook={this.addbook} 
      closeModal={this.closeModal}
      showModal={this.showModal}
      />}

        {this.state.books.length ? (
          <div id="secondaryDiv" style={{ width: "400px" }}>
            <Carousel fade>
              {this.state.books.map((item) => {
                return(
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://play-lh.googleusercontent.com/DmpYQrVcldrDuz5uyATqGbNvTALsJ1Bg3fpXM0p-VsRNM19osEB9-_ByvdjSbTvZQg=w450-h300-rw"
                    alt="Slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                    <Button
                          variant="light"
                          onClick={() => this.deleteBook(item._id)}
                        >
                          Delete This Book!
                        </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      
      </div>
    );
  }
}

export default BestBooks;
