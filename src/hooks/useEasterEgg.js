import { useEffect, useState } from "react";

export function useEasterEgg() {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  useEffect(() => {
    // Print styled console message for developers inspecting DevTools
    console.log(
      "%c HARSHIT SHUKLA %c Full Stack Engineer %c",
      "background: #E8834A; color: #080808; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px 0 0 4px;",
      "background: #161616; color: #E8834A; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 0 4px 4px 0;",
      "background: transparent;"
    );
    console.log(
      "%cLooking under the hood? I like your style. Reach out: harshitshuklaharsh8@gmail.com",
      "color: #8A8A85; font-size: 11px; font-family: monospace;"
    );

    // Konami Code listener: ↑ ↑ ↓ ↓ ← → ← → b a
    const sequence = [
      "ArrowUp", "ArrowUp",
      "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight",
      "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    let index = 0;

    const onKeyDown = (e) => {
      if (e.key.toLowerCase() === sequence[index].toLowerCase()) {
        index++;
        if (index === sequence.length) {
          setKonamiUnlocked(true);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return { konamiUnlocked, dismissKonami: () => setKonamiUnlocked(false) };
}
