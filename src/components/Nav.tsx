import ProfilePicture from "./ProfilePicture";
import profileImg from "../images/profile.png";

function Header() {
  return (
    <nav className="mx-auto mt-4 flex items-center justify-between border-b-2 border-black/40 px-4 pb-3 lg:mt-6 lg:max-w-screen-lg lg:px-0 lg:pb-4">
      <h1 className="text-2xl font-bold lg:text-4xl">Knowledge Cafe</h1>
      <ProfilePicture imgSrc={profileImg} userName="Emma White" />
    </nav>
  );
}

export default Header;
