// ** React Imports
import { useState } from 'react';
import { Link } from 'react-router-dom';

// ** Custom Components
import moment from 'moment';

// ** Store & Actions
import { store } from '@store/storeConfig/store';
import { useDispatch } from 'react-redux';

// ** Third Party Components
import {
  Alert, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import AvatarGroup from '@components/avatar-group';
import {
  MoreVertical, CheckCircle, Trash2, Archive,
} from 'react-feather';
import { toast } from 'react-toastify';
import { getStore, deleteStore } from '@store/actions/vendor.actions';

import { getInitials } from '@utils';

// ** Renders Role Columns
const renderUsers = (row) => {
  const avatarGroupData = row.storeUsers.map((item) => ({
    content: getInitials(`${item.firstName} ${item.lastName}`),
    size: 'sm',
  }));

  return <AvatarGroup data={avatarGroupData} />;
};

export const columns = [
  {
    name: 'Store Name',
    selector: (row) => `${row.storeName}`,
    sortable: true,
  },
  {
    name: 'Store Email',
    minWidth: '300px',
    selector: (row) => row.storeEmail,
    sortable: true,
  },
  {
    name: 'Users',
    sortable: true,
    cell: (row) => renderUsers(row),
  },
  {
    name: 'Actions',
    width: '120px',
    cell: (row) => {
      const [modalVisibility, setModalVisibility] = useState(false);
      const [apiErrors, setApiErrors] = useState({});
      const dispatch = useDispatch();

      const handleDeleteUser = async (userId) => {
        console.log('delete Store');
        // try {
        //   await dispatch(deleteUser(`${userId}`));
        //   toast.success(
        //     <>
        //       <CheckCircle className="mr-1 text-success" />
        //       User successfully deleted
        //     </>, {
        //       hideProgressBar: true,
        //     }
        //   );
        //   setModalVisibility(!modalVisibility);
        // } catch (err) {
        //   setApiErrors(err.response ? err.response : { data: err.response.data });
        // }
      };

      return (

        <>
          <UncontrolledDropdown>
            <DropdownToggle tag="div" className="btn btn-sm">
              <MoreVertical size={14} className="cursor-pointer action-btn" />
            </DropdownToggle>
            <DropdownMenu right>
              {/* <DropdownItem
            tag={Link}
            to={`/apps/user/view/${row._id}`}
            className="w-100"
            onClick={() => store.dispatch(getUser(row._id))}
          >
            <FileText size={14} className="mr-50" />
            <span className="align-middle">Details</span>
          </DropdownItem> */}
              <DropdownItem
                tag={Link}
                to={`/vendor/store/edit/${row._id}`}
                className="w-100"
                onClick={() => store.dispatch(getStore(row._id))}
              >
                <Archive size={14} className="mr-50" />
                <span className="align-middle">Edit</span>
              </DropdownItem>
              {/* <DropdownItem className="w-100" onClick={() => store.dispatch(deleteUser(row._id))}> */}
              <DropdownItem className="w-100" onClick={() => setModalVisibility(!modalVisibility)}>
                <Trash2 size={14} className="mr-50" />
                <span className="align-middle">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Modal isOpen={modalVisibility} toggle={() => setModalVisibility(!modalVisibility)}>
            <ModalHeader toggle={() => setModalVisibility(!modalVisibility)}>Confirm Delete?</ModalHeader>
            <ModalBody>
              { apiErrors.data ? (
                <Alert color="danger">
                  <div className="alert-body">
                    <span>{`Error: ${apiErrors.data}`}</span>
                  </div>
                </Alert>
              ) : <></>}
              Are you sure you want to delete?
              <div><strong>{row.email}</strong></div>
            </ModalBody>
            <ModalFooter className="justify-content-start">
              <Button color="primary" onClick={() => handleDeleteUser(row._id)}>
                Yes, Please Delete
              </Button>
              <Button color="secondary" onClick={() => setModalVisibility(!modalVisibility)} outline>
                No
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    },
  },
];
