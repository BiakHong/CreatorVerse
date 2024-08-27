import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the creator ID from the URL
import { supabase } from '../../client';
import './AddCreator.css';

const AddCreator = () => {
  const { id } = useParams(); // Get the creator ID from the URL
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // If an ID exists, fetch the creator data to prefill the form
    const fetchCreator = async () => {
      if (id) {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single(); // Fetch the single creator
        
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setName(data.name);
          setDescription(data.description);
          setUrl(data.url);
          setImgURL(data.imgURL);
        }
      }
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = id
        ? await supabase.from('creators').update({ name, description, url, imgURL }).eq('id', id) // Update creator
        : await supabase.from('creators').insert([{ name, description, url, imgURL }]); // Insert new creator

      if (error) {
        console.error('Error adding/updating creator:', error.message);
        setMessage('Error adding/updating creator: ' + error.message);
      } else {
        setMessage(`Creator ${id ? 'updated' : 'added'} successfully!`);
        if (!id) {
          setName('');
          setDescription('');
          setUrl('');
          setImgURL('');
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setMessage('Unexpected error occurred: ' + err.message);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Creator' : 'Add a New Creator'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update Creator' : 'Add Creator'}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCreator;
