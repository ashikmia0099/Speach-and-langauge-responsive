import Banner1 from "./(components)/HomePage2/HomePages2Jsx/Banner1";
import Banner2 from "./(components)/HomePage2/HomePages2Jsx/Banner2";
import Vission from "./(components)/HomePage2/HomePages2Jsx/Vission";
import Questions from "./(components)/HomePage2/HomePages2Jsx/Questions";
import OurTeacher from "./(components)/HomePage2/HomePages2Jsx/OurTeacher";
import Mission_Three_banner from "./(components)/HomePage2/HomePages2Jsx/Mission_Three_banner";
import Pesident_General_Speach_Section from "@/HomePages/Pesident_General_Speach_Section/Pesident_General_Speach_Section";
import Vission_Mission_Objective from "@/HomePages/Vission_Mission_Objective/Vission_Mission_Objective";



export const metadata = {
  title: 'SSLT | HOME',
  description: 'This is the home page',
}


export default function Home() {
  return (
    <div>

      <Banner1></Banner1>
      <Banner2></Banner2>
      <Vission_Mission_Objective></Vission_Mission_Objective>
      <Mission_Three_banner></Mission_Three_banner>
      <Vission></Vission>
      <Questions></Questions>
      <Pesident_General_Speach_Section></Pesident_General_Speach_Section>
      <OurTeacher></OurTeacher>
    </div>
  );
}
