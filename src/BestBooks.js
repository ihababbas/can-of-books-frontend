import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
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
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      
     
 
      <div>
         <h1>Books System</h1>
         <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

{this.state.books.length ? (
  <p>Book Carousel coming soon</p>
) : (
  <h3>No Books Found :(</h3>
)}
         {this.state.books.map(item =>{
           return(
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
              <h3>tilte : {item.title}</h3>
                <p>{item.description}</p>
                <h6>{item.status}</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>tilte : {item.title}</h3>
                <p>{item.description}</p>
                <h6>{item.status}</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
      
              <Carousel.Caption>
              <h3>tilte : {item.title}</h3>
                <p>{item.description}</p>
                <h6>{item.status}</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
           )
         })}
       </div>
    )
  }
}

export default BestBooks;
