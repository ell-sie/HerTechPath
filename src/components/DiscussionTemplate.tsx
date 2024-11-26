import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "../assets/EditIcon";
import UserIcon from "../assets/UserIcon";
import { useAddCommentMutation } from "../hooks/comments/useAddCommentMutation";
import { useCommentsQuery } from "../hooks/comments/useCommentsQuery";
import { useDeleteCommentMutation } from "../hooks/comments/useDeleteCommentMutation";
import { useDeletePostMutation } from "../hooks/post/useDeletePostMutation";
import { useUpdatePostMutation } from "../hooks/post/useUpdatePostMutation";
import { useAuthContext } from "../providers/AuthProvider";
import MenuAnchorElementProvider from "../providers/MenuAnchorElementProvider";
import DeleteOption from "./DeleteOptions";
import Button from "./shared/Button";
import MenuOption from "./shared/MenuOption";

interface DiscussionsProps {
  title: string;
  Discussion: string;
  id: string;
}

function DiscussionTemplate({
  title,
  Discussion,
  id,
}: DiscussionsProps) {
  const {
    user: { user },
  } = useAuthContext();
  const [showInput, setShowInput] = useState(false);
  const [commentDescription, setCommentDescription] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDiscussion, setEditedDiscussion] = useState(Discussion);

  const { mutate: addComment } = useAddCommentMutation();
  const { isPending, data: allComments } = useCommentsQuery();
  const { mutate: updatePost } = useUpdatePostMutation();
  const { mutate: deletePost } = useDeletePostMutation();
  const { mutate: deleteComment } = useDeleteCommentMutation();

  const comments = allComments?.filter((comment) => comment.postID === id);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentDescription(event.target.value);
  };

  const currentUserId = user?.id;

  const handleSubmitComment = async () => {
    if (commentDescription.trim()) {
      try {
        await addComment({
          description: commentDescription,
          postID: id,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          userID: currentUserId,
        });
        setCommentDescription("");
        setShowInput(false);
      } catch (error) {
        console.error("Error during comment addition:", error);
      }
    }
  };

  const handleEditSubmit = async () => {
    try {
      await updatePost({
        id,
        title: editedTitle,
        description: editedDiscussion,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error during post update:", error);
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost({ id });
    } catch (error) {
      console.error("Error during post deletion:", error);
    }
  };

  const handleDeleteComment = async (id: string) => {
    try {
      await deleteComment({ id });
    } catch (error) {
      console.error("Error during comment deletion:", error);
    }
  };

  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex flex-col gap-4 p-4">
      <div className="flex justify-between w-full">
        <div></div>
          <MenuAnchorElementProvider>
            <MenuOption>
              <MenuItem
                onClick={() => setIsEditing(!isEditing)}
                className="flex gap-2"
              >
                <EditIcon className="size-5" />
                {isEditing ? "Cancel" : "Edit"}
              </MenuItem>
              <DeleteOption
                handleDelete={handleDeletePost}
                payload={{
                  id,
                }}
                alertText={`Are you sure you want to delete this post?`}
              />
            </MenuOption>
          </MenuAnchorElementProvider>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="bg-black p-4 border-black rounded-full">
          <UserIcon className="size-12 text-white" />
        </div>

        <div className="flex justify-between items-center w-full p-4">
          <div className="flex flex-col">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4"
                />
                <textarea
                  value={editedDiscussion}
                  onChange={(e) => setEditedDiscussion(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4"
                  rows={3}
                />
                <Button onClick={handleEditSubmit}>Save Changes</Button>
              </>
            ) : (
              <>
                <p className="font-poppins font-bold text-lg">{title}</p>
                <p className="font-roboto font-light">{Discussion}</p>
              </>
            )}
          </div>

          {!showInput ? (
            <Button onClick={() => setShowInput(true)}>Comment</Button>
          ) : (
            <div className="flex flex-col gap-2">
              <textarea
                value={commentDescription}
                onChange={handleInputChange}
                placeholder="Add your comment here..."
                className="border border-gray-300 rounded-lg py-2 px-4"
                rows={3}
              />
              <Button onClick={handleSubmitComment}>Save Comment</Button>
            </div>
          )}
        </div>
      </div>

      {/* Display Comments */}
      {isPending ? (
        <p>No comments available yet....</p>
      ) : (
        comments &&
        comments.length > 0 && (
          <div className="mt-4 ml-28">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="bg-gray-200 p-2 rounded mb-2 w-full">
                  {comment.description}
                </div>

                {/* Only show options if the current user is the comment owner */}
                {comment.userID === currentUserId && (
                  <MenuAnchorElementProvider>
                    <MenuOption>
                      <DeleteOption
                        handleDelete={() => handleDeleteComment(comment.id)}
                        payload={{
                          id: comment.id,
                        }}
                        alertText={`Are you sure you want to delete this comment?`}
                      />
                    </MenuOption>
                  </MenuAnchorElementProvider>
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default DiscussionTemplate;

