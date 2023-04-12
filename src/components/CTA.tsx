export default function CTA() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1523774294084-94691d7bb289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80")',
        backgroundPosition: "bottom-2",
      }}
      className="bg-blue-200 bg-cover flex"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-400 rounded">
          <h2 className="text-2xl font-extrabold text-black ml-3 sm:text-3xl">
            Customer Support
          </h2>
          <div className="ml-3 text-base">
            <div className="bg-blue-400 p-2 rounded">

            <p className="text-lg text-white">
              Experience seamless assistance from our dedicated team. For any
              inquiries or assistance, feel free to reach out to us below
            </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
