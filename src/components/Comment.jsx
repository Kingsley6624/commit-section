import React from "react";
import Form from "./Form";
import CommentCard from "./commentCard";
import ReplyCard from "./ReplyCard";
import UserReplyCard from "./UserReplyCard";
import data from "../data.json";

const Comment = () => {
  const comments = data.comments;

  return (
    <section className="bg-[#f5f6faff] h-full min-h-screen px-[5%] py-8">
      {comments.map((user) => (
        <div key={user.id}>
          <CommentCard {...user} />
          <div className=" ml-1 md:ml-8 border-l-2 border-[#eaecf1ff] pl-4">
            {user.replies?.map((reply) => {
              if (reply.user.username === data.currentUser.username) {
                return <UserReplyCard key={reply.id} {...reply} />;
              }
              return <ReplyCard key={reply.id} {...reply} />;
            })}
          </div>
        </div>
      ))}
      <div className=" w-full h-fit">
        <Form
          buttonLabel={"SEND"}
          placeholder={"Add a comment..."}
          onSubmit={(text) => console.log(text)}
        />
      </div>
    </section>
  );
};

export default Comment;
