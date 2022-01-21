import {
  Badge, Card, CardBody, CardHeader, CardText, CardTitle, Button,
} from 'reactstrap';
import {
  ChevronRight,
} from 'react-feather';

// import medal from '@src/assets/images/illustration/badge.svg';

const CardTodo = (props) => (
  <Card className="">
    <CardBody>
      <div className="d-flex align-items-center">
        <h5 className="mr-2">{props.title}</h5>
        <Badge color="light-secondary" pill>
          not completed
        </Badge>
      </div>

      <CardText className="font-small-3"><small>{props.content}</small></CardText>

      <Button.Ripple color="primary" className="mt-1">
        Setup Store
        {' '}
        <ChevronRight />
      </Button.Ripple>
      {/* <img className="congratulation-medal" src={medal} alt="Medal Pic" /> */}
    </CardBody>
  </Card>
);

export default CardTodo;
