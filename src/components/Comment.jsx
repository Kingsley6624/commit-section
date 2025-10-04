import React from "react";
import Form from "./Form";
import CommentCard from "./CommentCard";
import ReplyCard from "./ReplyCard";
import UserReplyCard from "./UserReplyCard";
import UserCommentCard from "./UserCommentCard";
import { useResources } from "../Context/ResourcesContext";

const Comment = () => {
  const { data, currentUser, handleAdd } = useResources();

  return (
    <section className="bg-[#f5f6faff] h-full min-h-screen px-[5%] py-8">
      {data.map((user) => (
        <div key={user.id}>
          {user.user.username === currentUser.username ? (
            <UserCommentCard key={user.id} {...user} />
          ) : (
            <CommentCard key={user.id} {...user} />
          )}

          {/* replies */}

          <div className=" ml-1 md:ml-8 border-l-2 border-[#eaecf1ff] pl-4">
            {user.replies?.map((reply) =>(
              reply.user.username === currentUser.username ? (
                <UserReplyCard key={reply.id} {...reply} />
              ) : (
                <ReplyCard key={reply.id} {...reply} />
              )
))}
          </div>
        </div>
      ))}

      <div className=" w-full h-fit">
        <Form
          buttonLabel={"SEND"}
          placeholder={"Add a comment..."}
          onSubmit={(text) => handleAdd(text)}
        />
      </div>
    </section>
  );
};

export default Comment;
