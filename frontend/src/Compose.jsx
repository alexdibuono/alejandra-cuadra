import React from 'react';
import {useState } from 'react';
import './compose.css';
import _, { functionsIn } from 'lodash';


function Compose() { 

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Please enter your password to open the Compose page.');

  const password = process.env.REACT_APP_COMPOSE_PASSWORD;

  let images = [];

  const jsonData = {
    "category": category,
    "image": image,
    "title": title, 
    "description": description
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescChange(event) {
    console.log(description);
    setDescription(event.target.innerHTML);
  }

  function handleSubmit(e) {   
    if(title !== "" && description !== ""){
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      fetch(process.env.REACT_APP_ROOT + '/compose', {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(jsonData)
      })
      .then(response => {
        if (response.ok) {
          console.log("Submission was successful.");
        } else {
          console.log("Submission failed.");
        }
      })
    }
  }

  function convertToBase64(e) {
    const files = Array.from(e.target.files);
    const promises = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(promises)
      .then(results => {
        setImage(results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  const passwordSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.password.value;
    console.log(userInput, password);
    if (userInput === password) {
      setPasswordVerified(true);
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  if (!passwordVerified) {
    return (
      <div className="compose">
        <form onSubmit={passwordSubmit}>
          <p>Password:</p>
          <input type="password" name="password" />
          <button type="submit">Submit</button><br /><br />
          {errorMessage && <em>{errorMessage}</em>}
        </form>
      </div>
    );
  }

  return (
    <div className='compose'>
      <h1>Compose</h1>
      <form action="/compose" onSubmit={handleSubmit}>
        <p>Category:</p>
        <input type="radio" value="Installation" name="radio__input" id="installation__check" onClick={handleCategoryChange}/>
        <label htmlFor="installation__check"> Installation</label><br />
        <input type="radio" value="Allegories" name="radio__input" id="allegories__check" onClick={handleCategoryChange}/>
        <label htmlFor="allegories__check"> Allegories</label><br />
        <input type="radio" value="Vessels" name="radio__input" id="vessels__check" onClick={handleCategoryChange}/>
        <label htmlFor="vessels__check"> Vessels</label><br />
        <input type="radio" value="Public-Engagement" name="radio__input" id="public-engagement__check" onClick={handleCategoryChange}/>
        <label htmlFor="public-engagement__check"> Public Engagement</label><br />
        <p>Photos:</p>
        <input accept="image/*" type="file" onChange={convertToBase64} multiple/><br />

        {Array.isArray(image) && image.map((imgSrc, index) => (
          imgSrc && imgSrc !== "" && imgSrc !== null && (
            <img
              key={index}
              src={imgSrc}
              alt="chosen-pic"
              width={100}
              height={100}
            />
         )
        ))}

        <p>Title:</p>
        <input type="text" name="title" id="title" value={title} onChange={handleTitleChange} /><br/>
        <p>Description:</p>
        <div contentEditable="true" name="description" id="description" dangerouslySetInnerHTML={{__html: description}} onBlur={handleDescChange}/>
        <button type="submit" name="submit" id="submit">Submit</button>
      </form>
    </div>
  )
}

export default Compose