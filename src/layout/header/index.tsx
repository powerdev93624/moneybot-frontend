import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from "antd";
import { GREEN_COLOR } from "@/constants";
import { BotIcon } from "@/assets/icon";

const AppHeader: React.FC = () => {
	const navigate = useNavigate();
  return (
    <Flex justify="space-between" align="center">
      <Flex
        justify="space-between"
        align="center"
        gap="10px"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        <img src={BotIcon} width="30px"/>
        <Typography style={{ fontSize: "20px" }}>Money<span style={{color: GREEN_COLOR}}>Bot</span></Typography>
      </Flex>
      <Button
        type="primary"
        className="green"
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          backgroundColor: GREEN_COLOR,
        }}
				onClick={() => {navigate("/onboarding")}}
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default AppHeader;
