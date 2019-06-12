import React from "react";

const NotFound = ({ img }) => {
  return (
    <div>
      <h1
        className="display-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span className="text-danger">
          404: <br />{" "}
        </span>
        Page Not Found
      </h1>
      <img
        src="/images/uh-oh.jpg"
        alt="uh-oh"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px"
        }}
        height="600px"
        width="600px"
      />
      <p
        className="lead"
        style={{
          marginTop: "19px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Well... this is awkward...
      </p>
      <p
        className="lead"
        style={{
          marginBottom: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        It seems like the page you're looking for doesn't exist.. did you click
        a broken link somewhere? Are you trying to bypass our security measures,
        huh? Anyway, maybe just click the back arrow and try again!
      </p>
    </div>
  );
};

export default NotFound;
