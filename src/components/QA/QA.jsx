import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import axios from "axios";
import { Button } from "../Main/Button";
import { useForm } from "react-hook-form";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../context/OrderProvider";
import "./style.css";
export const QA = () => {
  const [data, setData] = useState([]);

  const [selectedChips, setSelectedChips] = useState(
    JSON.parse(localStorage.getItem("programmes"))
  );

  const { refresh, setRefresh } = useContext(OrderContext);

  const handleSelectedChips = (index) => {
    // setSelectedChips(chip);

    // Create a copy of the current selectedChips array
    const updatedSelectedChips = [...selectedChips];
    // Remove the chip at the specified index
    updatedSelectedChips[index] = {
      id: data[index].id,
      select: true, // Toggle the select property
    };
    // Update the state with the modified array
    setSelectedChips(updatedSelectedChips);
    // Update localStorage
    localStorage.setItem("programmes", JSON.stringify(updatedSelectedChips));
    setRefresh((prev) => !prev);
  };

  const handleRemove = (index) => {
    // Create a copy of the current selectedChips array
    const updatedSelectedChips = [...selectedChips];
    // Remove the chip at the specified index
    // updatedSelectedChips[index] = false;
    updatedSelectedChips[index] = {
      id: data[index].id,
      select: false, // Toggle the select property
    };
    // Update the state with the modified array
    setSelectedChips(updatedSelectedChips);
    // Update localStorage
    localStorage.setItem("programmes", JSON.stringify(updatedSelectedChips));
    setRefresh((prev) => !prev);
  };

  const [articleData, setArticleData] = useState([]);
  const iframeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(iframeRef.current.offsetWidth);
  });

  const navigate = useNavigate();

  useEffect(() => {
    const data = async (idsString) => {
      try {
        const [data, data2] = await Promise.all([
          axios.get("https://admin.e-siticom.com/api/solarticles", {
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              ids: idsString,
            },
          }),
          axios.get("https://admin.e-siticom.com/api/solutions"),
        ]);
        setArticleData(data.data.data);
        setData(data2.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    if (localStorage.getItem("role")) {
      navigate("/");
    }

    const fetchData = async () => {
      const parsedData = JSON.parse(localStorage.getItem("programmes"));

      if (!parsedData) {
        // Update the state directly when parsedData exists
        // setRefresh((prev) => !prev);

        navigate("/help");
      } else {
        const ids = parsedData
          .filter((element) => element?.select === true)
          .map((element) => element.id); // Extract the 'id' values

        const idsString = ids.join(",");
        data(idsString);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const data = async (idsString) => {
      try {
        const [data, data2] = await Promise.all([
          axios.get("https://admin.e-siticom.com/api/solarticles", {
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              ids: idsString,
            },
          }),
          axios.get("https://admin.e-siticom.com/api/solutions"),
        ]);
        setArticleData(data.data.data);
        // const modifiedData = data2.data.data.data.map((item) => ({
        //   ...item,
        //   image: `https://admin.e-siticom.com/uploads/products/${item.image}`, // Modify the image property
        // }));
        setData(data2.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    if (localStorage.getItem("role")) {
      navigate("/");
    }

    const fetchData = async () => {
      const parsedData = JSON.parse(localStorage.getItem("programmes"));

      if (!parsedData) {
        // Update the state directly when parsedData exists
        // setRefresh((prev) => !prev);
        navigate("/help");
      } else {
        const ids = parsedData
          .filter((element) => element?.select === true)
          .map((element) => element.id); // Extract the 'id' values

        const idsString = ids.join(",");
        data(idsString);
      }
    };

    fetchData();
  }, [refresh]);

  const viewIncrement = async (data) => {
    try {
      const response = await axios.get(
        `https://admin.e-siticom.com/api/articles/${data}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleMouseMove = (e) => {
    const btn = e.target;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };
  return (
    <div className="w-full h-full">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="md:w-[30%] w-full h-[30px] 3xl:h-[40px]">
          <SearchBar />
        </div>
        <div className="flex items-center mt-2 lg:mt-0">
          {/* <div className="md:block hidden text-[16px] 3xl:text-[24px] font-semibold mx-2">
            Таны хэрэглэдэг програм
          </div> */}
          <div className="flex">
            {data.map((data, index) => (
              <div className={`mr-2`}>
                <Box
                  img={data.image}
                  index={index}
                  remove={handleRemove}
                  bool={selectedChips[index]?.select}
                  select={handleSelectedChips}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full h-full min-h-[90vh] py-[3%] px-[5%] mt-4 bg-gradient-to-b from-bg-light-blue via-bg-pale-blue via-64% to-bg-transparent-white rounded-lg"
        ref={iframeRef}
        // className="mouse-cursor-gradient-tracking w-full h-full min-h-[90vh] py-[3%] px-[5%] mt-4 rounded-lg"
        // ref={iframeRef}
        // onMouseMove={handleMouseMove}
      >
        {articleData &&
          articleData.length > 0 &&
          articleData.map((prop, index) => {
            const contentWithUpload = [];
            const modifiedContent = prop.content.replace(
              /src="(\/uploads\/[^"]+)"/g,
              'src="https://admin.e-siticom.com/$1"'
            );

            // Push the modified content for this article
            contentWithUpload.push(modifiedContent);

            // Initialize an array to store image URLs
            // let imageUrls = [];
            const videoUrls = [];

            // Loop through the modified content and extract image URLs
            // contentWithUpload.forEach((content) => {
            //   const regex = /<img[^>]*src="([^"]+)"/g;
            //   let match;
            //   while ((match = regex.exec(content)) !== null) {
            //     imageUrls.push(match[1]);
            //   }
            // });

            // const imageUrls = articleData.map((imageUrl) => ({
            //   image: imageUrl.thumbnall,
            // }));

            // data.content.forEach((video) => {
            const regex = /<iframe[^>]*src="([^"]+)"/g;
            let match;
            while ((match = regex.exec(prop.content)) !== null) {
              videoUrls.push(match[1]);
            }
            // });

            return (
              <Tab
                head={prop.title}
                key={index}
                increment={() => viewIncrement(prop.id)}
                data={data}
                id={prop.solution_id}
                name={prop.solution}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: prop.intro }}
                  className="my-4"
                />
                <div className=" grid grid-cols-2 gap-[10%]">
                  <Image
                    // key={subIndex}
                    key={index}
                    src={prop.thumbnall}
                    // width={"45%"}
                    height={"20vh"}
                    width={"100%"}
                    alt={`Image ${index}`}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                {videoUrls &&
                  videoUrls.length > 0 &&
                  videoUrls.map((video, index) => {
                    return (
                      <iframe
                        key={index}
                        src={`https:${video}`}
                        title={index}
                        width={"100%"}
                        height={(width * 81) / 160}
                        allowFullScreen
                        // frameBorder="0"
                        // className="w-full h-auto"
                      ></iframe>
                    );
                  })}
              </Tab>
            );
          })}

        <Feedback />
      </div>
    </div>
  );
};

export const Box = ({ img, index, remove, select, bool }) => {
  const [selected, setSelected] = useState(bool); // Initialize selected to false
  return (
    <div
      className="relative 3xl:w-[80px] 3xl:h-[40px] w-[60px] h-[30px] cursor-pointer"
      onClick={() => {
        select(index);
        setSelected(true); // Toggle the selected state
      }}
    >
      <div className="flex justify-center items-center w-full h-full rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
        <img
          src={img}
          alt={index}
          className="3xl:w-[20px] 3xl:h-[20px] w-[15px] h-[15px]"
        />
      </div>
      <div
        className={`absolute top-0 right-0 w-5 h-5 text-white text-xs bg-[rgba(217,217,217,0.80)] cursor-pointer rounded-full transition duration-300 hover:scale-110 ${
          !selected && "hidden" // Use the opposite of selected to control visibility
        }`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from propagating to the parent div
          setSelected(false); // Set selected to false
          remove(index);
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3.33594 3.33203L8.66926 8.66536"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33464 8.66536L8.66797 3.33203"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Tab = ({ head, name, increment, data, id, children }) => {
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const handleIncrement = () => {
    setLike(like + 1);
  };
  const handleDecrement = () => {
    if (like > 0) setLike(like - 1);
    else setLike(0);
  };
  const handleIncrementDislike = () => {
    setDislike(dislike + 1);
  };
  const handleDecrementDislike = () => {
    if (dislike > 0) setDislike(dislike - 1);
    else setDislike(0);
  };
  const [activeLike, setActiveLike] = useState(false);
  const [activeDislike, setActiveDislike] = useState(false);

  return (
    <div className="relative">
      <div className="p-4 text-sm 3xl:text-base">
        <div className="flex">
          <div className="mr-auto font-medium">{head}</div>
          <div className={`flex gap-3 `}>
            <div
              className={`${
                open === true && "hidden"
              } text-slate-100 mr-2 text-[14px]`}
            >
              {/* {data &&
                data.length > 0 &&
                data
                  .filter((element) => element.id === id)
                  .map((element) => element.name)} */}
              {name}
            </div>
            <div className={`flex ${open === false && "hidden"}  `}>
              <div
                onClick={() => {
                  console.log("like");
                  // handleIncrement();
                  if (activeDislike) {
                    setActiveDislike(false);
                    handleDecrementDislike();
                  }
                  setActiveLike((prevActive) => !prevActive);
                  if (!activeLike) handleIncrement();
                  else handleDecrement();
                }}
              >
                {activeLike === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className=" cursor-pointer transition duration-200 hover:scale-110"
                  >
                    <path
                      d="M7.89844 15.17L10.025 16.8164C10.2994 17.0908 10.9168 17.228 11.3284 17.228H13.9352C14.7584 17.228 15.6502 16.6106 15.856 15.7874L17.5024 10.7796C17.8454 9.8192 17.228 8.99599 16.199 8.99599H13.455C13.0434 8.99599 12.7004 8.65299 12.769 8.1728L13.112 5.97761C13.2492 5.36022 12.8376 4.67422 12.2202 4.46842C11.6714 4.26262 10.9854 4.53702 10.711 4.94862L7.89844 9.13319"
                      stroke="#FFFFFF"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M4.40234 15.1707V8.44792C4.40234 7.48753 4.81394 7.14453 5.77433 7.14453H6.46033C7.42072 7.14453 7.83232 7.48753 7.83232 8.44792V15.1707C7.83232 16.1311 7.42072 16.474 6.46033 16.474H5.77433C4.81394 16.474 4.40234 16.1311 4.40234 15.1707Z"
                      stroke="#FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className=" cursor-pointer transition duration-200 hover:scale-110"
                  >
                    <g transform="translate(5, 5)">
                      <path
                        d="M3.83594 9.73617V3.63947C3.83594 3.39944 3.90795 3.16542 4.03996 2.96739L5.67814 0.531111C5.93617 0.141066 6.57824 -0.134966 7.12431 0.0690575C7.71237 0.26708 8.10242 0.927157 7.9764 1.51522L7.66437 3.47745C7.64037 3.65747 7.68837 3.81949 7.79038 3.94551C7.8924 4.05952 8.04241 4.13153 8.20443 4.13153H10.6707C11.1448 4.13153 11.5528 4.32355 11.7928 4.65958C12.0209 4.98362 12.0629 5.40367 11.9129 5.82972L10.4367 10.3242C10.2507 11.0683 9.44057 11.6744 8.63648 11.6744H6.29621C5.89416 11.6744 5.3301 11.5364 5.07207 11.2783L4.30399 10.6843C4.00996 10.4623 3.83594 10.1082 3.83594 9.73617Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M1.92622 2.46875H1.30815C0.378044 2.46875 0 2.82879 0 3.71689V9.75359C0 10.6417 0.378044 11.0017 1.30815 11.0017H1.92622C2.85633 11.0017 3.23437 10.6417 3.23437 9.75359V3.71689C3.23437 2.82879 2.85633 2.46875 1.92622 2.46875Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                )}
              </div>

              <p className="ml-1 text-white">{like}</p>
            </div>
            <div className={`flex ${open === false && "hidden"}`}>
              <div
                onClick={() => {
                  console.log("dislike");
                  if (activeLike) {
                    setActiveLike(false);
                    handleDecrement();
                  }
                  setActiveDislike((prevActive) => !prevActive);
                  if (!activeDislike) handleIncrementDislike();
                  else handleDecrementDislike();
                }}
              >
                {activeDislike === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className=" cursor-pointer transition duration-200 hover:scale-110"
                  >
                    <path
                      d="M14.1016 6.83003L11.975 5.18365C11.7006 4.90925 11.0832 4.77205 10.6716 4.77205H8.06479C7.2416 4.77205 6.34981 5.38945 6.14401 6.21264L4.49762 11.2204C4.15462 12.1808 4.77202 13.004 5.80101 13.004H8.54499C8.95659 13.004 9.29958 13.347 9.23098 13.8272L8.88799 16.0224C8.75079 16.6398 9.16239 17.3258 9.77978 17.5316C10.3286 17.7374 11.0146 17.463 11.289 17.0514L14.1016 12.8668"
                      stroke="#FFFFFF"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M17.5977 6.82934V13.5521C17.5977 14.5125 17.1861 14.8555 16.2257 14.8555H15.5397C14.5793 14.8555 14.1677 14.5125 14.1677 13.5521V6.82934C14.1677 5.86895 14.5793 5.52595 15.5397 5.52595H16.2257C17.1861 5.52595 17.5977 5.86895 17.5977 6.82934Z"
                      stroke="#FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className=" cursor-pointer transition duration-200 hover:scale-110"
                  >
                    <g transform="translate(5, 5)">
                      <path
                        d="M8.16406 2.26383L8.16406 8.36053C8.16406 8.60056 8.09205 8.83458 7.96004 9.03261L6.32186 11.4689C6.06383 11.8589 5.42176 12.135 4.87569 11.9309C4.28763 11.7329 3.89758 11.0728 4.0236 10.4848L4.33563 8.52255C4.35963 8.34253 4.31163 8.18051 4.20962 8.05449C4.1076 7.94048 3.95759 7.86847 3.79557 7.86847H1.32928C0.855229 7.86847 0.447181 7.67645 0.207153 7.34042C-0.0208731 7.01638 -0.0628773 6.59633 0.0871401 6.17028L1.56331 1.67576C1.74933 0.931675 2.55943 0.325605 3.36352 0.325605H5.70379C6.10584 0.325605 6.6699 0.463621 6.92793 0.721651L7.69601 1.31572C7.99004 1.53775 8.16406 1.89179 8.16406 2.26383Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M10.0738 9.53125H10.6918C11.622 9.53125 12 9.17121 12 8.28311L12 2.24641C12 1.35831 11.622 0.998269 10.6918 0.998269H10.0738C9.14367 0.998269 8.76563 1.35831 8.76563 2.24641V8.28311C8.76563 9.17121 9.14367 9.53125 10.0738 9.53125Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                )}
              </div>

              <p className="ml-1 text-white">{dislike}</p>
            </div>

            <div
              className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#032D60] cursor-pointer"
              onClick={() => {
                open === false && increment();
                setOpen(!open);
              }}
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
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.23098 8.00496L11.7734 7.99414"
                    stroke="#FFFFFF"
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
        </div>
        <div className={`${open === false ? "hidden" : "animate-upToDown "}`}>
          {children}
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-[0.3px] bg-slate-500"
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
        <div className="flex justify-end w-full h-10 my-4">
          <div>
            <Button name={"Илгээх"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export const QuestionBox = ({ children }) => {
  const iframeRef = useRef(null);
  const handleMouseMove = (e) => {
    const btn = e.target;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      // className="w-full h-full min-h-[90vh] py-[3%] px-[5%] mt-4 bg-gradient-to-b from-bg-light-blue via-bg-pale-blue via-64% to-bg-transparent-white rounded-lg"
      className="mouse-cursor-gradient-tracking w-[90vw] h-[90vh] py-[3%] px-[5%] mt-4 rounded-lg"
      ref={iframeRef}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};
