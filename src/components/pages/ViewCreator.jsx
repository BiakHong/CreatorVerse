import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../client';
import './ShowCreators';

const ViewCreator = () => {
  const { name } = useParams(); // Get the ID from the URL
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('name', name)
          .single(); // Fetch a single record based on the ID

        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setCreator(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchCreator();
  }, [name]);

  if (!creator) {
    return <p>Loading...</p>;
  }

  return (
    <div className="creator-details">
      <img src={creator.imgURL} alt={creator.name} className="creator-image" />
      <h2 className="creator-name">{creator.name}</h2>
      <p className="creator-description">{creator.description}</p>
      <a href={creator.url} className="creator-link" target="_blank" rel="noopener noreferrer">Visit Profile</a>
    </div>
  );
};

export default ViewCreator;
