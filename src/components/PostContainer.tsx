import React, { useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [page, setPage] = useState(1);
  const postsOnPage = 5;
  const { data, isLoading } = postAPI.useFetchAllPostsQuery(page * postsOnPage);

  return (
    <>
      <div>
        {data?.map((post, i) => (
          <div className="" key={`post${i}`}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
      <div className="">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>prev page</button>
        )}
        <button onClick={() => setPage(page + 1)}>next page</button>
      </div>
      {isLoading && <div className="">Loading...</div>}
    </>
  );
};

export default PostContainer;
