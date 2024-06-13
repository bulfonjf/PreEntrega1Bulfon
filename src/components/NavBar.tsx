import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="bg-slate-400 p-4 flex items-center justify-between">
      <div className="flex-none">
        <a className="btn btn-ghost text-xl">Tools market</a>
      </div>
      <div className="flex-none">
        <CartWidget />
        <div className="dropdown dropdown-end">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
