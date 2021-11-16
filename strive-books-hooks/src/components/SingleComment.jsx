import { Button, ListGroup } from "react-bootstrap";
/* import { MdDelete } from "react-icons/md";
 */ const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzY2NDAwMzUsImV4cCI6MTYzNzg0OTYzNX0.VG86lV20CDVqvjC9I1KfBdP08Y5tWlGW5utDd-dm5cU",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      D {/* <MdDelete /> */}
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
