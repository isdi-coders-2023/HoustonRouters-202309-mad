// import { Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const createCharacter = lazy(() => import('./pages/create.character'));

// export function AppRoutes() {
//   return (
//     <main>
//       <Suspense>
//         <Routes>
//           <Route
//             path="createCharacter"
//             element={<CreateCharacter></CreateCharacter>}
//           ></Route>
//           <Route path="publicAPI" element={<PublicAPI></PublicAPI>}></Route>
//           <Route path="privateAPI" element={<privateAPI></privateAPI>}></Route>
//           <Route path="details" element={<Details></Details>}></Route>
//           <Route
//             path="newCharacter"
//             element={<newCharacter></newCharacter>}
//           ></Route>
//           <Route path="error404" element={<Error404></Error404>}></Route>
//         </Routes>
//       </Suspense>
//     </main>
//   );
// }
