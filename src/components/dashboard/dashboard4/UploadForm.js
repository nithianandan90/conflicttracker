import React, { useEffect, useState } from 'react';
import DashCard from '../dashboardCards/DashCard';
import SimpleBar from 'simplebar-react';
import { ListGroupItem } from 'reactstrap';
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';
import SmartImage from '../../../services/smartImage';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const [imageKey, setImageKey] = useState(null);

  useEffect(() => {
    setImageKey(uploadResult?.key);
  }, [uploadResult]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        const result = await uploadData(selectedFile).result;

        console.log('File uploaded successfully', result.key);
        setUploadResult(result);
      } catch (error) {
        console.log('error uploading file', error);
      }
    }
  };

  const onProgress = (progress) => {
    console.log('progress', progress);
  };

  const handleFileInput = (e) => {
    if (!e.target.files.length) {
      console.log('No file selected');
      return;
    }
    const fileObject = e.target.files[0];
    console.log('file object', fileObject.name);

    const uriParts = fileObject.name.split('.');

    const extension = uriParts[uriParts.length - 1];

    const fileUploadParam = {
      key: `${uuidv4()}.${extension}`,
      data: fileObject,
      options: {
        accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
        onProgress, // Optional progress callback.
      },
    };

    setSelectedFile(fileUploadParam);
  };

  return (
    <DashCard title="Test Image Upload" subtitle="Test">
      <SimpleBar style={{ height: '100px' }}></SimpleBar>

      <ListGroupItem action href="#" tag="a" className="border-0 p-3 w-100 rounded">
        {imageKey && (
          <SmartImage
            imgKey={imageKey}
            // style={styles.image}
            height={100}
            width={100}
          />
        )}
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileInput} />
          <button type="submit">Upload</button>
        </form>
      </ListGroupItem>
    </DashCard>
  );
};

export default UploadForm;
