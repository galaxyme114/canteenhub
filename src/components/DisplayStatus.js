
import {
  Badge,
} from 'reactstrap';

export const DisplayStatus = (props) => {
  let color;
  switch (props.status) {
    case 'active':
      color = 'success';
      break;

    case 'pending':
      color = 'warning';
      break;

    case 'deleted':
      color = 'secondary';
      break;

    default:
      color = 'light-primary';
      break;
  }

  return (
    <Badge color={color} pill>
      {props.status}
    </Badge>
  );
};
