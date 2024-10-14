import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBook = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, Category, bookDescription } = useLoaderData();
  const bookCategories = ["Fiction", "Non-Fiction", "History"];
  const [selectedBookCategory, setSelectedBookCategory] = useState(Category || bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const Category = selectedBookCategory;  // Use state value here
    const bookDescription = form.bookDescription.value;

    const bookObj = { bookTitle, authorName, imageURL, Category, bookDescription };
    console.log(bookObj);
    // Optionally send data to an API endpoint
    // await fetch('/updateBook', { method: 'POST', body: JSON.stringify(bookObj) });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit Book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        <br />

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputStates" value="Category" />
            </div>
            <Select
              id='inputStates'
              name='Category'
              className='w-full rounded'
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>
        <br />

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            className='w-full'
            id="bookDescription"
            name="bookDescription"
            placeholder="Book Description..."
            required
            rows={4}
            defaultValue={bookDescription}
          />
        </div>

        <div>
          <Button
            type="submit"
            className="mt-5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-3 py-1 text-center w-full"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
