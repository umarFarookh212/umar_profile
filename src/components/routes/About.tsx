// import { useEffect } from "react";
import Progess from "../Progess";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const About = () => {
  // const [isBlurred, setIsBlurred] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsBlurred(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div>
      <Card className="mx-auto my-3 md:w-[70%] border-none text-black">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl font-allura text-blue-600  tracking-widest text-center duration-300">
            About me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden md:max-w-3xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* <div className="md:shrink-0 sm:shrink">
                <img
                  className={`h-72 mx-auto object-cover md:h-full md:w-44 aspect-auto rounded-2xl ${
                    isBlurred ? "blur-sm" : "blur-none"
                  }`}
                  src="src/images/IMG-20231214-WA0023.JPG"
                />
              </div> */}
              <div className="md:p-6">
                {/* <div className="uppercase tracking-wide text-md md:text-lg text-indigo-500 font-bold ">
                  About Me
                </div> */}
                <p className="block mt-1 leading-tight font-medium">
                  Innovative Front-End Developer
                </p>
                <p className="mt-2 font-alfa md:text-md flex flex-col justify-evenly leading-relaxed items-start text-pretty space-y-3">
                  I am a Front End Developer who is working on a new and
                  creative projects. I have experience working with ReactJS, TypeScript, Node.js, AndDesign,
                  Supabase, JavaScript HTML, CSS, JavaScript, Tailwind.css and Git. I am passionate about creating innovative, user-friendly web applications and take pride in delivering high performance solutions.
                  <span className="hidden md:block">
                    I possess strong problem-solving skills, excellent
                    communication ability, and a keen eye for details. I'm
                    always up for a challenge and I'm never afraid to ask
                    questions.
                  </span>
                  <span>
                    I'm a team player and I always strive to help my team
                    succeed.
                  </span>
                  <span>
                    When I'm not looking, you'll find me watching movies,
                    cooking or learning something new.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="grid md:grid-cols-3  gap-4">
          <div>
            <p className="text-xl font-bold text-blue-700">Tools I use</p>
            <p className="text-sm font-semibold text-pretty md:block">
              Here are some awesome tools i use to make Development and problem
              solving easier and faster for my user
            </p>
          </div>
          <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 gap-4 font-medium tracking- font-serif capitalize">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  className="h-7 object-cover rounded-full w-7"
                />
                <p>React</p>
              </div>
              <Progess pNumber="70" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3s6xjxB32gZswvdTnwRoYaGnpQJG4KJNNPg&s"
                  className="h-7 object-cover"
                />
                <p>JavaScript</p>
              </div>
              <Progess pNumber="75" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWGx49vyixrV2CW_xbXIDPiqg5tiabAH9yw&s"
                  className="h-10 object-cover"
                />
                <p>Github</p>
              </div>
              <Progess pNumber="80" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfiazWnQx2d7qf0KMPuCEUtJ-9yQOE1BvyA&s"
                  className="h-9 object-cover rounded-full"
                />
                <p>Tailwind.CSS</p>
              </div>
              <Progess pNumber="90" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhhPKwM21gHixp7W6CbC7084ab2aRJl3elQ&s"
                  className="h-7 object-cover rounded"
                />
                <p>VsCode</p>
              </div>
              <Progess pNumber="75" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bnBajRLMptfJJpo8aep8NBmtyybp5awJMQ&s"
                  className="h-7 object-cover rounded-lg bg-white"
                />
                <p>Bootstrap</p>
              </div>
              <Progess pNumber="75" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png"
                  className="h-7 object-cover rounded-full"
                />
                <p>material-UI</p>
              </div>
              <Progess pNumber="75" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-around w-28">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlTaDaAe905XCf1vnubMQiMd4bqzej_Y-Fg&s"
                  className="h-7 object-cover rounded-full"
                />
                <p>MySql</p>
              </div>
              <Progess pNumber="75" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default About;
