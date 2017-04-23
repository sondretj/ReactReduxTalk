import React from "react";

// export default React.createClass({
//   render: function() {
//     return (
//       <div className="greeting">
//         Hello, {this.props.name}!
//       </div>
//     );
//   },
// });

export default class Greeting extends React.Component {

  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!!!
      </div>
    );
  }

};
