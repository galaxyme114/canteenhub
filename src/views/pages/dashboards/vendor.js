// components
import {
  Alert, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Badge,
} from 'reactstrap';

import {
  AlertCircle,
} from 'react-feather';

import { getLoggedUser } from '@utils';
// import AlertVerifyEmail from '../../../components/AlertVerifyEmail';
import CardAction from '../../../components/CardAction';
import { DisplayStatus } from '../../../components/DisplayStatus';

const Home = () => {
  const loggedUser = getLoggedUser();

  // console.log(loggedUser);

  return (
    <div>
      {/* <AlertVerifyEmail email={loggedUser.email} emailVerified={loggedUser.emailVerified} /> */}
      <Row className="justify-content-between mb-3">
        <Col>
          <h3>Dashboard</h3>
        </Col>
        <Col className="text-right">
          <small>Status:</small>
          {' '}
          <DisplayStatus status={loggedUser.status} />
        </Col>
      </Row>
      {/* {loggedUser.map((station) => (
        <div className="station" key={station.call}>{station.call}</div>
      ))} */}
      {/* <pre>
        {JSON.stringify(loggedUser)}
      </pre> */}

      {/* <Row className="justify-content-between mb-2">
        <Col lg="6">
          <h3>Getting Started</h3>
          <small>Thanks for registering as a partner with Canteen Hub. Before you can start transacting with the platform, you will first need to setup and configure your account.</small>

        </Col>
      </Row> */}

      <Row className="match-height">

        <Col md="6" lg="4" sm="12">
          <h3>Getting Started</h3>
          <small className="w-75">Thanks for registering as a partner with Canteen Hub. Before you can start transacting with the platform, you will first need to setup and configure your account.</small>

        </Col>
        <Col md="6" lg="4" sm="12">
          <CardAction title="1. Setup you store(s)" content="You will need to setup at least one store in order to transact on Canteen Hub. Stores are the physical premises that prepare and dispatch orders. " />
        </Col>
        <Col md="6" lg="4" sm="12">
          <CardAction title="2. Connect with Schools" content="Schools are your customers. End users (e.g. Parents) will order through these schools. Your orders will be delivered to groups at a certain time, defined by you. " />
        </Col>

        {/* <Col md="6" lg="4" sm="12">
          <CardAction />
        </Col> */}
      </Row>

      <Card>
        <CardHeader>
          <CardTitle>Vendor Dashboard</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>

            ONboarding TODO:
            <ul>
              <li><strike>Card or Notice for unverified emails</strike></li>
              <li><strike>Card or Notice for account pending</strike></li>
              <li>Card for CTA to setup stores (Check Stripe UI for Inspo)</li>
              <li>Card for CTA to connect with Schools</li>
              <li>Card for CTA to setup payment profile</li>
            </ul>
          </CardText>
        </CardBody>
      </Card>

    </div>
  );
};

export default Home;
