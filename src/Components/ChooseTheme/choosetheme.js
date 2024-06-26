import React, { useState } from "react";
import "./choosetheme.css";
import { Image, Tab, Tabs, TabList, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Iframe from "react-iframe";

function ChooseTheme() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const category = searchParams.get("category");
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const toggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };
  return (
    <div className="choose_theme_page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
              <Link to={"/storedetails"}>
                <Tab className="disabled">Store Details</Tab>
              </Link>
              <Link to={{
                  pathname: "/categories",
                  search: `?store=${storeID}`,
                }}>
                <Tab className="disabled">Categories</Tab>
              </Link>
              <Tab _isselected="true">Choose Theme</Tab>
              <Tab isDisabled className="disabled">
                Customize Theme
              </Tab>
              <Tab isDisabled className="disabled">
                Add Products
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="choose_theme_body">
        <div className="dashboard1">
        <div className="dash_items">
            <Link to={"/userhome"}>
              <Image className="dashboard_home" src="/images/home.svg" />
            </Link>
            <Link className="home_txt" to={"/userhome"}>
              Home
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/profile"}>
              <Image className="dashboard_profile" src="/images/profile.svg" />
            </Link>
            <Link className="profile_txt" to={"/profile"}>
              Profile
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/help"}>
              <Image className="dashboard_help" src="/images/help.svg" />
            </Link>
            <Link className="help_txt" to={"/help"}>
              How to Create?
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/"} onClick={handleLogout}>
              <Image className="back_dash" src="/images/logout.svg" />
            </Link>
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="choose_theme_container">
        <div className="chatbox">
          {chatboxOpen && (
            <div>
              <Iframe
                url="http://127.0.0.1:5500/standalone-frontend/base.html"
                width="400px"
                height="600px"
              />
            </div>
          )}
        </div>
        <button onClick={toggleChatbox} className="chatbox__button">
          <Image src="/images/chatbox-icon.svg" />
        </button>
          {category === "electronics" && (
            <>
              <div className="theme1 gray">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=electronics&theme=gray` }}>
                  <Image
                    className="theme1img"
                    src="/images/gray_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=electronics&theme=gray` }}>
                  <Text className="theme1txt">Asher</Text>
                </Link>
              </div>
              <div className="theme2 blue">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=electronics&theme=blue` }}>
                  <Image
                    className="theme2img"
                    src="/images/blue_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=electronics&theme=blue` }}>
                  <Text className="theme2txt">Ocean</Text>
                </Link>
              </div>
            </>
          )}
          {category === "clothing" && (
            <>
              <div className="theme1 teal">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=clothing&theme=teal` }}>
                  <Image
                    className="theme1img"
                    src="/images/teal_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=clothing&theme=teal` }}>
                  <Text className="theme1txt">Aqua</Text>
                </Link>
              </div>
              <div className="theme2 cyan">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=clothing&theme=cyan` }}>
                  <Image
                    className="theme2img"
                    src="/images/cyan_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=clothing&theme=cyan` }}>
                  <Text className="theme2txt">Neptune</Text>
                </Link>
              </div>
            </>
          )}
          {category === "grocery" && (
            <>
              <div className="theme1 orange">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=grocery&theme=orange` }}>
                  <Image
                    className="theme1img"
                    src="/images/orange_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=grocery&theme=orange` }}>
                  <Text className="theme1txt">Amber</Text>
                </Link>
              </div>
              <div className="theme2 green">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=grocery&theme=green` }}>
                  <Image className="theme2img" src="/images/green_theme_ss.png" />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=grocery&theme=green` }}>
                  <Text className="theme2txt">Ivy</Text>
                </Link>
              </div>
            </>
          )}
          {category === "food" && (
            <>
              <div className="theme1 yellow">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=food&theme=yellow` }}>
                  <Image
                    className="theme1img"
                    src="/images/yellow_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=food&theme=yellow` }}>
                  <Text className="theme1txt">Sunny</Text>
                </Link>
              </div>
              <div className="theme2 red">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=food&theme=red` }}>
                  <Image className="theme2img" src="/images/red_theme_ss.png" />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=food&theme=red` }}>
                  <Text className="theme2txt">Ruby</Text>
                </Link>
              </div>
            </>
          )}
          {category === "health" && (
            <>
              <div className="theme1 purple">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=health&theme=purple` }}>
                  <Image
                    className="theme1img"
                    src="/images/purple_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=health&theme=purple` }}>
                  <Text className="theme1txt">Wisteria</Text>
                </Link>
              </div>
              <div className="theme2 pink">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=health&theme=pink` }}>
                  <Image className="theme2img" src="/images/pink_theme_ss.png" />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=health&theme=pink` }}>
                  <Text className="theme2txt">Sakura</Text>
                </Link>
              </div>
            </>
          )}
          {category === "others" && (
            <>
              <div className="theme1 gray">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=others&theme=gray` }}>
                  <Image
                    className="theme1img"
                    src="/images/gray_theme_ss.png"
                  />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=others&theme=gray` }}>
                  <Text className="theme1txt">Asher</Text>
                </Link>
              </div>
              <div className="theme2 blue">
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=others&theme=blue` }}>
                  <Image className="theme2img" src="/images/blue_theme_ss.png" />
                </Link>
                <Link to={{ pathname: "/customizetheme", search: `?store=${storeID}&category=others&theme=blue` }}>
                  <Text className="theme2txt">Ocean</Text>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default ChooseTheme;
