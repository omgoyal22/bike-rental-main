import React from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "../index.css";
import Footer from "./footer/Footer";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = user ? "/login" : "/adminlogin";
  };

  const linkStyle = {
    color: "red",
    fontWeight: "bold",
    marginRight: "20px",
    fontSize: "15px", 
    transition: "color 0.3s ease", 
  };

  const logoutStyle = {
    color: "red",
    fontWeight: "bold",
    marginRight: "20px",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "15px", 
    transition: "color 0.3s ease", 
  };

  const adminLinkStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: "20px",
    fontSize: "10px", 
  };

  return (
    <div>
      <div className="header" style={{ backgroundColor: "#000000" }}>
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between align-items-center">
              <h1>
                <b>
                  <Link to="/" style={{ color: "red" }}>
                    AuraWheel
                  </Link>
                </b>
              </h1>
              <div>
                <div>
                  <Link
                    to="/"
                    style={linkStyle}
                    className="hover-red-to-yellow" 
                  >
                    Home
                  </Link>
                  {user && (
                    <Link
                      to="/userbookings"
                      style={linkStyle}
                      className="hover-red-to-yellow" 
                    >
                      Bookings
                    </Link>
                  )}
                  <div
                    onClick={handleLogout}
                    style={logoutStyle}
                    className="hover-red-to-yellow"
                  >
                    Logout
                  </div>
                </div>
                {user ? (
                  <span>{user.username}</span>
                ) : (
                  <span>{admin.username}</span>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
      <div className="footer text-center">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
