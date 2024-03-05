import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  const openMenuPopup = useCallback(() => {
    setMenuPopupOpen(true);
  }, []);

  const closeMenuPopup = useCallback(() => {
    setMenuPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-[1728px] fixed !m-[0] top-[0px] left-[0px] bg-gray [backdrop-filter:blur(20px)] h-[60px] overflow-hidden shrink-0 z-[13]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[15px] left-[375px] w-10 h-[31px] hidden md:flex"
          onClick={openMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lime w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[13px] left-[0px] rounded-3xs bg-lime w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[26px] left-[0px] rounded-3xs bg-lime w-10 h-[5px] overflow-hidden" />
        </button>
      </div>
      {isMenuPopupOpen && (
        <PortalPopup placement="Top right" onOutsideClick={closeMenuPopup}>
          <Menu onClose={closeMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
