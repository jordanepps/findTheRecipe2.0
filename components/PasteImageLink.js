import { useState } from 'react';

function PasteImageLink() {
  const [url, setUrl] = useState('');

  function submitURL(e) {
    // TODO: handle no url sumbit click
    if (e.key === 'Enter') e.preventDefault();
    console.log(url);
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
      {/* <span>{url}</span> */}
    </form>
  );
}

export default PasteImageLink;
