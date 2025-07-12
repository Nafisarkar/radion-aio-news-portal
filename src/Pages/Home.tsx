import RotatingText from "@/components/RotatingText/RotatingText";

const Home = () => {
  return (
    <div className="w-full h-[89vh] ">
      <div className="flex items-center justify-center h-full">
        <div className=" text-2xl sm:text-3xl md:text-4xl font-bold flex flex-row gap-4 items-center">
          <div className="text-red-500 flex items-center gap-2">
            <span className="h-3 w-3 bg-red-500 rounded-full"></span>
            <p>Live</p>
          </div>
          <RotatingText
            texts={["News", "Articles", "TV", "Channels"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-red-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
