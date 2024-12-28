import CustomCalendario from "../../components/CustomCalendario";
import SlideShow from "../../components/SlideShow/SlideShow";
import "./HomePage.css";

function HomePage() {
  
  return (
    <div className="homeContainer">
      <h1> Iteris Imóveis </h1>
      {/*<SlideShow></SlideShow>*/}
      <CustomCalendario></CustomCalendario>
    </div>
  );
}
export default HomePage;
