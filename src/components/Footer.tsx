const navigation = {
    main: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'About', href: '/aboutus' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-blue-100">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">&copy; All rights reserved.</p>
        </div>
      </footer>
    )
  }
  