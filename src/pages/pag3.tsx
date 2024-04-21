import React from "react";
import { Link } from "react-router-dom"
import words from "../wordList.json";
import { HangmanDrawing } from "../components/HangmanDrawing";
import { HangmanWord } from "../components/HangmanWord";
import { Keyboard } from "../components/Keyboard";
import styles from "./pag3.module.css";

export function Pag3(){
    const [wordToGuess, _setWordToGuess] = React.useState(() => {
        return words[Math.floor(Math.random() * words.length)];
      });
    
      const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);
    
      const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
      );
    
      const isLoser = incorrectLetters.length >= 6;
      const isWinner = wordToGuess
        .split("")
        .every((letter) => guessedLetters.includes(letter));
    
      const addGuessedLetter = React.useCallback(
        (letter: string) => {
          if (guessedLetters.includes(letter) || isLoser || isWinner) return;
    
          setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters, isWinner, isLoser]
      );
    
      React.useEffect(() => {
        const handler = (e: KeyboardEvent) => {
          const key = e.key;
          if (!key.match(/^[a-z]$/)) return;
    
          e.preventDefault();
          addGuessedLetter(key);
        };
    
        document.addEventListener("keypress", handler);
    
        return () => {
          document.removeEventListener("keypress", handler);
        };
      }, [guessedLetters]);
    
      const handleClick = () => {
        window.location.reload();
      };
    
      document.addEventListener("keydown", (event) => {
        if (
          (event.key === "Enter" && isLoser) ||
          (event.key === "Enter" && isWinner)
        ) {
          location.reload();
        }
      });

    return(
        <div
      style={{
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && (
          <>
            Vencedor!{" "}
            <button className={styles.btnTry} onClick={handleClick}>
              Tentar Novamente?
            </button>
          </>
        )}
        {isLoser && (
          <>
            Perdedor!{" "}
            <button className={styles.btnTry} onClick={handleClick}>
              Tentar Novamente?
            </button>
          </>
        )}
      </div>
      <h1>Forca</h1>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      <div className="pag2">
     <Link to='/pag1'>
     <button id="pag2b">Pagina 1</button>
     </Link>

     <Link to='/pag2'>
     <button id="pag2b">Pagina 2</button>
    </Link>

     <Link to='/'>
     <button id="pag2b">Voltar</button>
     </Link>
    </div>
    </div>
    );
}