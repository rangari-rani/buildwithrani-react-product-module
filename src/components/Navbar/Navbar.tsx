import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { categories } from "../../data/categories";
import SearchBar from "../Product/Search/SearchBar";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";




const NavbarMain = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [menuLeft, setMenuLeft] = useState(0);
  const textColor = "#111827";

  return (
    <Box>
    
      <div className="flex items-center justify-between px-2 lg:px-16 h-20 relative">
        
        {isLarge && (
          <DesktopNav
            categories={categories}
            hoveredCategory={hoveredCategory}
            setHoveredCategory={setHoveredCategory}
            menuLeft={menuLeft}
            setMenuLeft={setMenuLeft}
            textColor={textColor}
          />
        )}
     <SearchBar/>
      </div>
      {!isLarge && (
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          categories={categories}
        />
      )}
    </Box>
  );
};

export default NavbarMain;
