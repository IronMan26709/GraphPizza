import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";




const PrivateRoute = ({ component: Component, logined, ...props }) => {
  return (
    <>
      <Route
        {...props}
        render={innerProps =>
          logined ? <Component {...innerProps} /> : <Redirect to="/login" />
        }
      />
    </>
  );
};

const mapStateToProps = state => ({
  logined: state.userReducer.logined
});

export default connect(mapStateToProps)(PrivateRoute);