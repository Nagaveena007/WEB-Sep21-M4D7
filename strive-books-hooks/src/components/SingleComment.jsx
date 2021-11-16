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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzcwODQ1ODgsImV4cCI6MTYzODI5NDE4OH0.wADxD7z72hDK1npR0_0FNibR0Y0M2YwZQbE0X4vYcpU",
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
