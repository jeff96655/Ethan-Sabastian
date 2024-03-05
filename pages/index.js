import { useCallback, useEffect } from "react";
import Header from "../components/header";
import Typewriter from 'typewriter-effect';

const EthanSabastian = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.location.href =
      "mailto:ethansabastian6@gmail.com?subject=Hello there !!";
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://t.me/Ethan_47274");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.location.href =
      "mailto:ethansabastian6@gmail.com?subject=Hello there !!";
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://t.me/Ethan_47274");
  }, []);

  return (
    <div className="w-full relative bg-purple h-[3958px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[0px_10px] text-left text-21xl text-white font-hepta-slab md:h-[4710px]">
      <div className="w-[911px] !m-[0] absolute top-[2561px] left-[0px] flex flex-row items-center justify-end gap-[0px_483px] z-[0] lg:pr-[150px] lg:box-border md:pt-[400px] md:pr-[460px] md:box-border">
        <div className="w-3 relative h-[30px] overflow-hidden shrink-0" />
        <div className="w-[390px] relative font-extrabold inline-block h-[50px] shrink-0 md:text-11xl">
          Why choose me?
        </div>
      </div>
      <div className="w-[911px] !m-[0] absolute top-[2004px] left-[0px] flex flex-row items-center justify-end gap-[0px_483px] z-[1] lg:w-[900px] lg:gap-[0px_483px] lg:pr-[150px] lg:box-border md:pr-[450px] md:box-border">
        <div className="w-3 relative h-[30px] overflow-hidden shrink-0" />
        <div
          className="h-[50px] w-[382px] relative font-extrabold inline-block shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-11xl"
          data-animate-on-scroll
        >
          Services offered
        </div>
      </div>
      <div className="w-[945px] !m-[0] absolute top-[310px] left-[0px] flex flex-row items-center justify-end gap-[0px_438px] z-[2] lg:pr-[210px] lg:box-border md:pr-[530px] md:box-border sm:pr-[540px] sm:box-border">
        <div className="w-7 relative h-[180px] overflow-hidden shrink-0" />
        <img
          className="h-[415px] w-[394px] relative object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/male-programmer-writing-program-code@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="w-[1107px] !m-[0] absolute top-[787px] left-[0px] flex flex-row items-center justify-end gap-[0px_294px] z-[3] text-center text-6xl lg:pr-[170px] lg:box-border md:pr-[700px] md:box-border">
        <div className="w-[23px] relative h-[171px] overflow-hidden shrink-0" />
        <div
          className="h-[263px] w-[750px] relative inline-block shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[390px]"
          data-animate-on-scroll
        >
          Hello there! I’m Ethan Sabastian, a seasoned professional in the
          exciting world of Web3 community management and crypto Reddit
          marketing. With a passion for fostering vibrant online communities and
          a knack for strategic Reddit engagement, I specialize in amplifying
          brand presence and driving meaningful conversations in the
          ever-evolving landscape of decentralized technologies.
        </div>
      </div>
      <div className="w-[892px] !m-[0] absolute top-[1095px] left-[4px] flex flex-row items-center justify-end gap-[0px_448px] z-[4] text-center text-mini lg:pr-[150px] lg:box-border md:pr-[500px] md:box-border">
        <div className="w-[18px] relative h-[229px] overflow-hidden shrink-0 z-[0]" />
        <img
          className="h-[456px] w-[394px] relative object-cover [&.animate]:animate-[20s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1] z-[1]"
          alt=""
          src="/crypto-trading-and-market-research@2x.png"
          data-animate-on-scroll
        />
        <div className="w-[1200px] !m-[0] absolute top-[1614px] left-[-5px] flex flex-row items-start justify-end gap-[0px_141px] z-[2] lg:flex lg:w-[1050px] md:hidden">
          <div className="w-[394px] relative h-[659px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-black shadow-[0px_0px_30px_#00ffc2_inset] w-[394px] h-[279px]">
              <div className="absolute top-[95px] left-[24px] inline-block w-[347px] h-[156px]">
                <p className="m-0">
                  <b>Proven Track Record</b>
                </p>
                <p className="m-0">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0 font-medium">
                  Proven Track Record: I have a track record of successfully
                  managing and growing communities across various Web3 projects,
                  driving tangible results and fostering a sense of belonging
                  among community members.
                </p>
              </div>
            </div>
            <div className="absolute top-[380px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-black shadow-[0px_0px_30px_#00ffc2_inset] w-[394px] h-[279px]">
              <div className="absolute top-[87px] left-[23px] inline-block w-[347px] h-[156px]">
                <p className="m-0">
                  <b>Strategic Aproach</b>
                </p>
                <p className="m-0">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0 font-medium">
                  My approach to Reddit marketing goes beyond mere promotion – I
                  understand the nuances of the platform and employ strategies
                  that resonate with the community, driving authentic engagement
                  and building lasting relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[394px] relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-black shadow-[0px_0px_30px_#00ffc2_inset] h-[279px]">
            <div className="absolute top-[87px] left-[24px] inline-block w-[347px] h-[156px]">
              <p className="m-0">
                <b>Passion for Web3</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 font-medium">
                I am deeply passionate about the transformative potential of
                blockchain technology and decentralized systems. This passion
                infuses everything I do, driving me to stay abreast of the
                latest trends, technologies, and developments in the Web3 space.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1110px] !m-[0] absolute top-[1596px] left-[0px] flex flex-row items-center justify-end gap-[0px_275px] z-[5] text-center text-6xl lg:pr-[150px] lg:box-border md:pr-[700px] md:box-border">
        <div className="w-[18px] relative h-[135px] overflow-hidden shrink-0" />
        <div
          className="h-[263px] w-[750px] relative inline-block shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[390px]"
          data-animate-on-scroll
        >
          As a dedicated Web3 community manager and moderator, I bring 2 years
          of hands-on experience in nurturing and growing telegram communities
          centered around blockchain, cryptocurrency, and decentralized
          applications. My journey in this space has been marked by a commitment
          to fostering inclusivity, facilitating constructive dialogue, and
          driving engagement among community members.
        </div>
      </div>
      <div className="w-[1199px] !m-[0] absolute top-[2183px] left-[0px] h-[279px] flex flex-row items-start justify-end gap-[0px_141px] z-[6] text-mini lg:w-[1050px] md:flex md:w-[1000px] md:flex-row md:gap-[0px_141px]">
        <div
          className="h-[279px] w-[394px] relative rounded-xl [background:linear-gradient(180deg,_#06ffa5,_#000)] shadow-[0px_0px_30px_#00ff66_inset] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0] z-[0] md:hidden"
          data-animate-on-scroll
        >
          <div className="absolute top-[49px] left-[11px] inline-block w-[373px] h-[196px]">
            <p className="m-0">
              <b>Community Management:</b>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 font-medium">
              From building a strong foundation to nurturing growth, I offer
              comprehensive community management services tailored to your
              project's needs. Whether it's creating and implementing community
              guidelines, organizing engaging events, or fostering meaningful
              discussions, I ensure your community thrives.
            </p>
          </div>
        </div>
        <div
          className="h-[279px] w-[394px] relative rounded-xl [background:linear-gradient(180deg,_#06ffa5,_#000)] shadow-[0px_0px_30px_#00ff66_inset] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] z-[1] md:hidden"
          data-animate-on-scroll
        >
          <div className="absolute top-[49px] left-[10px] inline-block w-[373px] h-[209px]">
            <p className="m-0">
              <b>{`Reddit Marketing: `}</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0 font-medium">
              Reddit is a powerhouse platform for crypto enthusiasts, and I
              specialize in harnessing its potential to amplify brand awareness
              and drive targeted traffic. With a strategic approach to subreddit
              engagement, I craft compelling posts, participate in relevant
              discussions, and leverage the platform's unique dynamics to
              enhance your project's visibility.
            </p>
          </div>
        </div>
        <div
          className="h-[279px] w-[394px] absolute !m-[0] top-[-25px] left-[13px] rounded-xl [background:linear-gradient(180deg,_#06ffa5,_#000)] shadow-[0px_0px_30px_#00ff66_inset] overflow-hidden shrink-0 hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0] z-[2] md:flex"
          data-animate-on-scroll
        >
          <div className="absolute top-[49px] left-[11px] inline-block w-[373px] h-[196px]">
            <p className="m-0">
              <b>Community Management:</b>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 font-medium">
              From building a strong foundation to nurturing growth, I offer
              comprehensive community management services tailored to your
              project's needs. Whether it's creating and implementing community
              guidelines, organizing engaging events, or fostering meaningful
              discussions, I ensure your community thrives.
            </p>
          </div>
        </div>
        <div
          className="h-[279px] w-[394px] absolute !m-[0] top-[360px] left-[13px] rounded-xl [background:linear-gradient(180deg,_#06ffa5,_#000)] shadow-[0px_0px_30px_#00ff66_inset] overflow-hidden shrink-0 hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] z-[3] lg:hidden md:flex sm:flex"
          data-animate-on-scroll
        >
          <div className="absolute top-[49px] left-[10px] inline-block w-[373px] h-[209px]">
            <p className="m-0">
              <b>{`Reddit Marketing: `}</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0 font-medium">
              Reddit is a powerhouse platform for crypto enthusiasts, and I
              specialize in harnessing its potential to amplify brand awareness
              and drive targeted traffic. With a strategic approach to subreddit
              engagement, I craft compelling posts, participate in relevant
              discussions, and leverage the platform's unique dynamics to
              enhance your project's visibility.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[893px] !m-[0] absolute top-[3478px] left-[1px] flex flex-row items-end justify-end gap-[0px_488px] z-[7] lg:w-[800px] lg:pr-[50px] lg:box-border md:pt-[750px] md:pr-[390px] md:box-border">
        <div className="w-2.5 relative h-[25px] overflow-hidden shrink-0" />
        <div
          className="h-[50px] w-[324px] relative font-extrabold inline-block shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-11xl"
          data-animate-on-scroll
        >{`Let’s Connect `}</div>
      </div>
      <div className="w-[1109px] !m-[0] absolute top-[3574px] left-[0px] flex flex-row items-center justify-end gap-[0px_297px] z-[8] text-center text-6xl lg:pr-[130px] lg:box-border md:pt-[720px] md:pr-[700px] md:box-border">
        <div className="w-3 relative h-[111px] overflow-hidden shrink-0 z-[0]" />
        <div
          className="h-[175px] w-[750px] relative inline-block shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] z-[1] md:text-mini md:w-[395px]"
          data-animate-on-scroll
        >
          Ready to elevate your project’s online presence and engage with your
          target audience on a whole new level? I’m here to help! Let’s
          collaborate to unlock the full potential of your community and propel
          your project to new heights in the world of Web3.
        </div>
        <div className="!m-[0] absolute top-[-725px] left-[16px] hidden flex-col items-start justify-start gap-[87px_0px] z-[2] text-mini md:flex md:pt-[230px] md:box-border">
          <div className="w-[394px] relative h-[659px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-black shadow-[0px_0px_30px_#00ffc2_inset] w-[394px] h-[279px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[95px] left-[24px] inline-block w-[347px] h-[156px]">
                <p className="m-0">
                  <b>Proven Track Record</b>
                </p>
                <p className="m-0">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0 font-medium">
                  Proven Track Record: I have a track record of successfully
                  managing and growing communities across various Web3 projects,
                  driving tangible results and fostering a sense of belonging
                  among community members.
                </p>
              </div>
            </div>
            <div
              className="absolute top-[380px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-black shadow-[0px_0px_30px_#00ffc2_inset] w-[394px] h-[279px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[87px] left-[23px] inline-block w-[347px] h-[156px]">
                <p className="m-0">
                  <b>Strategic Aproach</b>
                </p>
                <p className="m-0">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0 font-medium">
                  My approach to Reddit marketing goes beyond mere promotion – I
                  understand the nuances of the platform and employ strategies
                  that resonate with the community, driving authentic engagement
                  and building lasting relationships.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[394px] h-[279px] relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-black shadow-[0px_0px_30px_#00ffc2_inset] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[87px] left-[24px] inline-block w-[347px] h-[156px]">
              <p className="m-0">
                <b>Passion for Web3</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 font-medium">
                I am deeply passionate about the transformative potential of
                blockchain technology and decentralized systems. This passion
                infuses everything I do, driving me to stay abreast of the
                latest trends, technologies, and developments in the Web3 space.
              </p>
            </div>
          </div>
        </div>
        <div className="!m-[0] absolute top-[96px] left-[238px] hidden flex-col items-end justify-start gap-[81px_0px] z-[3] md:flex md:pt-[695px] md:box-border">
          <div className="w-[25px] relative h-[11px] overflow-hidden shrink-0" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] relative h-[50px] overflow-hidden shrink-0 bg-[url('/frame-18@3x.png')] bg-cover bg-no-repeat bg-[top]"
            onClick={onFrameButtonClick}
          />
        </div>
      </div>
      <div className="w-[862px] !m-[0] absolute top-[3801px] left-[0px] flex flex-row items-center justify-end gap-[0px_195px] z-[9] lg:pr-[100px] lg:box-border md:hidden md:flex-row md:pt-[700px] md:pr-[500px] md:box-border">
        <div className="w-7 relative h-[25px] overflow-hidden shrink-0" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] relative h-[50px] overflow-hidden shrink-0 bg-[url('/frame-181@3x.png')] bg-cover bg-no-repeat bg-[top]"
          onClick={onFrameButton1Click}
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] relative h-[50px] overflow-hidden shrink-0 bg-[url('/frame-18@3x.png')] bg-cover bg-no-repeat bg-[top]"
          onClick={onFrameButton2Click}
        />
      </div>
      <div className="!m-[0] absolute top-[3871px] left-[9px] flex flex-col items-center justify-start gap-[43px_0px] z-[10] text-mini lg:pl-0 lg:box-border md:pt-[750px] md:box-border">
        <div className="w-[13px] relative h-[11px] overflow-hidden shrink-0" />
        <div className="w-[181px] relative h-[22px]">
          <div className="absolute top-[0px] left-[32px] font-medium inline-block w-[149px] h-[22px]">
            Copy Rights 2024
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
        </div>
      </div>
      <div className="w-[1187px] !m-[0] absolute top-[160px] left-[1px] flex flex-row items-end justify-center gap-[0px_270px] z-[11] text-lime lg:w-[1100px] lg:pl-5 lg:box-border md:w-[1000px] md:flex-col md:pr-[180px] md:box-border">
        <div className="w-9 relative h-[25px] overflow-hidden shrink-0" />
        <div className="relative font-extrabold lg:text-11xl lg:w-[800px] md:text-6xl">
        <Typewriter
  options={{
    strings: ['Welcome to Ethan space'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
      </div>
      <div className="!m-[0] absolute top-[3688px] left-[140px] hidden flex-col items-start justify-start gap-[46px_0px] z-[12] md:flex md:pt-[700px] md:box-border">
        <div className="w-7 relative h-[25px] overflow-hidden shrink-0" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] relative h-[50px] overflow-hidden shrink-0 bg-[url('/frame-181@3x.png')] bg-cover bg-no-repeat bg-[top]"
          onClick={onFrameButton3Click}
        />
      </div>
      <Header />
    </div>
  );
};

export default EthanSabastian;
