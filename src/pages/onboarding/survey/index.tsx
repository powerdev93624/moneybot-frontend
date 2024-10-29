import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Flex} from "antd";
import { GREEN_COLOR, LIGHT_GREEN_COLOR } from "@/constants";
import PrimaryGoal from "./primarygoal";
import Challenge from "./challenge";
import Comfortable from "./comfortable";
import Situation from "./situation";
import FinancialGoal from "./financialgoal";
import { setCurrentSurveyStep } from "@/store/slices/AppSlice";


const Survery: React.FC = () => {
  const { currentSurveyStep } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const surveyStepArray = [1, 2, 3, 4, 5];
  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#fefefe",
        padding: "32px",
        borderRadius: "10px",
        borderBottom: "3px solid #eee",
        width: "400px",
      }}
      align="center"
    >
      {currentSurveyStep === 1 ? (
        <PrimaryGoal />
      ) : currentSurveyStep === 2 ? (
        <Challenge />
      ) : currentSurveyStep === 3 ? (
        <Comfortable />
      ) : currentSurveyStep === 4 ? (
        <Situation />
      ) : (
        <FinancialGoal />
      )}

      <Flex
        align="center"
        justify="space-between"
        style={{ width: "100%", marginTop: "24px" }}
      >
        <Button
          type="link"
          style={{ color: "#4B5563", padding: 0 }}
          disabled={currentSurveyStep < 2 }
          onClick={() => {
            if(currentSurveyStep > 1) {
              dispatch(setCurrentSurveyStep(currentSurveyStep - 1));
            }             
          }}
        >
          Back
        </Button>
        <Flex gap="3px">
          {surveyStepArray.map((item, idx) => {
            return (
              <span
                style={{
                  backgroundColor:
                    item === currentSurveyStep
                      ? GREEN_COLOR
                      : LIGHT_GREEN_COLOR,
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                }}
                key={idx}
              ></span>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Survery;
