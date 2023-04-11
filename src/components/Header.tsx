export default function Header({
  showH2 = true,
  h2Text = "Pricing",
  showP2 = true,
  p1Text = "Take control of your team.",
  p2Text = "Start building for free, then add a site plan to go live. Account plans unlock additional features.",
  backgroundImage = "",
}) {
  const bgStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-white my" style={bgStyle}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col">
          {showH2 && (
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              {h2Text}
            </h2>
          )}
          {showP2 && (
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {p2Text}
            </p>
          )}
          <p className="mt-20 my-20 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl order-last">
            {p1Text}
          </p>
        </div>
      </div>
    </div>
  );
}
