import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/home'));
const ErroPage = lazy(() => import('../pages/error-page/error.page'));
const MyUniversePage = lazy(() => import('../pages/my-universe/my.universe'));
const AddFormPage = lazy(() => import('../pages/add-form-page/add.form.page'));
const DetailPage = lazy(() => import('../pages/details-page/detail.page'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route
          path="/my-universe"
          element={<MyUniversePage></MyUniversePage>}
        ></Route>
        <Route path="/add" element={<AddFormPage></AddFormPage>}></Route>
        <Route path="/details/:id" element={<DetailPage></DetailPage>}></Route>
        <Route path="*" element={<ErroPage></ErroPage>}></Route>
      </Routes>
    </Suspense>
  );
}
