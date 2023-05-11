import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "./components/Footer";
import { Interest } from "./components/Interest";
import { About } from "./components/About";
import { Info } from "./components/Info";
import "./App.css";
import { AmatechInfo } from "./components/AmatechInfo";
import { Events } from "./components/Events";
import { Hobby } from "./components/Hobby";

const App = () => {
  const [isFlip, setIsFlip] = useState(false);

  const handleClick = () => {
    setIsFlip(!isFlip);
  };

  return (
    <>
        <main className="main">
          <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
            {/* 個人の名刺 */}
            <div className="front" onClick={() => handleClick()}>
              <section className="main__section">
                <Info
                  name="Nanami Matsuo"
                  label="あまてく 運営・企画"
                  knowMoreLink="#"
                  mail="#"
                  twitterLink="https://twitter.com/#"
                />
                <About
                  aboutText="追加"
                />
                <Hobby hobbyText="追加" />
                <Interest interestText="追加" />
                <Footer
                  twitterLink="https://twitter.com/"
                  githubLink="https://github.com/"
                  instagramLink="#"
                  linkedinLink="#"
                />
              </section>
            </div>

            {/* あまてくの名刺 */}
            <div className="back" onClick={() => handleClick()}>
              <section className="main__section">
                <AmatechInfo
                  name="あまてく"
                  label="エンジニアコミュニティ"
                  knowMoreLink="https://amatech1006.notion.site/amatech1006/9728f0790eb44f4794b8fe531fbde9c7"
                  mail="amatech1006@gmail.com"
                  twitterLink="https://twitter.com/amatech1006"
                />
                <About
                  aboutText={`2022年10月に設立. 現在100名弱が在籍.
                京都産業大学の学生を中心としたエンジニアコミュニティです. 勉強会やイベント企画, ゲスト登壇, ハッカソンなどエンジニアを目指す学生のための活動を行っています.`}
                />
                <Events />
                <Footer
                  twitterLink="https://twitter.com/amatech1006"
                  githubLink="https://github.com/amatech-repo"
                />
              </section>
            </div>
          </ReactCardFlip>
        </main>
    </>
  );
};

export default App;
