"use client";

type Props = {
  action: (payload: FormData) => void;
};

const AddPostForm = (props: Props) => {
  const { action } = props;

  return (
    <form className="flex flex-col gap-2" action={action}>
      <textarea
        className="textarea"
        name="content"
        maxLength={10000}
        required
      />
      <button className="btn w-max" type="submit">
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;
