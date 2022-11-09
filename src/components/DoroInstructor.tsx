import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import instructor1 from "../images/instructor1.png";
import instructor2 from "../images/instructor2.png";
import instructor3 from "../images/instructor3.png";
import instructor4 from "../images/instructor4.png";


const MainContainer = styled.div`
    width: 65.555rem;
    display: flex;
    flex-direction: column;

    p:nth-child(1){
        width: 30.167rem;
        height: 3.222rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 2.667rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.21;
        letter-spacing: normal;
        text-align: left;
        color: var(--doro-black);
        margin-top: 11.222rem;
    }
    p:nth-child(3){
        width: 28.989rem;
        height: 2.556rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.28;
        letter-spacing: 0.9px;
        text-align: left;
        margin-top: 0.681rem;
        color: var(--doro-grey);
    }
`

const Box = styled.div`
    display: flex;
    gap: 1.111rem;
`
const Line = styled.div`
    width: 30.222rem;
    height: 0.194rem;
    flex-grow: 0;
    background-color: var(--doro-deep);
`
const Container = styled.div`
    width: 15.557rem;
    height: 23.333rem
    flex-grow: 0;
    border-radius: 10px;
    margin-top: 2.944rem;
    background-color: var(--doro-super-light-grey);
    text-align: center;
    justify-content: center;
    position: relative;
    &:hover{
        div{
            display: block;
            width: 15.556rem;
            height: 10.722rem;
            position: absolute;
            bottom: 0;
            flex-grow: 0;
            top: 12.611rem;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
    div{
        display: none;
        font-family: Pretendard;
    }
    /* 이름 */
    p:nth-child(1){ 
        color: white;
        position: absolute;
        font-family: Pretendard;
        bottom: 6.522rem;
        left: 1.111rem;
        
        font-size: 1.333rem;
    }
    /* 전공 */
    p:nth-child(3){ 
        height: 1.111rem;
        position: absolute;
        bottom: 7.067rem;
        left: 1.111rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.667rem;
        font-weight: 500;
        line-height: 1.67;
        text-align: left;
        color: #fff;
    }
    /* 주요 강의 */
    p:nth-child(5){
        position: absolute;
        left: 5.667rem;
        top: 4.711rem;
        width: 16.556rem;
        height: 1.108rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.556rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    }
    /* 강의 누적 시간 */
    p:nth-child(7){
        position: absolute;
        left: 5.667rem;
        top: 5.944rem;
        width: 16.556rem;
        height: 1.108rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.556rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    }
    /* 약력 */
    p:nth-child(9){
        position: absolute;
        left: 5.667rem;
        top: 7.141rem;
        width: 9rem;
        height: 1.108rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.556rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    }
    p:nth-child(10){
        position: absolute;
        left: 5.667rem;
        top: 8.719rem;
        width: 9rem;
        height: 1.108rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.556rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    }

`
const TeacherTitle = styled.p`
        color: white;
        position: absolute;
        font-family: Pretendard;
        bottom: 8.052rem;
        left: 4.800rem;
        font-size:0.833rem;
`

const MainTitle = styled.p`
  width: 2.5rem;
  height: 1.108rem;
  flex-grow: 0;
  margin: 1.181rem 1.278rem 0.111rem 0;
  font-family: Pretendard;
  font-size: 0.667rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  position: absolute;
  left: 1.111rem;
  bottom: 4.877rem;
  color: #fff;
`

const TotalTimeTitle = styled.p`
  width: 3.778rem;
  height: 1.108rem;
  flex-grow: 0;
  margin: 1.181rem 1.278rem 0.111rem 0;
  font-family: Pretendard;
  font-size: 0.667rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  position: absolute;
  left: 1.111rem;
  bottom: 3.658rem;
  color: #fff;
`

const SpecTitle = styled.p`
  width: 2.5rem;
  height: 1.108rem;
  flex-grow: 0;
  margin: 1.181rem 1.278rem 0.111rem 0;
  font-family: Pretendard;
  font-size: 0.667rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: left;
  position: absolute;
  left: 1.111rem;
  bottom: 2.494rem;
  color: #fff;
`

const Image = styled.img`
    width: 15.557rem;
    height: 23.333rem;
    margin-left: auto;
    margin-right: auto;
`

const MainEduContent = () => {
    const dummyData = [
        {   imgURL : instructor1,
            name : "김민지",
            major: "한양대학교 ERICA 로봇융합학과",
            main : "AI 융합 교육, 디지털 리터러시 교육",
            time : "60시간",
            spec1 : "◦ SKT Fly AI 부트캠프 수료",
            spec2: "◦ LG Aimers 프로그램 교육 이수",
            spec3: "◦ 한양대학교 캡스톤 디자인 대상 수상"
        },
        {   imgURL : instructor3,
            name : "김병국",
            major: "한양대학교 ERICA 산업경영공학과",
            main : "초음파 피아노 코딩 교육",
            time : "105시간",
            spec1 :  " ◦ WRO(WORLD ROBOT OLIMPIAD) 세계 대회 출전",
            spec2: " ◦ BoB(Best of the Best) 차세대 보안리더 양성 프로그램 1기 수료",
            spec3: ""
        },
        {   imgURL : instructor2,
            name : "우정연",
            major: "한양대학교 ERICA 생명나노공학과",
            main : "화학 정원 생화학 교육",
            time : "50시간",
            spec1 : " ◦ 한양대학교 ‘융합 바이오 공학 및 미래 의학 연구실’ 학부 연구생",
            spec2: " ◦ 아산시 청소년 교육 문화센터 멘토링 및 교육 봉사 활동 수료",
            spec3: ""
        },
        {   imgURL : instructor4,
            name : "백다은",
            major: "한양대학교 ERICA 전자공학부",
            main : "블루투스 스피커 메이커 융합 교육",
            time : "70시간",
            spec1: " ◦ 과학기술정보통신부 주관 데이터그리에이터 캠프 수료",
            spec2: " ◦ 한국반도체산업협회 빅데이터분석 입문과정 수료",
            spec3: ""
        },
    ]
    return(
        <MainContainer>
                <p>
                    전공 지식을 갖춘 대학생 강사
                </p>
                <Line></Line>
                <p>
                DORO의 대학생 강사들은 로봇공학, 전자공학, 생명공학 등<br></br>다양한 이공계 전공 지식을 갖춘 3,4학년으로 구성되어 있습니다.
                </p>
            <Box>
                
            {dummyData.map((data,idx) => 
                <Container key={idx}>
                    <Image src={data.imgURL} alt="icon" />
                    <div>
                        <p> {data.name} </p>
                        <TeacherTitle>선생님</TeacherTitle>
                        <p> {data.major} </p>
                        <MainTitle>주요 강의</MainTitle>
                        <p> {data.main} </p>       
                        <TotalTimeTitle>강의 누적 시간</TotalTimeTitle>
                        <p> {data.time} </p>  
                        <SpecTitle>약력</SpecTitle>
                        <p> {data.spec1} </p>       
                        <p> {data.spec2} </p> 
                    </div>


                </Container>
            )}
            </Box>
        </MainContainer>
    )
}

export default MainEduContent;