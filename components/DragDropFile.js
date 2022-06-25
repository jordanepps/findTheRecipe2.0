function DragDropFile() {
  return (
    <form id="form-file-upload" className="py-5">
      <input
        type="file"
        id="input-file-upload"
        multiple={false}
        accept="image/png, image/jpeg"
      />
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button">Upload a file</button>
        </div>
      </label>
    </form>
  );
}

export default DragDropFile;
