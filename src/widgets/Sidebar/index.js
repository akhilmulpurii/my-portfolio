import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((o) => !o);
  const matches = useMediaQuery("(max-width: 992px)");

  return (
    <Main>
      <SidebarContainer>
        <Sidebar.NavIcon {...{ open, handleClick }} />
        <NavLink href="/">
          <Image src={"/images/icons/logo.svg"} width={40} height={124} />
        </NavLink>
        {!matches ? <Sidebar.Arrow /> : <div style={{ width: 24 }} />}
      </SidebarContainer>
      <PageLayout>
        <SidebarMenu open={open}></SidebarMenu>
        {children}
      </PageLayout>
    </Main>
  );
}

const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  left: 61px;
  bottom: 0px;
  padding: 16px;
  transition: width cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
  white-space: nowrap;
  z-index: 999;
  background: rgba(19, 19, 19, 0.59);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid #202020;

  ${({ open }) =>
    open
      ? css`
          width: 300px;
          opacity: 1;
        `
      : css`
          width: 0px;
          opacity: 0;
        `}
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 992px) {
    margin-top: 60px;
  }
  @media only screen and (min-width: 992px) {
    margin-left: 60px;
  }
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SidebarContainer = styled.div`
  background-color: #131313;
  display: flex;
  border: none;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1000;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 992px) {
    flex-direction: row;
    height: 60px;
    width: 100vw;
    overflow: hidden;
    border-right: 0;
    padding: 10px 24px;
    border-bottom: 1px solid #202020;
    top: 0;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 992px) {
    flex-direction: column;
    width: 60px;
    height: 100vh;
    overflow: hidden;
    border-bottom: 0;
    border-right: 1px solid #202020;
    padding: 24px 10px;
  }
`;

Sidebar.NavIcon = ({ open, handleClick }) => (
  <NavIcon className={open ? "open" : ""} onClick={handleClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </NavIcon>
);

const NavLink = styled(Link)``;

const NavIcon = styled.div`
  width: 24px;
  height: 20px;
  overflow: hidden;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  & span {
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: #dedede;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2),
  & span:nth-child(3) {
    top: 8px;
  }

  & span:nth-child(4) {
    top: 16px;
  }

  &.open span:nth-child(1) {
    top: 10px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 10px;
    width: 0%;
    left: 50%;
  }
`;

Sidebar.Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold based on your requirement
      const scrollThreshold = 300;
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isVisible)
    return (
      <Arrow onClick={scrollToTop}>
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    );
  else return <div style={{ height: 28 }} />;
};

const Arrow = styled.div`
  cursor: pointer;
  margin: 0 auto;
  transform: rotate(180deg);
  margin-bottom: 20px;
  & span {
    display: block;
    width: 16px;
    height: 16px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: arrowSwing 2s infinite;
  }
  & span:nth-child(2) {
    animation-delay: -0.2s;
  }

  & span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes arrowSwing {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-10px, -10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(10px, 10px);
    }
  }
`;