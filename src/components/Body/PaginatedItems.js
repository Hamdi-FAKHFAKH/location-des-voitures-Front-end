import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../../assets/css/pagination.css'
import Cartvoiture from './Cartvoiture';
import { Container, Row } from 'reactstrap';
// Example items, to simulate fetching from another resources.


//itemsPerPage nombre de itmes afficher dans chaque page
 
export function PaginatedItems({ itemsPerPage }) {
  function Items({ currentItems }) {
    return (
      <>
      <Container style={{marginTop:'40px'}}>
        <Row>
        { currentItems &&
          currentItems.map((l,index) => (    
              <Cartvoiture key={`${l.matricule} ${index}`} marque={l.marque} prix={l.prix_par_heure} score={3} desc = {l.description} img={l.imageUrl} matricule={l.matricule} titre={'louer'} id={l._id}/>
          ))}
      </Row>
      </Container>
      </>
    );
  }
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [ voitures, setVoitures ] = useState(null);

  const getVoitures = () => {
    const requestOptions = {
        method: 'Get',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        },
    };

    fetch('http://localhost:3000/api/voiture/', requestOptions)
    .then(response => response.json())
    .then(data => {
        setVoitures(data)
        // store.dispatch( signIn() )
        // console.log("store: ",store.getState())
        // setToken(data.token);
        // setUserId(data.clientId);
    })
    .catch(err => console.error(err));
    }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  useEffect(() => {
    getVoitures();
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    if(voitures){
    setCurrentItems(voitures.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(voitures.length / itemsPerPage));}
  }, [itemOffset, itemsPerPage,voitures]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % voitures.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          renderOnZeroPageCount={null}
          className='pag'
      />
    </>
  );
}
