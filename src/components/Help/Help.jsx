import React from "react";
import { Main } from "../../layouts/Main";
import { Box } from "../Main/Box";
import { Button } from "../Main/Button";
import image from "../../Assets/help/help.png";
import { useNavigate } from "react-router-dom";
export const Help = () => {
  const navigate = useNavigate();
  return (
    <Main head="Харилцагчийн туслах">
      <div className="w-full h-full flex justify-center items-center 3xl:mt-[90px] mt-[50px]">
        <div className="w-[330px]">
          <Box>
            <div className="w-full flex flex-col justify-center px-[20%]">
              <div className="flex justify-center my-[20px]">
                <img
                  src={image}
                  alt="help page main picture"
                  width={"70px"}
                  height={"70px"}
                />
              </div>
              <div className=" text-center text-[#032D60] font-medium">
                24/7 Онлайн үйлчилгээний хүсэлт илгээх боломжтой
              </div>
              <div
                className="mb-[50px] mt-[30px]"
                onClick={() => navigate("/program")}
              >
                <Button name={"Танд туслая"} wiggleLength={100} />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </Main>
  );
};
