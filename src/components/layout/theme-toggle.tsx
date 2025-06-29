
"use client"

import React, { useState, useEffect } from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LG_BREAKPOINT = 1024;

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false); 

  useEffect(() => {
    setMounted(true);
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= LG_BREAKPOINT);
    };
    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Laptop },
  ];
  const currentThemeValue = theme || "system";

  if (!mounted) {
    // Render a placeholder to prevent layout shift and match compact button size
    return <div className="h-8 w-8 rounded-md border border-input bg-transparent p-0.5" aria-hidden="true" />;
  }

  if (!isLargeScreen) {
    // Render compact cycling button for smaller screens
    const currentThemeDetails = themes.find(t => t.value === currentThemeValue) || 
                              themes.find(t => t.value === 'system') || 
                              themes[0];
    const currentThemeActualIndex = themes.indexOf(currentThemeDetails);
    const IconToDisplay = currentThemeDetails.icon;
    
    const nextThemeCycleIndex = (currentThemeActualIndex + 1) % themes.length;
    const nextThemeToSet = themes[nextThemeCycleIndex];

    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(nextThemeToSet.value)}
        aria-label={`Switch to ${nextThemeToSet.label} theme`}
        className="h-8 w-8 p-1.5 border-input"
        title={`Theme: ${currentThemeDetails.label}. Click to switch to ${nextThemeToSet.label}.`}
      >
        <IconToDisplay className="h-4 w-4" />
      </Button>
    );
  }

  // Render RadioGroup for large screens
  return (
    <RadioGroup
      value={currentThemeValue}
      onValueChange={setTheme}
      className="flex items-center rounded-md border border-input bg-transparent p-0.5"
      aria-label="Select theme"
    >
      {themes.map((item, index) => {
        const Icon = item.icon;
        return (
          <React.Fragment key={item.value}>
            <RadioGroupItem
              value={item.value}
              id={`theme-toggle-${item.value}-${index}`} // Unique ID
              className="sr-only" 
            />
            <Label
              htmlFor={`theme-toggle-${item.value}-${index}`} // Matches RadioGroupItem ID
              className={cn(
                "flex h-8 w-8 cursor-pointer items-center justify-center p-1.5 text-muted-foreground transition-colors duration-150 ease-in-out",
                "hover:bg-accent hover:text-accent-foreground",
                index === 0 && "rounded-l-sm",
                index === themes.length - 1 && "rounded-r-sm",
                currentThemeValue === item.value && "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground"
              )}
              title={item.label}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{item.label}</span>
            </Label>
          </React.Fragment>
        );
      })}
    </RadioGroup>
  );
}
