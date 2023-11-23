import { Button, Col, Image, Nav, Row, Spinner } from "react-bootstrap";
import ProfilePostCard from "./ProfilePostCard";
// import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";
import { fetchPostsByUser } from "../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "./AuthProvider";
import bus from "../assets/bus.jpg";
import tickets from "../assets/tickets.jpg";

export default function ProfileMidBody() {
  <img className="h-10" src={bus} alt="" />;

  <img className="h-10" src={tickets} alt="" />;

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchPostsByUser(currentUser.uid));
    // const token = localStorage.getItem("authToken");
    // if (token) {
    //   const decodedToken = jwtDecode(token);
    //   const userId = decodedToken.id;
    //   dispatch(fetchPostsByUser(userId));
    // }
  }, [dispatch, currentUser]);

  return (
    <Col sm={6} className="bg-light" style={{ border: "1px solid lightgrey" }}>
      <Image src={bus} fluid />
      <br />
      <Image
        src={tickets}
        roundedCirle
        style={{
          width: 150,
          position: "absolute",
          top: "250px",
          border: "4px solid #F8F9FA",
          marginLeft: 15,
        }}
      />

      <Row className="front">
        <Col xs="auto">
          <Button className="rounded-pill mt-2" variant="outline-secondary">
            Edit Profile
          </Button>
        </Col>
      </Row>

      <p
        className="mt-2"
        style={{ marginTop: "10px", fontWeight: "bold", fontSize: "15px" }}
      >
        Emmie
      </p>

      <p style={{ marginTop: "10px" }}>
        <strong>My booking history</strong>
      </p>

      <Nav variant="underline" defaultActiveKey="/home" justify>
        <Nav.Item>
          <Nav.Link eventKey="/home">Upcoming</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Past</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">RapidPass</Nav.Link>
        </Nav.Item>
      </Nav>
      {loading && (
        <Spinner animation="border" className="ms-3 mt-3" variant="primary" />
      )}
      {posts.length > 0 &&
        posts.map((post) => (
          <ProfilePostCard key={post.id} content={post.content} post={post} />
        ))}
    </Col>
  );
}
