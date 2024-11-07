import {} from "react";

function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl lg:text-6xl font-bold">
          Use our <span className="text-orange-500">scheleton</span>{" "}
          <br /> to get a quick start of your project.
        </h1>
        <p className="mt-8 text-xl font-semibold">
          Octopi Digital powered scheleton for People for their quick setup of project!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
