import { useMemo } from 'react';
import { Buffer } from 'buffer';
import PropTypes from 'prop-types';
import awsconfig from '../aws-exports';

// const bucket = "chat-app-storage-c1fd7f9b61959-staging";

// Define prop types
SmartImage.propTypes = {
  imgKey: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const bucket = awsconfig.aws_user_files_s3_bucket;

const URL = 'https://d1cbzomg3ziuco.cloudfront.net/';

export default function SmartImage({ imgKey, width, height, ...imageProps }) {
  const uri = useMemo(() => {
    const imageRequest = JSON.stringify({
      bucket,
      key: `public/${imgKey}`,
      edits: {
        resize: {
          width,
          height,
          fit: 'cover',
        },
      },
    });
    const encoded = Buffer.from(imageRequest).toString('base64');

    return URL + encoded;
  }, [imgKey, height, width]);

  return <img src={uri} alt="user" width="45" className="rounded-circle" />;

  //   <Image source={{ uri }} {...imageProps} />;
}
