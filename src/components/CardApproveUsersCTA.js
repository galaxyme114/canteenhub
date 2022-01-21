import { useEffect, useState } from 'react';
import axios from 'axios';
import { headers } from '@configs/apiHeaders.js';

import {
  Card, CardBody, CardText,
} from 'reactstrap';
// import medal from '@src/assets/images/illustration/badge.svg';
import iconStore from '@src/assets/images/icons/store.svg';

// import { getUsers } from '@store/actions/user.actions';

// import {
//   UserPlus,
// } from 'react-feather';

const CardApproveUsersCTA = () => {
  const [pendingCount, setPendingCount] = useState(0);

  // ** Get data on mount
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`,
      {
        headers,
        params: { status: 'pending', role: 'vendor' },
      }).then((response) => {
      setPendingCount(response.data.filteredCount);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  // const getReviewCount = () => (
  //   <div />
  // );

  return (
    <>
      {pendingCount > 0 ? (
        <Card className="card-approve-cta">
          <CardBody className="d-flex justify-content-lg-between align-items-center">
            <div className="card-icon">
              <img className="" src={iconStore} alt="Store" />
            </div>
            <div>
              <h6 className="mb-0">
                {pendingCount}
                {' '}
                New vendor(s) are awaiting your approval
              </h6>
              <CardText><small>Go to vendor list to review pending accounts</small></CardText>
            </div>
            <a href="/users/vendors?status=pending" className="waves-effect ml-auto btn btn-primary ">View</a>
          </CardBody>
        </Card>
      ) : ''}

    </>
  );
};

export default CardApproveUsersCTA;
