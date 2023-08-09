
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import RootLayout from "./layouts/layout";

import Homepage from "../pages/homepage/homepage";
//Importing each grade:
import FirstGrade from "../pages/grades/1st/firstgrade";
import SecondGrade from "../pages/grades/2nd/secondgrade";
import ThirdGrade from "../pages/grades/3rd/thirdgrade";
import FourthGrade from "../pages/grades/4th/fourthgrade";
import FifthGrade from "../pages/grades/5th/fifthgrade";
import SixthGrade from "../pages/grades/6th/sixthgrade";
import SeventhGrade from "../pages/grades/7th/seventhgrade";

import SubitizingFirstgrade from '../pages/grades/1st/themes/subitizing/subitizing';
import OneToTen from '../pages/grades/1st/themes/onetoten';
//Firstgrade imports:

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="grade">
        <Route path="firstgrade" element={<FirstGrade />}></Route>
          <Route path="firstgrade/Subitizing" element={<SubitizingFirstgrade />} />
          <Route path="firstgrade/1-10" element={<OneToTen />} />
        <Route path="secondgrade" element={<SecondGrade />}></Route>
        <Route path="thirdgrade" element={<ThirdGrade />}></Route>
        <Route path="fourthgrade" element={<FourthGrade />}></Route>
        <Route path="fifthgrade" element={<FifthGrade />}></Route>
        <Route path="sixthgrade" element={<SixthGrade />}></Route>
        <Route path="seventhgrade" element={<SeventhGrade />}></Route>
      </Route>
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
