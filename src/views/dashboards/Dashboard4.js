import { Row, Col } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import TotalRevenue from '../../components/dashboard/dashboard4/TotalRevenue';
import SalesPrediction from '../../components/dashboard/dashboard4/SalesPrediction';
import SalesDifference from '../../components/dashboard/dashboard4/SalesDifference';
import Chat from '../../components/dashboard/dashboard4/Chat';
import CalendarApp from '../apps/calendar/CalendarApp';
import RecentMessages from '../../components/dashboard/dashboard4/RecentMessages';
import BrowseStats from '../../components/dashboard/dashboard4/BrowseStats';
import TotalVisits from '../../components/dashboard/dashboard4/TotalVisits';
import VisitorsCards from '../../components/dashboard/dashboard4/VisitorsCards';
import ProjectTable from '../../components/dashboard/dashboard2/ProjectTable';
import UploadForm from '../../components/dashboard/dashboard4/UploadForm';
import ApolloTest from '../../components/dashboard/dashboard4/ApolloTest/ApolloTest';
import ConflictCard from '../../components/dashboard/dashboard4/ConflictCard/ConflictCard';
import CountriesUpload from '../../components/dashboard/dashboard4/countriesUpload';

const Dashboard4 = () => {
  return (
    <>
      <BreadCrumbs />
      {/* <VisitorsCards /> */}
      <Row>
        <Col lg="9">
          <TotalVisits />
        </Col>
        <Col lg="3">
          <ConflictCard />
        </Col>
        {/* <Col lg="4">
          <BrowseStats />
        </Col> */}
      </Row>
      <Row>
        <Col lg="12">
          <ProjectTable />
        </Col>

        <Row>
          <Col lg="4">
            <SalesPrediction />
          </Col>
          <Col lg="4">
            <SalesDifference />
          </Col>
          <Col lg="4">
            <ApolloTest />
          </Col>
        </Row>
      </Row>
      <CalendarApp />
      <Row>
        <Col lg="4">
          <Chat />
        </Col>
        <Col lg="4">
          {/* <RecentMessages /> */}
          <CountriesUpload />
        </Col>
        <Col lg="4">
          <UploadForm />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard4;
