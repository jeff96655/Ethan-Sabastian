import { useCallback, useEffect } from "react";

const Menu = ({ onClose }) => {
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
    window.open("https://t.me/Ethan_47274");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.location.href =
      "mailto:ethansabastian6@gmail.com?subject=Hello there !!";
  }, []);

  return (
    <div
      className="w-[241px] h-[186px] rounded-t-none rounded-br-none rounded-bl-3xs bg-purple overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[42px] left-[95px] w-[50px] h-[50px] overflow-hidden bg-[url('/frame-181@3x.png')] bg-cover bg-no-repeat bg-[top]"
        onClick={onFrameButtonClick}
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[107px] left-[95px] w-[50px] h-[50px] overflow-hidden bg-[url('/frame-18@3x.png')] bg-cover bg-no-repeat bg-[top]"
        onClick={onFrameButton1Click}
      />
    </div>
  );
};

export default Menu;
