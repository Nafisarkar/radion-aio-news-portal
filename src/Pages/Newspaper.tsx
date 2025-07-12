import { useSelector } from "react-redux";

interface NewspaperState {
  currentNewsTitle: string;
  currentNewsURL: string;
  currentExternalURL: string;
}

interface RootState {
  news: NewspaperState;
}

const Newspaper = () => {
  const news = useSelector((state: RootState) => state.news);

  return (
    <div className="h-[89vh] w-full">
      <div className="w-full h-full bg-white">
        <iframe
          src={news.currentExternalURL}
          className="w-full h-full border-none"
          title={news.currentNewsTitle}
        />
      </div>
    </div>
  );
};

export default Newspaper;
