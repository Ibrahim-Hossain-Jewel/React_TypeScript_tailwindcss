import { Link } from "react-router-dom"
function Navigation() {
    return(<div>
         <nav className="flex sm:justify-left space-x-4 pb-5">
          {[
            ['Home', '/'],
            ['Projects', '/projects'],
            ['Research', '/research'],
            ['Contact', '/contact'],
          ].map(([title, url], index) => (
              <Link to = {url} className='hover:text-green-700' key={index}>{title}</Link>
          ))}
        </nav>
    </div>)
}
export default Navigation;