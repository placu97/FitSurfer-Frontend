import React from "react";

import { Img, Stack, Text, List, Button, Line } from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-blue_400 rounded-bl-[200px] rounded-br-[200px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
          <Img
            src="images/img_group.png"
            className="max-w-[723px] ml-[auto] mr-[auto] mx-[auto] sm:my-[47px] md:my-[61px] my-[90px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            alt="Group"
          />
        </header>
        <div className="flex flex-col justify-start sm:mt-[38px] md:mt-[50px] mt-[73px] w-[100%]">
          <Stack className="bg-cyan_50 h-[646px] max-w-[1180px] sm:ml-[69px] md:ml-[89px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[26px] p-[38px] sm:pl-[15px] sm:pr-[15px] relative rounded-radius35 w-[100%]">
            <Text
              className="absolute leading-[80.00px] md:leading-[normal] sm:leading-[normal] left-[5%] sm:mx-[0] text-black_900 top-[9%] sm:w-[100%] w-[47%]"
              as="h1"
              variant="h1"
            >
              Trova persone come te con cui allenarti
            </Text>
            <Stack className="absolute h-[541px] right-[6%] top-[0] sm:w-[100%] w-[45%]">
              <Img
                src="images/img_image1365.png"
                className="absolute h-[462px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[89%]"
                alt="image1365"
              />
              <Img
                src="images/img_image938.png"
                className="absolute bottom-[0] h-[427px] max-w-[100%] right-[0] sm:w-[227px] md:w-[293px] w-[427px]"
                alt="image938"
              />
            </Stack>
            <Stack className="absolute bottom-[6%] h-[230px] left-[4%] w-[24%]">
              <Img
                src="images/img_image1648.png"
                className="absolute bottom-[0] h-[160px] max-w-[100%] right-[0] md:w-[110px] w-[160px] sm:w-[85px]"
                alt="image1648"
              />
              <Img
                src="images/img_image1662.png"
                className="absolute h-[186px] left-[0] max-w-[100%] top-[0] md:w-[128px] w-[186px] sm:w-[99px]"
                alt="image1662"
              />
            </Stack>
          </Stack>
          <div className="flex flex-col items-center justify-start max-w-[1181px] md:ml-[89px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Text className="text-black_900 w-[auto]" as="h2" variant="h2">
                Meet our team
              </Text>
              <Text
                className="font-bold text-red_400 w-[auto]"
                as="h4"
                variant="h4"
              >
                View All
              </Text>
            </div>
            <List
              className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start sm:pb-[3px] md:pb-[4px] pb-[7px] sm:px-[0] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle16.png"
                  className="max-w-[100%] rounded-radius10 w-[100%]"
                  alt="RectangleSixteen"
                />
                <div className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                  <Text className="text-gray_800 w-[auto]" as="h3" variant="h3">
                    Sarah Jae
                  </Text>
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-black_900_68 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Branding Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:pb-[3px] md:pb-[4px] pb-[7px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_rectangle15.png"
                  className="max-w-[100%] rounded-radius10 w-[100%]"
                  alt="RectangleFifteen"
                />
                <div className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                  <Text className="text-gray_800 w-[auto]" as="h3" variant="h3">
                    John Doe
                  </Text>
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-black_900_68 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Product Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:pb-[4px] md:pb-[5px] pb-[8px] sm:px-[0] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle17.png"
                  className="max-w-[100%] rounded-radius10 w-[100%]"
                  alt="RectangleSeventeen"
                />
                <div className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Text className="text-gray_800 w-[auto]" as="h3" variant="h3">
                    Samantha
                  </Text>
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-black_900_68 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    SEO Specialist
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1180px] md:ml-[89px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text className="text-black_900 w-[auto]" as="h2" variant="h2">
              What we do
            </Text>
            <div className="bg-red_50 flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] p-[112px] sm:p-[15px] md:p-[77px] rounded-radius90 w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Button
                    className="flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center sm:w-[24px] md:w-[31px] w-[46px]"
                    shape="icbRoundedBorder10"
                    variant="icbOutlineRed3007c"
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="h-[23px] sm:h-[13px] md:h-[16px] flex items-center justify-center"
                      alt="cut"
                    />
                  </Button>
                  <div className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      UIUX Design
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_700 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      We can make your website or application design better with
                      this service
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col ml-[102px] md:ml-[70px] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius30 shadow-bs3 sm:w-[100%] w-[31%]">
                  <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <Button
                      className="flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center sm:w-[24px] md:w-[31px] w-[46px]"
                      shape="icbRoundedBorder10"
                      variant="icbOutlineCyan40087"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="h-[23px] sm:h-[13px] md:h-[16px] flex items-center justify-center"
                        alt="settings"
                      />
                    </Button>
                    <div className="flex flex-col justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] w-[100%]">
                      <Text
                        className="text-black_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Website Dev
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-gray_700 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Make your business more leverage by having an optimal
                        website and we are ready to help
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:ml-[59px] ml-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                  <Button
                    className="flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center sm:w-[24px] md:w-[31px] w-[46px]"
                    shape="icbRoundedBorder10"
                    variant="icbOutlineLime80087"
                  >
                    <Img
                      src="images/img_lightbulb.svg"
                      className="h-[23px] sm:h-[13px] md:h-[16px] flex items-center justify-center"
                      alt="lightbulb"
                    />
                  </Button>
                  <div className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Branding & Product
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_700 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      we can also help you in the affairs of product branding so
                      that your products can be more riveting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Stack className="h-[559px] mt-[100px] sm:mt-[53px] md:mt-[68px] relative w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col items-center justify-end sm:p-[15px] md:p-[34px] p-[50px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group1.png')" }}
            >
              <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      What our clients are saying
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                      <Button className="flex items-center justify-center sm:w-[100%] w-[48%]">
                        <Img
                          src="images/img_group683.svg"
                          className="flex items-center justify-center"
                          alt="group683"
                        />
                      </Button>
                      <Button className="flex items-center justify-center sm:w-[100%] w-[48%]">
                        <Img
                          src="images/img_group684.svg"
                          className="flex items-center justify-center"
                          alt="group684"
                        />
                      </Button>
                    </div>
                  </div>
                  <List
                    className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[35px] md:mt-[46px] mt-[67px] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius10 shadow-bs4 w-[100%]">
                      <div className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[99%]">
                        <Text
                          className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          I am very satisfied with the work on the Nexus team.
                          good service, satisfying work results and can also
                          increase my business turnover. Thank you so much to
                          the Nexus team.
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] rounded-radius12 sm:w-[100%] w-[64%]">
                          <Img
                            src="images/img_rectangle52.png"
                            className="sm:h-[27px] md:h-[34px] h-[49px] max-w-[100%] rounded-radius12 sm:w-[26px] md:w-[33px] w-[49px]"
                            alt="RectangleFiftyTwo"
                          />
                          <div className="flex flex-col md:ml-[17px] ml-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              John Richard
                            </Text>
                            <Text
                              className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius10 shadow-bs4 w-[100%]">
                      <div className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[99%]">
                        <Text
                          className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          since branding with the oracle team i feel my business
                          has a very fast and good development, everything also
                          always goes through a process of discussion that is
                          really valid
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pr-[14px] md:pr-[9px] sm:px-[0] rounded-radius12 sm:w-[100%] w-[69%]">
                          <Img
                            src="images/img_rectangle52_49X49.png"
                            className="sm:h-[27px] md:h-[34px] h-[49px] max-w-[100%] rounded-radius12 sm:w-[26px] md:w-[33px] w-[49px]"
                            alt="RectangleFiftyTwo One"
                          />
                          <div className="flex flex-col md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Andrew Smith
                            </Text>
                            <Text
                              className="font-normal ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Founder Ulala
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius10 shadow-bs4 w-[100%]">
                      <div className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[99%]">
                        <Text
                          className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          I can say, this team is indeed extraordinarily
                          perfect. I will do a lot of teamwork with this team
                          next time. I do not hesitate to cooperate because the
                          results are very satisfying
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] md:pr-[10px] pr-[15px] sm:px-[0] rounded-radius12 sm:w-[100%] w-[64%]">
                          <Img
                            src="images/img_rectangle52_1.png"
                            className="sm:h-[27px] md:h-[34px] h-[49px] max-w-[100%] rounded-radius12 sm:w-[26px] md:w-[33px] w-[49px]"
                            alt="RectangleFiftyTwo Two"
                          />
                          <div className="flex flex-col md:ml-[17px] ml-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Steve John
                            </Text>
                            <Text
                              className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              CEO rumahku.ox
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <Button
              className="absolute flex sm:h-[37px] md:h-[47px] h-[68px] items-center justify-center left-[9%] rounded-radius50 top-[0] sm:w-[36px] md:w-[46px] w-[68px]"
              size="mdIcn"
              variant="icbOutlineWhiteA700"
            >
              <Img
                src="images/img_settings_68X68.svg"
                className="flex items-center justify-center"
                alt="settings One"
              />
            </Button>
          </Stack>
          <footer className="bg-gray_801 max-w-[1310px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:pl-[15px] sm:pr-[15px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[102px] ml-[149px] md:mr-[32px] mr-[47px] sm:mt-[35px] md:mt-[45px] mt-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_group642.svg"
                    className="max-w-[100%] w-[19%]"
                    alt="Group642"
                  />
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                    <Stack className="h-[260px] pr-[4px] pt-[4px] relative w-[32%]">
                      <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[1%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Text
                          className="font-bold text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          ABOUT
                        </Text>
                        <div className="flex flex-col justify-start sm:mt-[27px] md:mt-[35px] mt-[51px] w-[100%] common-column-list">
                          <ul className="flex flex-col">
                            <li className="w-[auto]">
                              <Text
                                className="cursor-pointer font-semibold text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                as="h5"
                                variant="h5"
                              >
                                About
                              </Text>
                            </li>
                            <li className="w-[auto] mt-[30px] ml-[1px] sm:mt-[15px] md:mt-[20px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                rel="noreferrer"
                              >
                                What we do
                              </a>
                            </li>
                            <li className="w-[auto] mt-[30px] ml-[1px] sm:mt-[15px] md:mt-[20px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                rel="noreferrer"
                              >
                                Works
                              </a>
                            </li>
                            <li className="w-[auto] mt-[30px] ml-[1px] sm:mt-[15px] md:mt-[20px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                rel="noreferrer"
                              >
                                Testimonial
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Line className="absolute bg-deep_orange_A100 h-[2px] left-[0] top-[13%] sm:w-[100%] w-[41%]" />
                    </Stack>
                    <div className="flex flex-col sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[38%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="font-bold text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          FOLLOW US
                        </Text>
                        <Line className="bg-deep_orange_A100 h-[2px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[34%]" />
                      </div>
                      <div className="flex flex-col justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-semibold text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              as="h5"
                              variant="h5"
                            >
                              Dribbble
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[35px] sm:mt-[18px] md:mt-[24px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Instagram
                            </a>
                          </li>
                          <li className="w-[auto] mt-[30px] sm:mt-[15px] md:mt-[20px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Behance
                            </a>
                          </li>
                          <li className="w-[auto] mt-[30px] sm:mt-[15px] md:mt-[20px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Pinterest
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-bold mt-[3px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Oracle Brand - All Rights Reserved
                </Text>
              </div>
              <Img
                src="images/img_group710.svg"
                className="max-w-[100%] mt-[120px] sm:mt-[63px] md:mt-[82px] w-[24%]"
                alt="Group710"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
