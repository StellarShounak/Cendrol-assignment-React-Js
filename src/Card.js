import React, { useState } from 'react';

const Card = ({ category }) => {
  const categoryStyle = {
    color: '#2C5364',
    fontSize: '30px',
  };

  const descriptionStyle = {
    color: '#2C5364',
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCategoryClick = () => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setShowModal(true);
    } else {
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <div className="card" onClick={handleCategoryClick}>
        <h1 className="category" style={categoryStyle}>
          {category}
        </h1>
        <p className="description" style={descriptionStyle}>
          Unlimited jokes on {category}
        </p>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCategory}</h2>
            <p>Modal Content</p>
            <button className="close-button" onClick={closeModal}>
              &#x2716; {/* Unicode for cross symbol */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card; 