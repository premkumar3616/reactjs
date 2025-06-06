import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css';
import { useState, useEffect } from 'react';

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentslide, setCurrentslide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchimages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(geturl);
      const data = await response.json();
      setImages(data);
      setLoading(false);
      setError(null);
    } catch (e) {
      setLoading(false);
      console.error("Error fetching images:", e.message);
      setError(e.message);
    }
  }

  function handleNext() {

    setCurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);

  }
  function handlePrevious() {
    setCurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  }
  useEffect(() => {

    if (url !== '') fetchimages(`${url}?page=${page}&limit=${limit}`);
  },
    [url]);
  // console.log(images);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <div className='slider'>
    <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentslide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
    <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
    <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentslide === index
                    ? "current-indicator"
                    : "current-indicator hide-indicator"
                }
                onClick={() => setCurrentslide(index)}
              ></button>
            ))
          : null}
      </span>


  </div>


}