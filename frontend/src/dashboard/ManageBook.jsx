import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // Delete book function
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert('Book deleted successfully');
      // Update the state to remove the deleted book
      setAllBooks(allBooks.filter(book => book._id !== id));
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      {/* Table for book data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head className='text-left'>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>
        
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row key={book._id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10.00</Table.Cell> {/* Assuming price is static */}
              <Table.Cell>
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="mr-4">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageBook;
