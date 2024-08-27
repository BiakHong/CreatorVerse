import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { supabase } from '../../client';
import './ViewAllCreators.css';

const ViewAllCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase
          .from('creators') // Make sure this matches your table name
          .select('*');
        
        if (error) {
          console.error('Error fetching creators:', error);
        } else {
          setCreators(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchCreators();
  }, []);
const handleDelete = async (creatorId) => {
    try {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', creatorId);

      if (error) {
        console.error('Error deleting creator:', error);
      } else {
        setCreators(creators.filter(creator => creator.id !== creatorId));
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special characters with hyphens
      .replace(/^-+|-+$/g, '');    // Remove leading or trailing hyphens
  };
  
  return (
    <div className="creators-container">
      {creators.length > 0 ? (
        creators.map((creator) => {
          const slug = generateSlug(creator.name);
          return(
          <div key={creator.id} className="creator-card">
             <Link to={`/creator/${creator.name}`} className="creator-link">
            <img src={creator.imgURL} alt={creator.name} className="creator-image" />
            <h3 className="creator-name">{creator.name}</h3>
            <a href={creator.url} className="creator-link" target="_blank" rel="noopener noreferrer">Visit Profile</a>
            <p className="creator-description">{creator.description}</p>
            </Link>
            <div className="creator-actions">
            <Link to={`/edit-creator/${creator.id}`} className="edit-button">Edit</Link> {/* Edit button */}
            <button className="delete-button" onClick={() => handleDelete(creator.id)}>Delete</button>
            </div>
            

          </div>
        );
        })
      ) : (
        <p>No creators found.</p>
      )}
    </div>
  );
};

export default ViewAllCreators;
