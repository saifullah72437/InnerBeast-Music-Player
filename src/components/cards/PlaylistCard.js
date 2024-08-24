const PlaylistCard = ({ playlist }) => {
  const subtitle = playlist.subtitle || playlist.description;
  return (
    <div
      className="w-[116px] h-[163px] rounded-lg group"
      style={{ transition: "0.3s all" }}
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-[116px] h-[116px] group-hover:w-[120px] group-hover:h-[120px] aspect-square object-cover">
          <img
            src={playlist.image[2].link}
            className="w-full h-full aspect-square object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-[36px] flex flex-col items-center justify-center px-1">
          <p className=" text-[13px] font-[550] lato text-primaryText line-clamp-1">
            {playlist.title}
          </p>
          <p className=" text-[13px] text-secondaryText lato line-clamp-1">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
