import EmailIcon from "@mui/icons-material/Email";
// import LazyLoad from "react-lazy-load";
import { MailTo } from "./MailTo";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar } from "@mui/material";

type Props = {
  name: string;
  label: string;
  knowMoreLink: string;
  mail: string;
  twitterLink?: string;
};

export const AmatechInfo = (props: Props) => {
  const { name, label, knowMoreLink, mail, twitterLink } = props;
  return (
    <>
      <div className="amatech__logo">
        <Avatar alt="あまてくのロゴ" src="./images/logo.png" sx={{ width: "50%", height: "auto", bgcolor: "white" }}  />
      </div>
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
