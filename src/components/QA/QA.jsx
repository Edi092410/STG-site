import React, { useContext, useEffect, useState } from "react";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import axios from "axios";
import acalous from "../../Assets/ChooseProgram/acalous.png";
import fiscus from "../../Assets/ChooseProgram/fiscus.png";
import leader from "../../Assets/ChooseProgram/leader.png";
import payroll from "../../Assets/ChooseProgram/payroll.png";
import { Button } from "../Main/Button";
import { useForm } from "react-hook-form";
import { Image } from "antd";

export const QA = () => {
  const data = [
    {
      name: "acolous",
      img: acalous,
      id: 0,
    },
    {
      name: "fiscus",
      img: fiscus,
      id: 1,
    },
    {
      name: "leader",
      img: leader,
      id: 2,
    },
    {
      name: "payrol",
      img: payroll,
      id: 3,
    },
  ];

  const [selectedChips, setSelectedChips] = useState(
    JSON.parse(localStorage.getItem("programmes"))
  );

  const handleSelectedChips = (chip) => {
    setSelectedChips(chip);
    localStorage.setItem("programmes", JSON.stringify(selectedChips));
  };

  const handleRemove = (index) => {
    // Create a copy of the current selectedChips array
    const updatedSelectedChips = [...selectedChips];
    // Remove the chip at the specified index
    // updatedSelectedChips.splice(index, 1);
    updatedSelectedChips[index] = false;
    // Update the state with the modified array
    setSelectedChips(updatedSelectedChips);
    // Update localStorage
    localStorage.setItem("programmes", JSON.stringify(updatedSelectedChips));
  };

  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://admin.e-siticom.com/api/articles",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setArticleData(data.data.data.data);
        // console.log("data:", data.data.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex items-center">
        <div className="w-[30%] h-[30px] 3xl:h-[40px]">
          <SearchBar />
        </div>
        <div className="text-[16px] 3xl:text-[24px] font-semibold mx-2">
          Таны хэрэглэдэг програм
        </div>
        <div className="flex">
          {data.map((data, index) => (
            //   data[index] &&
            // <div className={`mr-2 ${selectedChips[index] ? "" : "hidden"}`}>
            <div className={`mr-2`}>
              <Box
                img={data.img}
                index={index}
                remove={handleRemove}
                select={selectedChips[index]}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full min-h-[90vh] py-[3%] px-[5%] mt-4 bg-gradient-to-b from-bg-light-blue via-bg-pale-blue via-64% to-bg-transparent-white rounded-lg">
        {articleData &&
          articleData.length > 0 &&
          articleData.map((data, index) => {
            const contentWithUpload = [];
            const modifiedContent = data.content.replace(
              /src="(\/uploads\/[^"]+)"/g,
              'src="https://admin.e-siticom.com/$1"'
            );

            // Push the modified content for this article
            contentWithUpload.push(modifiedContent);

            // Initialize an array to store image URLs
            const imageUrls = [];

            // Loop through the modified content and extract image URLs
            contentWithUpload.forEach((content) => {
              const regex = /src="([^"]+)"/g;
              let match;
              while ((match = regex.exec(content)) !== null) {
                imageUrls.push(match[1]);
              }
            });

            return (
              <Tab head={data.title} key={index}>
                <div dangerouslySetInnerHTML={{ __html: data.intro }} />

                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                >
                  <div className=" grid grid-cols-2 gap-[10%]">
                    {imageUrls.length > 0 &&
                      imageUrls.map((imageUrl, subIndex) => (
                        <Image
                          key={subIndex}
                          src={imageUrl}
                          // width={"45%"}
                          height={"20vh"}
                          width={"100%"}
                          alt={`Image ${subIndex}`}
                          style={{
                            objectFit: "contain",
                          }}
                          // className=" object-contain"
                        />
                      ))}
                  </div>
                </Image.PreviewGroup>
                {/* </div> */}
              </Tab>
            );
          })}

        <Feedback />
      </div>
    </div>
  );
};

export const Box = ({ img, index, remove, select }) => {
  // console.log("select", select);
  const [selected, setSelected] = useState(select); // Initialize selected to false
  return (
    <div
      className="relative w-[80px] h-[40px] cursor-pointer"
      onClick={() => {
        setSelected(true); // Toggle the selected state
      }}
    >
      <div className="flex justify-center items-center w-full h-full rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
        <img src={img} alt={index} className="w-[20px] h-[20px]" />
      </div>
      <div
        className={`absolute top-0 right-0 w-5 h-5 text-white text-xs bg-[rgba(217,217,217,0.80)] cursor-pointer rounded-full transition duration-300 hover:scale-110 ${
          !selected && "hidden" // Use the opposite of selected to control visibility
        }`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from propagating to the parent div
          setSelected(false); // Set selected to false
          console.log("false");
          remove(index);
        }}
      >
        <div className="w-full h-full flex justify-center items-center pb-1">
          x
        </div>
      </div>
    </div>
  );
};

export const Tab = ({ head, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="border-[#1D3049] p-4 text-sm 3xl:text-base"
        // style={{ borderBottomWidth: ".1px" }}
      >
        <div className="flex mt-3">
          <div className="mr-auto">{head}</div>
          <div
            className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#032D60] cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99609 4.22852L8.00692 11.771"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.23098 8.00496L11.7734 7.99414"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="2"
                viewBox="0 0 14 2"
                fill="none"
              >
                <path
                  d="M1 1H13"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div className={`${open === false ? "hidden" : "animate-upToDown "}`}>
          {children}
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-[0.3px] bg-[#1D3049]"
        style={{ opacity: 0.3 }}
      ></div>
    </div>
  );
};

export const Feedback = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="relative w-full text-sm 3xl:text-base mb-4">
      <div className="flex items-center p-4 ">
        <div className="mr-3">Feedback</div>
        <div
          className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#032D60] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99609 4.22852L8.00692 11.771"
                stroke="#FEFEFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.23098 8.00496L11.7734 7.99414"
                stroke="#FEFEFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
            >
              <path
                d="M1 1H13"
                stroke="#FEFEFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {/* <div
        className="absolute inset-x-0 -bottom-4 h-[0.3px] bg-[#1D3049] "
        style={{ opacity: 0.3 }}
      ></div> */}
      <form
        className={`${
          open === false ? "hidden" : "animate-upToDown"
        } mt-3 w-full 3xl:w-[80%]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          Та түгээмэл асуулт хариултаас хүсч байгаа хариултаа олж авч чадсан уу?
        </div>
        <input
          className="mr-1"
          type="radio"
          id="firstYes"
          name="firstRadio"
          value="yes"
          {...register("first")}
        />
        <label htmlFor="firstYes">Тийм</label>
        <br />
        <input
          className="mr-1"
          type="radio"
          id="firstNo"
          name="firstRadio"
          value="no"
          {...register("first")}
        />
        <label htmlFor="firstNo">Үгүй</label>
        <br />
        <input
          className="mr-1"
          type="radio"
          id="firstMaybe"
          name="firstRadio"
          value="maybe"
          {...register("first")}
        />
        <label htmlFor="firstMaybe">Бага зэрэг</label>
        <br />
        <div className="mt-2">
          Та веб сайтыг ашиглаж байхдаа ойлгомжгүй зүйлтэй тулгарсан уу?
        </div>
        <input
          className="mr-1"
          type="radio"
          id="secondNo"
          name="secondRadio"
          value="no"
          {...register("second")}
        />
        <label htmlFor="secondNo">Үгүй</label>
        <br />
        <input
          className="mr-1"
          type="radio"
          id="secondSmall"
          name="secondRadio"
          value="small"
          {...register("second")}
        />
        <label htmlFor="secondSmall">Бага зэрэг</label>
        <br />
        <input
          className="mr-1"
          type="radio"
          id="secondMedium"
          name="secondRadio"
          value="medium"
          {...register("second")}
        />
        <label htmlFor="secondMedium">Дунд зэрэг</label>
        <br />
        <input
          className="mr-1"
          type="radio"
          id="secondLarge"
          name="secondRadio"
          value="large"
          {...register("second")}
        />
        <label htmlFor="secondLarge">Нэлээд төвөгтэй</label>
        <br />
        <input
          className="mr-1"
          type="radio"
          id="secondYes"
          name="secondRadio"
          value="yes"
          {...register("second")}
        />
        <label htmlFor="secondYes">Тийм</label>
        <br />
        <div className="mt-2">
          Бид веб сайтаа улам сайжруулахын тулд юу хийж болох талаар саналаа
          хэлээрэй.
        </div>
        <textarea
          rows={4}
          className="w-full bg-[#DFE3EE] mt-1 p-3"
          {...register("question")}
        ></textarea>
        <div className="flex justify-end w-full my-4">
          <div>
            <Button name={"Илгээх"} />
          </div>
        </div>
      </form>
    </div>
  );
};
