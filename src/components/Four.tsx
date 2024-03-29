import Link from "next/link";

export default function Four() {
    return (
      <>
       
        <main
          className="min-h-full bg-cover bg-top sm:bg-top"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600334844291-539458eb31f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
              Building in progress
            </h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-50">
              Check Back Soon
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-black bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  