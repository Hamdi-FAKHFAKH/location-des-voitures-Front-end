import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import '../../assets/css/pagination.css'
import Cartvoiture from './Cartvoiture';
import { Container, Row } from 'reactstrap';

import { Carcontext } from 'context/Carcontext';

// Example items, to simulate fetching from another resources.


//itemsPerPage nombre de itmes afficher dans chaque page
 
export function PaginatedItems({ itemsPerPage }) {
  const {voitures} = useContext(Carcontext);
  function Items({ currentItems }) {
    return (
      <>
      <Container style={{marginTop:'40px'}}>
        <Row>
        { currentItems &&
          currentItems.map((l,index) => (    
              <Cartvoiture key={`${l.matricule} ${index}`} marque={l.marque} id ={l._id} prix={l.prix_par_heure} score={3} desc = {l.description} img={l.imageUrl} matricule={l.matricule} titre={'louer'}/>
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

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    if(voitures){
    setCurrentItems(voitures.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(voitures.length / itemsPerPage));}
  }, [itemOffset, itemsPerPage,voitures]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % voitures.length;
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