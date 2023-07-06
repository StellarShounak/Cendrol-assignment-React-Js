import React from 'react';
import Card from './Card';

const Categories = ({ categories }) => {
  return (
    <div className="card-container">
      {categories.map((category, index) => (
        <Card key={index} category={category} />
      ))}
    </div>
  );
};

export default Categories;