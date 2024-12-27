import React from 'react';
import '../styles/feedback.css';

const Feedback: React.FC = () => {
  const feedbacks = [
    { id: 1, name: 'Jenny Wilson', rating: 5, comment: 'The food was excellent and so was the service.', userImage: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Dianne Russell', rating: 5, comment: 'Perfect service and food quality.', userImage: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 3, name: 'Devon Lane', rating: 4, comment: 'The staff was attentive and friendly.', userImage: 'https://randomuser.me/api/portraits/men/2.jpg' },
  ];

  return (
    <div className="feedback">
      <h3>Customer's Feedback</h3>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id} className="feedback-item">
            <div className="feedback-user">
              <img src={feedback.userImage} alt={feedback.name} className="user-image" />
              <h4>{feedback.name} <span>{'⭐'.repeat(feedback.rating)}</span></h4>
            </div>
            <p>{feedback.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
