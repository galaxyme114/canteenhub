const CustomFooter = (props) => {
  console.log('Footer:', props);
  return (
    <p className="clearfix mb-0 ">
      <span className="float-md-left d-block d-md-inline-block mt-25">
        Copyright&copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Canteen Hub Australia
      </span>
      <span className="float-md-right d-none d-md-block">
        <a href="https://1.envato.market/pixinvent_portfolio" target="_blank" rel="noopener noreferrer">
          Terms & Conditions
        </a>
      </span>
    </p>
  );
};

export default CustomFooter;
