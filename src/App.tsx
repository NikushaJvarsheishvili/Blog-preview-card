import "./App.css";
import illustrationImage from "./assets/images/illustration-article.svg";
import avatarImage from "./assets/images/image-avatar.webp";

function App() {
  return (
    <>
      <div className="shadow-customBoxShadow my-40 border border-black bg-white rounded-2xl max-w-customWidth   mx-auto p-5 flex flex-col gap-4">
        <img
          className="rounded-lg"
          src={illustrationImage}
          alt="illustration-image"
        />
        <h3 className="bg-mainColor max-w-20 text-center rounded-md py-1 font-bold">
          Learning
        </h3>
        <p className="font-medium">Published 21 Dec 2023</p>
        <h2 className="font-bold text-2xl">HTML & CSS foundations</h2>
        <p className="text-gray">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-3">
          <img className="w-9" src={avatarImage} alt="avatar-image" />
          <h3 className="font-medium">Greg Hooper</h3>
        </div>
      </div>
    </>
  );
}

export default App;
