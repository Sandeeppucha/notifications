const Notification = (props) => {
  const { className, notificationText } = props;
  return <p className={`para ${className}`}>{notificationText}</p>;
};

const element = (
  <div className="main-container">
    <h1 className="heading">Notifications</h1>
    <div className="items-container one">
      <img
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="icon"
      />

      <Notification
        notificationText="Information Message"
        className="message-style"
      />
    </div>
    <div className="items-container two">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="icon"
      />

      <Notification
        notificationText="Success Message"
        className="message-style"
      />
    </div>
    <div className="items-container three">
      <img
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="icon"
      />
      <Notification
        notificationText="Warning Message"
        className="message-style"
      />
    </div>
    <div className="items-container four">
      <img
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="icon"
      />

      <Notification
        notificationText="Danger Message"
        className="message-style"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
