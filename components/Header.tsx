"use client"

import { View, MenuItem, Button  } from "reshaped";
import { House, UserRound, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "reshaped";

export function Header() {

const { setColorMode, invertColorMode, colorMode } = useTheme();

  return (
    <View className="mb-10 pt-2" justify="center" divided gap={5} align="center" direction="row"> 
     <MenuItem href="/" icon={House} roundedCorners> Home </MenuItem>
     <MenuItem href="#" icon={UserRound} roundedCorners> About us</MenuItem>
     <MenuItem href="#" icon={Mail} roundedCorners>Contact us</MenuItem>
     <Button rounded icon={ colorMode === "light"? Moon : Sun} variant="outline" attributes={{ "aria-label": "toggle theme" }} onClick={invertColorMode} />
    </View>
  )
}
