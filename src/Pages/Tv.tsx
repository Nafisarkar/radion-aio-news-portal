import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

interface StationState {
  currentStationName: string;
  currentStationURL: string;
  currentExternalURL: string;
}

interface RootState {
  station: StationState;
}

const Tv = () => {
  const station = useSelector((state: RootState) => state.station);
  console.log("Current TV Station:", station);

  return (
    <div className="w-full h-[89%] bg-black">
      <ReactPlayer
        src={station.currentExternalURL} // changed from `src` to `url`
        width="100%"
        height="100%"
        playing
        controls
        className="react-player"
      />
    </div>
  );
};

export default Tv;
