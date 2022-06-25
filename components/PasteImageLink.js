function PasteImageLink() {
  return (
    <form action="" id="image-link" className="py-5">
      <label htmlFor="image-link">Paste Image Link</label>
      <input type="text" id="image-link" placeholder="URL" />
      <button>Search</button>
    </form>
  );
}

export default PasteImageLink;
