import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const AreaTableAction = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
      </button>
      {showDropdown && (
        <div className="action-dropdown-menu" ref={dropdownRef}>
          <ul className="dropdown-menu-list">
            <li className="dropdown-menu-item">
              <Link to="/view" className="dropdown-menu-link">
                View
              </Link>
            </li>
            <li className="dropdown-menu-item">
              <Link to="/edit" className="dropdown-menu-link">
                Edit
              </Link>
            </li>
            <li className="dropdown-menu-item">
              <Link to="/delete" className="dropdown-menu-link">
                Delete
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default AreaTableAction;
