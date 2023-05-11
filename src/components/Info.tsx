import EmailIcon from "@mui/icons-material/Email";
import LazyLoad from "react-lazy-load";
import { MailTo } from "./MailTo";
import TwitterIcon from "@mui/icons-material/Twitter";

type Props = {
  name: string;
  label: string;
  knowMoreLink: string;
  mail: string;
  twitterLink?: string;
};

export const Info = (props: Props) => {
  const { name, label, knowMoreLink, mail, twitterLink } = props;
  return (
    <>
      <LazyLoad height={300}>
        <img src="./images/profile.JPG" alt="プロフィール画像" />
      </LazyLoad>
      <section className="section-info">
        <h2 className="name">{name}</h2>
        <p className="stack">{label}</p>
        <small>
          <a href={knowMoreLink} target="_" rel="noopener noreferrer">
            Know more
          </a>
        </small>
        <div className="contact">
          <MailTo email={mail} subject="お話しましょう！" body="こんにちは！あまてく！" className="mailto">
            <EmailIcon className="icon" fontSize="small" />
            <span>Email</span>
          </MailTo>
          {twitterLink && (
            <a href={twitterLink} target="_" rel="noopener noreferrer">
              <TwitterIcon className="icon" fontSize="small" />
              <span>Twitter</span>
            </a>
          )}
        </div>
      </section>
    </>
  );
};
