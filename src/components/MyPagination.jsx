import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const MyPagination = props => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink 
        first href="#" 
        onClick={() => props.goTo(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" onClick={() => props.prev()} />
      </PaginationItem>
      {[...Array(props.pagesNb)].map((e, i) => (
        <PaginationItem key={i}>
          <PaginationLink href="#" onClick={() => props.goTo(i + 1)}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink next href="#" onClick={() => props.next()} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          href="#"
          onClick={() => props.goTo(props.pagesNb)}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default MyPagination;
