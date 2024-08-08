import { useState, useRef, useEffect } from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const ChatSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Close search input if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputRef]);

  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      {!searchOpen && (
        <ActionIcon
          size="lg"
          variant="transparent"
          color="white"
          onClick={() => setSearchOpen((prev) => !prev)}
        >
          <IoSearch size={24} />
        </ActionIcon>
      )}
      {searchOpen && (
        <TextInput
          leftSection={<CiSearch />}
          variant="filled"
          ref={searchInputRef}
          placeholder="Search..."
          style={{ marginLeft: "10px", width: "200px", borderRadius: "black" }}
          autoFocus
        />
      )}
    </div>
  );
};

export default ChatSearch;
