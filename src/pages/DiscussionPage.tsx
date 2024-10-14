import AddIcon from "../assets/AddIcon";
import DiscussionTemplate from "../components/DiscussionTemplate";

export default function DiscussionPage() {
  return (
    <div className="flex flex-col justify-between gap-5 py-10">
      <div className="text-4xl font-bold font-poppins">Discussions</div>
      <div className="flex flex-col gap-2 border-b-stone-300 border-b-2 py-4">
        <div className="flex justify-between w-full items-center">
          <div className="font-roboto font-thin">
            Discuss the HerTechPath platform - this includes sharing feedback,
            asking questions, and more.
          </div>
          <button className="bg-black rounded-full text-primary-100 flex gap-2 items-center py-2 px-4 text-xl font-roboto font-light">
            <AddIcon className="size-7" /> <div>Ask New</div>
          </button>
        </div>
      </div>
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
      <DiscussionTemplate
        title="What is Javascript?"
        Discussion="It is a language that helps the website to be interactive"
      />
    </div>
  );
}
