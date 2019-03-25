import React from "react";
import ReactDOM from "react-dom";

import "./styles";

const Container = (): React.ReactElement => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
