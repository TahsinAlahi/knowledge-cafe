function ProfilePicture({
  imgSrc,
  userName = "User Picture",
}: {
  imgSrc: string;
  userName?: string;
}) {
  return (
    <img
      src={imgSrc}
      alt={userName}
      className="aspect-square w-12 rounded-full object-cover lg:w-14"
    />
  );
}

export default ProfilePicture;
