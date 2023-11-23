import { Button, Col } from "react-bootstrap";
import IconButton from "./IconButton";
import NewPostModal from "./NewPostModal";
import { useState } from "react";

export default function ProfileSideBar({ handleLogout }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col
      sm={2}
      className="d-flex flex-column justify-content-start align-items-start bg-light vh-100"
      style={{ position: "sticky", top: 0 }}
    >
      <IconButton className="bi bi-bus-front" isTop />
      <IconButton className="bi bi-house" text="Home" />
      <IconButton className="bi bi-search" text="Buy Ticket" />
      <IconButton className="bi bi-bell" text="Notifications" />
      <IconButton className="bi bi-bookmark" text="Bookmarks" />
      <IconButton className="bi bi-person" text="Profile" />
      <IconButton
        className="bi bi-door-closed"
        text="Logout"
        onClick={handleLogout}
      />
      <Button className="rounded-pill w-100 mb-3" onClick={handleShow}>
        Comment
      </Button>
      <NewPostModal show={show} handleClose={handleClose} />
    </Col>
  );
}
