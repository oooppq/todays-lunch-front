// /* eslint-disable react/prop-types */
// import React from 'react';
// import {
//   ListElemContainer,
//   ListElemImg,
//   ListElemInfo,
//   WishAndRoulette,
// } from './restaurant.style';
// import defaultImage from '../../assets/img/default-image.png';
// import heartIcon from '../../assets/img/heart-icon.svg';
// import rouletteIcon from '../../assets/img/roulette-icon.svg';

// const ListElem = ({ restaurant }) => {
//   return (
//     <ListElemContainer
//       key={restaurant.id}
//       onClick={() => gotoDetailOnClick(restaurant.id, navigate)}
//     >
//       <ListElemImg src={defaultImage} />
//       <ListElemInfo>
//         <div className="title">
//           <span>{restaurant.restaurant_name}</span>
//         </div>
//         <div className="etc">
//           <div>
//             <span className="categories">#{restaurant.food_category}</span>
//             <span className="categories">#{restaurant.location_category}</span>
//             {restaurant.location_category !== restaurant.logcation_tag ? (
//               <span className="categories">#{restaurant.location_tag}</span>
//             ) : null}
//           </div>
//           <div className="reviewRate">
//             <span>리뷰 {restaurant.review_number}개</span>
//             {' | '}
//             <span>평점 {restaurant.rate}</span>
//           </div>
//           <div className="btnContainer">
//             <button
//               type="button"
//               onClick={(event) => {
//                 dispatch(setSelectedMarker(restaurant.id));
//                 dispatch(setIsMap());
//                 dispatch(
//                   setMapCenter({
//                     lat: restaurant.latitude,
//                     lng: restaurant.longitude,
//                   })
//                 );
//                 dispatch(setMapLevel(4));
//                 event.stopPropagation();
//               }}
//             >
//               지도 위치 보기
//             </button>
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//               }}
//             >
//               <a
//                 href={`https://map.kakao.com/link/to/${restaurant.restaurant_name},${restaurant.longitude},${restaurant.latitude}`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 길찾기
//               </a>
//             </button>
//           </div>
//         </div>
//       </ListElemInfo>
//       <WishAndRoulette>
//         <button
//           type="button"
//           onClick={(event) => {
//             event.stopPropagation();
//           }}
//         >
//           <img src={heartIcon} alt="" />
//         </button>
//         <button
//           type="button"
//           onClick={(event) => {
//             event.stopPropagation();
//           }}
//         >
//           <img src={rouletteIcon} alt="" />
//         </button>
//       </WishAndRoulette>
//     </ListElemContainer>
//   );
// };

// export default ListElem;
