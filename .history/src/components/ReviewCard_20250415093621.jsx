// src/components/ReviewCard.jsx

import React from "react";

const ReviewCard = ({ name, avatar, rating, comment, date }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-md w-full mx-auto">
      <div className="flex items-center mb-2">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < rating ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default ReviewCard;
