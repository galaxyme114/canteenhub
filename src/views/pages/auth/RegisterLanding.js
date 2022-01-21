import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Mail, GitHub,
} from 'react-feather';
import InputPasswordToggle from '@components/input-password-toggle';
import {
  Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button,
  CardDeck, CardImg, CardFooter,
} from 'reactstrap';
import '@styles/base/pages/page-auth.scss';

// import img1 from '@src/assets/images/slider/03.jpg';
// import img2 from '@src/assets/images/slider/02.jpg';
// import img3 from '@src/assets/images/slider/01.jpg';

import themeConfig from '@configs/themeConfig';

const RegisterV1 = () => {
  const RememberMe = () => (
    <>
      I agree to
      <a className="ml-25" href="/" onClick={(e) => e.preventDefault()}>
        privacy policy & terms
      </a>
    </>
  );

  return (
    <div className="auth-wrapper auth-register-landing ">
      <div className="auth-inner py-5">
        <div className="brand-logo">
          <img src={themeConfig.app.appLogoImage} alt="Canteen Hub" />
        </div>
        <h3 className="text-center mt-5 mb-3">I am registering as a...</h3>
        <CardDeck>
          <Card>
            {/* <CardImg top src={img1} alt="card1" /> */}
            <CardBody>
              <CardTitle tag="h4">Vendor</CardTitle>
              <CardText>
                Want to supply meals to large groups? Register FREE as a partner today
              </CardText>
            </CardBody>
            <CardFooter>
              <Button.Ripple tag={Link} to="/register-partner" color="primary" block>
                Partner registration
              </Button.Ripple>
            </CardFooter>
          </Card>
          <Card>
            {/* <CardImg top src={img2} alt="card2" /> */}
            <CardBody>
              <CardTitle tag="h4">School</CardTitle>
              <CardText>Register your school and allow parents to order from our nutrition approved menu from select suppliers</CardText>
            </CardBody>
            <CardFooter>
              <Button.Ripple tag={Link} to="/register-group" color="primary" block>
                School registration
              </Button.Ripple>
            </CardFooter>
          </Card>
          <Card>
            {/* <CardImg top src={img3} alt="card3" /> */}
            <CardBody>
              <CardTitle tag="h4">Customer</CardTitle>
              <CardText>
                Register as a customer and order meals from your child&lsquo;s school supplied menu
              </CardText>
            </CardBody>
            <CardFooter>
              <Button.Ripple tag={Link} to="/register-customer" color="primary" block>
                Customer registration
              </Button.Ripple>
            </CardFooter>
          </Card>
        </CardDeck>

        {/* <div className="divider my-2">
          <div className="divider-text">or</div>
        </div> */}

        <p className="text-center mt-5">
          <span className="mr-25">Already have an account?</span>
          <Link to="/login">
            <span>Sign in instead</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterV1;
