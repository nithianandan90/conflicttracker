import Chart from 'react-apexcharts';
import DashCard from '../../dashboardCards/DashCard';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { getConflict } from './queries';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap';

import img1 from '../../../../assets/images/users/user4.jpg';
import bgimg1 from '../../../../assets/images/background/profile-bg.jpg';

const ConflictCard = () => {
  const { data } = useQuery(getConflict, {
    variables: { id: '63d9d1b3-5a82-4d73-b3b6-36a4a3755726' },
  });

  console.log('data', data);

  return (
    <Card>
      <CardImg src={bgimg1} alt="bg-img" />
      <CardBody className="text-center mt-n5">
        <img src={img1} className="rounded-circle mt-n4" width="125" alt="avatar" />
        <CardTitle className="mb-1 mt-3" tag="h4">
          Steave Jobs
        </CardTitle>

        <CardSubtitle className="text-muted mb-1">Ui/Ux Designer</CardSubtitle>
        <CardSubtitle className="mb-3 pb-1 px-4">
          Design is intelligence made visible <span></span>😎.
        </CardSubtitle>
        <Button color="primary" size="lg" className="rounded-pill">
          Follow
        </Button>
        <Row className="mt-4">
          <Col xs="4">
            <h5 className="fw-bold">1M</h5>
            <span className="text-muted">Followers</span>
          </Col>
          <Col xs="4" className="border-start border-end">
            <h5 className="fw-bold">0</h5>
            <span className="text-muted">Following</span>
          </Col>
          <Col xs="4">
            <h5 className="fw-bold">1,000</h5>
            <span className="text-muted">Posts</span>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button block color="primary">
              Message
            </Button>
          </Col>
          <Col>
            <Button block color="outline-primary">
              Share Profile
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ConflictCard;
