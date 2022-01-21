import {
  Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col,
} from 'reactstrap';

// **  Custom Components
import CardApproveUsersCTA from '@src/components/CardApproveUsersCTA';

const Home = () => (
  <div>

    <Row className="justify-content-between mb-3">
      <Col>
        <h3>Dashboard</h3>
      </Col>
    </Row>

    <CardApproveUsersCTA />

    {/* <Card>
      <CardHeader>
        <CardTitle>Admin Dasboard 🚀</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>All the best for your new project.</CardText>
        <CardText>
          Please make sure to read our
          {' '}
          <CardLink
            href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
            target="_blank"
          >
            Template Documentation
          </CardLink>
          {' '}
          to understand where to go from here and how to use our template.
        </CardText>
      </CardBody>
    </Card> */}

  </div>
);

export default Home;
