import React, { useState, useEffect } from 'react';
import SpeakerCard from './SpeakerCard'; // Assuming you have a SpeakerCard component
import './Speakers.css'; // Import your CSS file

const Speakers = () => {
  const [speakersData, setSpeakersData] = useState([]);

  useEffect(() => {
    fetch('/speakers.json') 
      .then(response => response.json())
      .then(data => setSpeakersData(data))
      .catch(error => console.error('Error fetching speakers data:', error));
  }, []);

  return (
    <div className="speakers-page">
      <section className="speakers-section">
        <div className="speakers-container">
          <h2 className="speakers-title">Featured Speakers</h2>
          <div className="speaker-list">
            {speakersData.map(speaker => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
