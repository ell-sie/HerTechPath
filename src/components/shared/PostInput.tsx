import { SetStateAction, useState } from "react";
import { toast } from "react-hot-toast";
import AddIcon from "../../assets/AddIcon";
import { useAddPostMutation } from "../../hooks/post/useAddPostMutation";

function PostInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: addPost } = useAddPostMutation();

  const handleTitleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };

  async function handleSubmit() {
    if (title.trim() && description.trim()) {
      try {
        await addPost({ title, description });
        toast.success("Post added successfully");
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Error during post addition:", error);
        toast.error("Failed to add post. Please try again.");
      }
    } else {
      toast.error("Please fill in both title and description.");
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full bg-primary-100 border border-b-4 border-primary-100 rounded-2xl p-8">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter post title"
        className="border border-gray-300 rounded-full py-2 px-4 font-roboto font-light"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Discuss the HerTechPath platform - this includes sharing feedback, asking questions, and more."
        className="border border-gray-300 rounded-lg py-2 px-4 font-roboto font-light"
        rows={4}
      />

      <div className="flex justify-between w-full">
        <div></div>
        <button
          onClick={handleSubmit}
          className="bg-black rounded-full text-primary-100 flex gap-2 items-center py-2 px-4 text-lg font-roboto font-light"
        >
          <AddIcon className="size-7" /> <div>Add Post</div>
        </button>
      </div>
    </div>
  );
}

export default PostInput;
