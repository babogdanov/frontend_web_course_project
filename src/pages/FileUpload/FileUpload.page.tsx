import React, { useState } from "react";
import Table from "../../components/Table/Table";
import Page from "../../layout/Page";

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(new File([], ""));
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [data, setData] = useState([]);
  const [canRenderTable, setCanRenderTable] = useState(false);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    fetch("/files/csvToJson", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if(result?.statusCode >= 400){
          console.error("Error:", result?.message);
          return;
        }
        
        console.log("Success:", result);
        setData(result);
        setCanRenderTable(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCanRenderTable(false);
      });
  };

  return (
    <Page>
      <div>
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {/*selectedFile.lastModifiedDate.toLocaleDateString()*/}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit (only csv for now)</button>
        </div>
        {canRenderTable && <Table data={data} />}
      </div>
    </Page>
  );
};

export default FileUploadPage;
