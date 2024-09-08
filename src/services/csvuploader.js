import { useEffect, useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
import { parse } from 'papaparse';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { batchTest } from './queries';

// Your GraphQL mutation. Use Apollo Client or other GraphQL client

const CSVUploader = ({ uploadModel }) => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const tempData = [];
  // stateofData

  // use Apollo here to do a mutation
  const [doBatchUpload] = useMutation(batchTest);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    console.log('effect triggered', parsedData.length);

    if (parsedData.length > 0) {
      console.log('effect condition met');
      const uploadData = async () => {
        if (parsedData.length > 0) {
          console.log('parsedData', parsedData);
          try {
            const response = await doBatchUpload({ variables: { input: parsedData } });
            console.log('response', response);
          } catch (error) {
            console.error('Error during batch upload:', error);
          }
        }
      };

      uploadData();
    }
  }, [parsedData, doBatchUpload]);

  const uploadData = () => {
    if (!file) return;

    // Adjust batchSize based on your testing for optimal performance
    const batchSize = 100; // Number of rows to process in one batch

    console.log('reached function');

    parse(file, {
      worker: true, // Use Web Worker for processing if supported
      step: (row, parser) => {
        try {
          console.log('row', row.data);

          tempData.push(row.data);
          // processRow(row.data);
        } catch (error) {
          console.error('Error processing row:', error);
          parser.abort(); // Abort parsing on error
          return;
        }

        // Pause parsing as we collect each row into a batch
        // parser.pause();

        // console.log('uploadModel', uploadModel);
        // processRow(row.data).then(() => {
        //   console.log(row.data);
        //   // if (parser.streamer._rowCount % batchSize === 0) {
        //   //   // We reached a batch size, let's wait a bit
        //   //   setTimeout(() => parser.resume(), 100); // Adjust timeout for your needs
        //   // } else {
        //   //   // Resume immediately if not at batch limit
        //   //   parser.resume();
        //   // }
        // });
      },
      complete: async () => {
        tempData.pop();
        console.log('All rows processed', JSON.stringify(tempData));

        setParsedData(tempData);

        // send array of data to the apollo function to trigger lambda function
        // unable to access apollo function in here
      },
      header: true,
    });
  };

  const processRow = async (data) => {
    // // Your processing function, e.g., sending data to Amplify
    // const input = {
    //   /* map your data fields from data to your model's fields */
    // };
    // try {
    //   await API.graphql(graphqlOperation(createYourModelMutation, { input }));
    //   console.log('Item inserted:', input);
    // } catch (error) {
    //   console.error('Error inserting item:', error);
    // }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={uploadData}>Upload Data</button>
    </div>
  );
};

CSVUploader.propTypes = {
  uploadModel: PropTypes.string, // assuming uploadModel should be a function, mark it as required
};

export default CSVUploader;
