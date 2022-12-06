import { BannerContents } from "../../components/bannerContents";
import { EduTable } from "../../components/eduDetailContents/eduTable"
import { LearningObjective } from "../../components/eduDetailContents/learningObjective"
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide"


import eduContents from "../../images/bannerCategory/eduContents.png";
import walkingImg from "../../images/detailContents/walking.png"

import prevButton from "../../images/prev_button.svg"
import nextButton from "../../images/next_button.svg"

export const Walking: React.FC = () => {


  return (
    <>
      <BannerContents
          route={eduContents}
          title="DIY 워킹 로봇"
          subtitle="DIY walking robot"
          content="사물인터넷, 블루투스 통신을 이해하고, DIY 블루투스 스피커 제작하기"
          contentClass="Banner-content-small Subtitle-2"
          wid={6.111}
          contentsImg={walkingImg}
        />
      
        <EduTable
          title="교육 소개"
          tabletitle1="교육 대상"
          tabletitle2="기대 효과"
          tabletitle3="교육 형태"
          contents1_1="초등학생, 중학생, 고등학생"
          contents2_1=" 블루투스 스피커 제작을 통해 심미적 감성과 창의적 사고력 향상을 기대한다."
          contents2_2=" 일상에서 사용 가능한 블루투스 스피커를 본인이 직접 제작하며 공학적, 과학적 흥미도를 높인다."
          contents2_3=" 근거리 무선통신 기술의 종류와 개념을 이해하고 학생들의 공학적 상상력을 자극한다."
          contents3_1="찾아 가는 현장교육, 체험형 교육 부스"
          liClass1="EduTabble-table-subContents"
          liClass2="EduTabble-table-subContents List-style-dics"
          liClass3="EduTabble-table-subContents"
          titleMarginTop={5}
        />

        <EduTable
          title="커리큘럼"
          tabletitle1="교육 대상"
          tabletitle2="기대 효과"
          tabletitle3="교육 형태"
          contents1_1="1. 4차산업 기술인 사물인터넷(IoT)을 이해하고, 실생활에 사용되는 예시를 알아본다."
          contents1_2="2. 사물인터넷에 활용되는 통신 기술과 블루투스 통신 개념을 영상을 통해 심화적으로 이해한다."
          contents1_3="3. DIY 블루투스 스피커 설계 및 제작의 원리를 이해하여, 어드벤처 디자인 전공 경험을 키운다"
          contents2_1="1. DIY 스피커 조립 실습을 통해 설계와 조립 원리를 이해하여 메이킹 능력을 키운다."
          contents2_2="2. 스트리퍼로 전선의 피복을 제거하는 메이킹 장비 사용을 숙달한다."
          contents2_3="3. 스피커 내부 부품인 블루투스 모듈, 스피커 등 배선 실습으로, 전자 공학 기초 지식을 습득한다."
          contents3_1="1. 배선이 잘 되었는지, 직접 본인 핸드폰과 스피커의 페어링을 통해 테스트한다."
          contents3_2="2. 무선 스피커가 개발되는 과정에서 공학지식이 어떻게 사용되었는지 이해한다."
          contents3_3="3. 이론과 실습을 바탕으로 사물인터넷 기술을 적용할 만한 새로운 아이디어를 고안한다."
          liClass1="EduTabble-table-subContents"
          liClass2="EduTabble-table-subContents"
          liClass3="EduTabble-table-subContents"
          titleMarginTop={12.222}
        />

        <LearningObjective
          title="수업 목표"
          titleMarginTop={2.444}
          contents1="4차산업 기술인 사물인터넷(IoT)을 이해하고, 통신 기술과 사물인터넷이 실생활에 적용된 사례를 학습한다."
          contents2="전자 공학, 어드벤처 디자인 전공 과목의 기초 지식 바탕 메이킹 활동으로, 새로운 아이디어를 제시할 수 있는 융합적인 사고력을 키운다."
        />

        <ContentsSlide
        
        />
    </>
  );
};