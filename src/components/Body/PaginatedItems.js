import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../../assets/css/pagination.css'
import Cartvoiture from './Cartvoiture';
import {liste} from '../../assets/data/listcar'
import { Container, Row } from 'reactstrap';
// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
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
  }, [voitures]);
  return (
    <>
    <Container style={{marginTop:'40px'}}>
      <Row>
      { currentItems &&
        currentItems.map((l,index) => (
            voitures ?
            voitures.map((l, index)=>
            <Cartvoiture key={`${voitures.matricule} ${index}`} marque={l.marque} prix={l.prix_par_heure} score={l.color} desc = {l.desc} img={l.imageUrl} />
            ) : null
        ))}
    </Row>
    </Container>
    </>
  );
}
//itemsPerPage nombre de itmes afficher dans chaque page
 
export function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(liste.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(liste.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % liste.length;
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
