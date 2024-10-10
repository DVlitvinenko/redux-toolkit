import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post: { body, id, title } }) => {
  return (
    <div>
      <h3>
        {title} {id}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default PostItem;
