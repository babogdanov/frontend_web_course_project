import React, {useState} from 'react';

const FileUploadPage = () => {
	const [selectedFile, setSelectedFile] = useState(new File([],""));
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event: any) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'/api/files/uploadAndReturn',
			{
				method: 'POST',
				body: formData,
                //headers: [[""]]
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{/*selectedFile.lastModifiedDate.toLocaleDateString()*/}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}

export default FileUploadPage;