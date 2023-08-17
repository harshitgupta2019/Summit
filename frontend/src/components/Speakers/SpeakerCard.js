import React from 'react';

const SpeakerCard = ({ speaker }) => (
  <div className="speaker-card">
    <img className="speaker-image" src={speaker.image} alt={speaker.name} />
    <h3 className="speaker-name">{speaker.name}</h3>
    <p className="speaker-title">{speaker.title}</p>
    <p className="speaker-bio">{speaker.bio}</p>
    <a  href={speaker.Profile}><button className="speaker-profile">View More</button></a>
  </div>
);

export default SpeakerCard;
