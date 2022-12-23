import React, { useState } from "react";
import { ReactComponent as PrevBtn } from "../../images/prev_button.svg";
import { ReactComponent as NextBtn } from "../../images/next_button.svg";






interface ContentsSlide {
}

export const ContentsSlide: React.FC<ContentsSlide> = ({
}) => (
    <>  
        <div>
            <PrevBtn />
            <NextBtn />
        </div>
    </>
);


// const Film = ({ movie, slide }) => {
//     const { id, name, release_date, image_url } = movie;
//     return (
//       <li
//         className="film"
//         id={id}
//         style={{
//           transform: `translateX(${slide}px)`,
//           transition: "0.5s ease",
//         }}
//       >

// const MainBox = ({ movies, theme }) => {
//   const [slidePx, setSlidePx] = useState(0);

//   const toPrev = () => {
//     slidePx < 0 && setSlidePx(slidePx + 1375);
//   };

//   const toNext = () => {
//     slidePx > -4125 && setSlidePx(slidePx - 1375);
//   };
//   if (!movies) return;
//   return (
//     <div className="mainBox">
//       <p className="filmTheme">{theme.title}</p>
//       <ul className="filmList">
//         {movies.map(movie => (
//           <Film slide={slidePx} key={movie.id} movie={movie} />
//         ))}
//       </ul>
//       <div
//         className="prevBtn"
//         onClick={toPrev}
//         style={{ display: slidePx === 0 ? "none" : "" }}
//       >
//         <i className="fa-solid fa-chevron-left" />
//       </div>
//       <div
//         className="nextBtn"
//         onClick={toNext}
//         style={{ display: slidePx === -4125 ? "none" : "" }}
//       >
//         <i className="fa-solid fa-chevron-right" />
//       </div>
//     </div>
//   );
// };

// export default MainBox;