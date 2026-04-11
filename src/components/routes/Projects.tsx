import { Card, CardHeader, CardTitle } from "../ui/card";

const Projects = () => {
  return (
    <div className=" bg-white">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl font-allura text-blue-600  tracking-widest text-center duration-300">
            Projects
          </CardTitle>
        </CardHeader>
      </Card>
      <section id="features" className="relative block px-6 md:px-10  bg-white">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-black my-3 flex items-center justify-center font-bold uppercase tracking-wider">
            Why choose me
          </span>
          <h2 className="block w-full h-16 bg-gradient-to-b from-violet-700 to-black bg-clip-text font-bold text-transparent text-lg md:text-4xl">
            Build a Website beyond Customer's expections
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-bold leading-relaxed tracking-wide text-orange-500 text-sm md:text-lg">
            I have worked in many projects but these are some of my most recent
            ones – feel free to visit the projects.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <a href="https://www.aftercrop.in/" target="_blank">
            <div className="rounded-lg p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div className="button-text mx-auto flex h-14 w-12 items-center justify-center">
                <img
                  src="https://cdn-icons-png.freepik.com/512/2066/2066573.png?ga=GA1.1.1989034904.1727339754"
                  alt="Storage"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-dark font-bold hover:underline">
                AFTERCROP COLD STORAGE
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black -400 text-pretty text-sm  ">
                "AfterCrop cold storage system allows to store items for
                different durations with adjustable temperatures. It tracks the
                entry and exit of items using truck numbers."
              </p>
              <div className="mt-5 flex justify-evenly items-center">
                <a
                  href="https://www.aftercrop.in/"
                  target="_blank"
                  className="font-semibold hover:underline text-violet-900"
                >
                  Website
                </a>
              </div>
            </div>
          </a>
          <a href="https://sikandartea.edgecompute.app/" target="_blank">
            <div className="rounded-lg p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div className="button-text mx-auto flex h-16 w-12 items-center justify-center rounded-md ">
                <img
                  src="https://cdn-icons-png.freepik.com/256/14406/14406470.png?ga=GA1.1.1989034904.1727339754&semt=ais_hybrid"
                  alt="coffee"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-dark font-bold hover:underline">
                THE COFFEE SHOP
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black -400 text-pretty text-sm  ">
                "Welcome to our coffee shop, where you can easily order your
                favorite coffee and conveniently pay using UPI for a seamless
                and delightful experience."
              </p>
              <div className="mt-5 flex justify-evenly items-center">
                <a
                  href="https://sikandartea.edgecompute.app/"
                  target="_blank"
                  className="font-semibold hover:underline text-violet-900"
                >
                  Live link
                </a>
                <a
                  href="https://github.com/konic-technologies/sikandar-tea-cafe"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
          <a href="https://main--todo-focusflow.netlify.app/" target="_blank">
            <div className="rounded-lg -900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div className="button-text mx-auto flex h-16 w-12 items-center justify-center rounded-md ">
                <img
                  src="
                https://cdn-icons-png.freepik.com/256/12966/12966974.png?ga=GA1.1.1989034904.1727339754&semt=ais_hybrid
                  "
                  alt="Todo"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-black font-bold -400 hover:underline">
                TODO APP
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black -400 text-pretty text-sm ">
                "A user-friendly to-do list application that allows users to
                effortlessly create, manage & organize their tasks."
              </p>
              <div className="mt-5 flex justify-evenly items-center">
                <a
                  href="https://main--todo-focusflow.netlify.app/"
                  target="_blank"
                  className="font-semibold hover:underline text-violet-900"
                >
                  Live link
                </a>
                <a
                  href="https://github.com/umarFarookh212/TODO"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>

          <a
            href="
                https://github.com/umarFarookh212/weather_app"
            target="_blank"
          >
            <div className="rounded-lg -900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div className="button-text mx-auto flex h-16 w-12 items-center justify-center">
                <img
                  src="https://cdn-icons-png.freepik.com/256/17275/17275827.png?ga=GA1.1.1989034904.1727339754&semt=ais_hybrid"
                  alt="weather"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-dark -400 font-bold hover:underline">
                WEATHER APP
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black -400 text-pretty text-sm ">
                "users can select from a dropdown list of countries to find
                accurate and up-to-date weather information for their chosen
                location."
              </p>
              <div className="mt-5 flex justify-center items-center">
                <a
                  href="https://github.com/umarFarookh212/weather_app"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/umarfarookh12/umar_profile"
            target="_blank"
          >
            <div className="rounded-lg -900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div className="button-text mx-auto flex w-12 items-center justify-center">
                <img
                  src="https://cdn-icons-png.freepik.com/256/3476/3476457.png?ga=GA1.1.1989034904.1727339754&semt=ais_hybrid"
                  alt="portfolio"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-dark -400 font-bold hover:underline">
                My Portfolio
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black -400 text-pretty text-sm  ">
                "This portfolio showcases front-end developer in ReactJS,
                JavaScript, and tailwind.css through various projects that to
                creating dynamic and user-friendly web applications."
              </p>
              <div className="mt-5 flex justify-center items-center">
                <a
                  href="https://github.com/umarfarookh12/umar_profile"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
