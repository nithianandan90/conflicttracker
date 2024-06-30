import React from 'react';
import DashCard from '../dashboardCards/DashCard';
import SimpleBar from 'simplebar-react';
import { ListGroupItem } from 'reactstrap';
import CSVUploader from '../../../services/csvuploader';

const CountriesUpload = () => {
  return (
    <DashCard title="Bulk CSV Upload" subtitle="Test">
      <SimpleBar style={{ height: '100px' }}></SimpleBar>
      <CSVUploader uploadModel={'countries'} />
      <ListGroupItem action href="#" tag="a" className="border-0 p-3 w-100 rounded"></ListGroupItem>
    </DashCard>
  );
};

export default CountriesUpload;
