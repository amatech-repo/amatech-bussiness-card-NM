import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const eventsData = [
  {
    id: 1,
    date: "2023/03/25",
    title: "CAC合同アイディアソン",
    link: "https://www.sankei.com/pressrelease/prtimes/BD5DWRJRHNOF3ECZHUPCHO5KJQ/",
    icon: EmojiEventsIcon,
  },
  {
    id: 2,
    date: "2023/04/14",
    title: "エンジニア くるかこやんか開催",
    link: "https://amatech1006.connpass.com/event/280399/",
    icon: Diversity3Icon,
  },
  {
    id: 3,
    date: "2023/04/18",
    title: "ベガコーポレーションコラボ勉強会 ",
    link: "https://twitter.com/amatech1006/status/1648265112736919553?s=20",
    icon: AutoStoriesIcon,
  },
];

export const Events = () => {
  return (
    <section className="section_events">
      <h2 className="interest">Events</h2>
      <div className="event-container">
        <div className="section__events__card">
          {eventsData.map((event) => (
            <>
              <div className="event-card" key={event.id}>
                <a href={event.link} className="event-card__link" target="_" rel="noopener noreferrer">
                  <div className="event-card__icon">
                    <event.icon style={{ color: "black" }} />
                  </div>
                  <div>
                    <div className="event-card__title">{event.title}</div>
                    <div className="event-card__date">{event.date}</div>
                  </div>
                </a>
              </div>
            </>
          ))}
          <p className="event-more-card">
            <a href="https://amatech1006.notion.site/amatech1006/9728f0790eb44f4794b8fe531fbde9c7" target="_" rel="noopener noreferrer">もっと見る</a>
          </p>
        </div>
      </div>
    </section>
  );
};
