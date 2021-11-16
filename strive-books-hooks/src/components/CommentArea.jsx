import { useState, useEffect } from "react";
import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setcomments] = useState([]); // comments will go here
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // const [isLoading, setIsLoading] = useState(true);
    fetchComments();
  }, [asin]);

  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzY2NDAwMzUsImV4cCI6MTYzNzg0OTYzNX0.VG86lV20CDVqvjC9I1KfBdP08Y5tWlGW5utDd-dm5cU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setIsError(true);
        setIsLoading(false);
        setcomments(comments);
      } else {
        console.log("error");
        // this.setState({ isLoading: false, isError: true });
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      // this.setState({ isLoading: false, isError: true });
      setIsError(true);
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};
export default CommentArea;
