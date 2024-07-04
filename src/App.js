import Testimonials from "./components/Testimonials";
import { Reviews } from "./data";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-200 py-10">
      <div className="text-center flex flex-col justify-center items-center w-full md:w-[80%] max-w-screen-lg">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonials reviews={Reviews} />
      </div>
    </div>
  );
}
