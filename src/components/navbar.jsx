import React from "react";

function Navbar() {
  return (
    <div className="flex h-20  items-center justify-between text-blue-1000 border-b-4 border-blue-400">
      <div className="ml-12 text-3xl">Logo</div>
      <div className="flex [&>*]:mx-2 mr-12 font-semibold tracking-widest text-xl">
        <h3>Mission</h3>
        <h3>Team</h3>
        <h3>About Us</h3>
      </div>
    </div>
  );
}

export default Navbar;
