import { useState } from 'react';
import validator from 'validator';

function PasteImageLink() {
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    if (validator.isURL(value)) {
      console.log('function ran');
      setErrorMessage('Is Valid URL');
    } else {
      console.log('function ran');
      setErrorMessage('Is Not Valid URL');
    }
  };

  function submitURL(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      validate(url);
    }
  }

  return (
    <form action="" id="image-link" className="py-5">
      <label htmlFor="image-link">Image URL</label>
      <input
        type="url"
        id="image-link"
        placeholder="https://example.com/image.jpg"
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => submitURL(e)}
      />
      <button type="button" onClick={(e) => submitURL(e)}>
        Search
      </button>
      <br />
      <span>{errorMessage}</span>
    </form>
  );
}

export default PasteImageLink;
