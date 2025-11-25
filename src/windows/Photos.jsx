import { WindowControls } from "#components";
import {studies} from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Photos = () => {
  return (
      <>
        <div id="window-header">
          <WindowControls target="photos" />

          <PanelLeft className="ml-10 icon" />

          <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
          </div>

          <div className="flex-1 flex-center gap-3">
            <ShieldHalf className="icon" />
            <div className="search">
              <Search className="icon" />

              <input
                  type="text"
                  placeholder="Search or enter website name"
                  className="flex-1"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Share className="icon" />
            <Plus className="icon" />
            <Copy className="icon" />
          </div>
        </div>

        <div className="blog">
          <h2>Education</h2>

          <div className="space-y-8">
            {studies.map(({ id, title, school, date }) => (
                <div key={id} className="blog-post">
                  <div className="content">
                    <h3>{title}</h3>
                    <p className="text-base">{school}</p>
                    <p>{date}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
  );
};

const PhotosWrapper = WindowWrapper(Photos, "photos");

export default PhotosWrapper;
