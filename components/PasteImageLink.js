function PasteImageLink() {
  function checkURL(url) {
    return url.match(/\.(jpeg|jpg|png)$/) != null;
  }

  return (
    <form action="" id="image-link" className="py-5">
      <label htmlFor="image-link">Paste Image Link</label>
      <input type="text" id="image-link" placeholder="URL" />
      <button type="button" onClick={() => console.log('click')}>
        Search
      </button>
    </form>
  );
}

export default PasteImageLink;
