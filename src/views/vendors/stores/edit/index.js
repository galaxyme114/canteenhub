/* eslint-disable radix */
// ** React Imports
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux';

// ** Reactstrap
import {
  Button, Row, Col, Alert,
} from 'reactstrap';
import { ArrowLeftCircle } from 'react-feather';

import { getStore } from '@store/actions/vendor.actions';

// ** User View Components
import AccountForm from './Account';
// import UserInfoCard from './UserInfoCard';
// import UserTimeline from './UserTimeline';
// import InvoiceList from '../../invoice/list';
// import PermissionsTable from './PermissionsTable';

// ** Styles
import '@styles/react/apps/app-users.scss';

const StoreView = (props) => {
  // ** Vars
  const selectedStore = useSelector((state) => state.stores.selectedStore);
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [user, setUser] = useState({});

  // const allState = useSelector((state) => state);

  console.log('selectedStore', selectedStore);

  // ** Get data on mount
  useEffect(() => {
    console.log('getStore');
    dispatch(getStore(id));

    // console.log(store);

    // const fields = ['title', 'firstName', 'lastName', 'email', 'role'];
    // fields.forEach((field) => setValue(field, user[field]));
    // setUser(user);
  }, [dispatch]);

  return selectedStore !== null && selectedStore !== undefined ? (
    <div className="app-user-view">
      <div className="table-header">
        <Button.Ripple color="flat-light" onClick={() => window.history.back()}>
          &lt; back to list
        </Button.Ripple>
        <h3>
          Edit Store
        </h3>
      </div>

      <Row>
        <Col>
          <AccountForm selectedStore={selectedStore} />
        </Col>
        {/* <Col xl="3" lg="4" md="5">
          <PlanCard selectedUser={store.selectedUser} />
        </Col> */}
      </Row>
    </div>
  ) : (
    <Alert color="danger">
      <h4 className="alert-heading">Store not found</h4>
      <div className="alert-body">
        {`Store with id: ${id} does not exist `}
        <Link to="/stores">Back to Stores List</Link>
      </div>
    </Alert>
  );
};
export default StoreView;
