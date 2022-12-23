import React from "react";
import { BannerContents } from "../../components/bannerContents";

import eduContents from "../../images/bannerCategory/eduContents.png";
import walking from "../../images/detailContents/walking.png"

export const Printer: React.FC = () => {


  return (
    <>
      <BannerContents
          route={eduContents}
          title="DIY 워킹 로봇"
          subtitle="DIY walking robot"
          content="사물인터넷, 블루투스 통신을 이해하고, DIY 블루투스 스피커 제작하기"
          contentClass="Banner-content-small Subtitle-2"
          wid={6.111}
          contentsImg={walking}
        />
      </>
  );
};


