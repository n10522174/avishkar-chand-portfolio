'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

// Snake Game Component
function SnakeGame({ onClose }) {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const BOARD_SIZE = 20;

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE)
    };
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setDirection({ x: 1, y: 0 });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted) {
        if (e.code === 'Space') {
          e.preventDefault();
          startGame();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;

    const gameInterval = setInterval(() => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;

        // Check wall collision
        if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameInterval);
  }, [direction, food, gameStarted, generateFood]);

  return (
    <div className="w-full h-full bg-green-900 rounded p-6 flex flex-col items-center justify-center">
      <h3 className="text-white text-2xl mb-4">🐍 Snake Game</h3>
      <div className="text-white mb-4">Score: {score}</div>
      
      <div className="relative bg-green-800 border-2 border-green-600 rounded" style={{ width: '300px', height: '300px' }}>
        {/* Game Board */}
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE;
            const y = Math.floor(index / BOARD_SIZE);
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            
            return (
              <div
                key={index}
                className={`border border-green-700 ${
                  isSnake ? 'bg-green-400' : isFood ? 'bg-red-500' : ''
                }`}
              />
            );
          })}
        </div>
        
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <h4 className="text-xl mb-4">Game Over!</h4>
            <p className="mb-4">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Play Again
            </button>
          </div>
        )}
        
        {/* Start Game Overlay */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <p className="mb-4">Press SPACE to start!</p>
            <p className="text-sm">Use arrow keys to move</p>
          </div>
        )}
      </div>
      
      <button
        onClick={onClose}
        className="mt-6 px-6 py-3 bg-green-600 text-white text-base rounded-lg hover:bg-green-700 transition-colors"
      >
        Back to Menu
      </button>
    </div>
  );
}

// Flappy Bird Game Component
function FlappyBirdGame({ onClose }) {
  const [birdY, setBirdY] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const GRAVITY = 0.6;
  const JUMP_STRENGTH = -10;
  const PIPE_WIDTH = 60;
  const PIPE_GAP = 120;

  const resetGame = () => {
    setBirdY(200);
    setVelocity(0);
    setPipes([]);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  const jump = () => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (!gameOver) {
      setVelocity(JUMP_STRENGTH);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };

    const handleClick = () => jump();

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [gameOver, gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      // Update bird physics
      setBirdY(prevY => {
        const newY = prevY + velocity;
        if (newY < 0 || newY > 380) {
          setGameOver(true);
          return prevY;
        }
        return newY;
      });

      setVelocity(prevVelocity => prevVelocity + GRAVITY);

      // Update pipes
      setPipes(prevPipes => {
        let newPipes = prevPipes.map(pipe => ({ ...pipe, x: pipe.x - 3 }));
        
        // Remove pipes that are off screen
        newPipes = newPipes.filter(pipe => pipe.x > -PIPE_WIDTH);
        
        // Add new pipes
        if (newPipes.length === 0 || newPipes[newPipes.length - 1].x < 200) {
          const pipeHeight = Math.random() * 200 + 50;
          newPipes.push({
            x: 400,
            topHeight: pipeHeight,
            bottomY: pipeHeight + PIPE_GAP
          });
        }
        
        // Check collisions
        newPipes.forEach(pipe => {
          if (pipe.x < 100 && pipe.x > 40) {
            if (birdY < pipe.topHeight || birdY > pipe.bottomY) {
              setGameOver(true);
            }
            if (pipe.x === 47) {
              setScore(prev => prev + 1);
            }
          }
        });
        
        return newPipes;
      });
    }, 20);

    return () => clearInterval(gameLoop);
  }, [gameStarted, velocity, birdY]);

  return (
    <div className="w-full h-full bg-sky-400 rounded p-6 flex flex-col items-center justify-center">
      <h3 className="text-white text-2xl mb-4">🐦 Flappy Bird</h3>
      <div className="text-white mb-4">Score: {score}</div>
      
      <div className="relative w-80 h-96 bg-sky-300 border-2 border-sky-600 rounded overflow-hidden">
        {/* Bird */}
        <div
          className="absolute w-6 h-6 bg-yellow-400 rounded-full border border-yellow-600"
          style={{ left: '80px', top: `${birdY}px`, transition: 'none' }}
        />
        
        {/* Pipes */}
        {pipes.map((pipe, index) => (
          <div key={index}>
            {/* Top pipe */}
            <div
              className="absolute bg-green-600 border border-green-700"
              style={{
                left: `${pipe.x}px`,
                top: 0,
                width: `${PIPE_WIDTH}px`,
                height: `${pipe.topHeight}px`
              }}
            />
            {/* Bottom pipe */}
            <div
              className="absolute bg-green-600 border border-green-700"
              style={{
                left: `${pipe.x}px`,
                top: `${pipe.bottomY}px`,
                width: `${PIPE_WIDTH}px`,
                height: `${400 - pipe.bottomY}px`
              }}
            />
          </div>
        ))}
        
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <h4 className="text-xl mb-4">Game Over!</h4>
            <p className="mb-4">Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-sky-600 rounded hover:bg-sky-700"
            >
              Play Again
            </button>
          </div>
        )}
        
        {/* Start Game Overlay */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <p className="mb-4">Click or press SPACE to start!</p>
            <p className="text-sm">Keep clicking to fly</p>
          </div>
        )}
      </div>
      
      <button
        onClick={onClose}
        className="mt-6 px-6 py-3 bg-sky-600 text-white text-base rounded-lg hover:bg-sky-700 transition-colors"
      >
        Back to Menu
      </button>
    </div>
  );
}

// Tetris Game Component (Simplified Version)
function TetrisGame({ onClose }) {
  const [board, setBoard] = useState(() => Array(20).fill().map(() => Array(10).fill(0)));
  const [currentPiece, setCurrentPiece] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const tetrominoes = [
    { shape: [[1, 1, 1, 1]], color: 1 }, // I
    { shape: [[1, 1], [1, 1]], color: 2 }, // O
    { shape: [[0, 1, 0], [1, 1, 1]], color: 3 }, // T
    { shape: [[0, 1, 1], [1, 1, 0]], color: 4 }, // S
    { shape: [[1, 1, 0], [0, 1, 1]], color: 5 }, // Z
    { shape: [[1, 0, 0], [1, 1, 1]], color: 6 }, // J
    { shape: [[0, 0, 1], [1, 1, 1]], color: 7 }, // L
  ];

  const colors = ['', '#00f5ff', '#ffff00', '#ff00ff', '#00ff00', '#ff0000', '#0000ff', '#ffa500'];

  const createNewPiece = () => {
    const piece = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    return {
      shape: piece.shape,
      color: piece.color,
      x: Math.floor(10 / 2) - Math.floor(piece.shape[0].length / 2),
      y: 0
    };
  };

  const resetGame = () => {
    setBoard(Array(20).fill().map(() => Array(10).fill(0)));
    setCurrentPiece(null);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentPiece(createNewPiece());
  };

  const isValidMove = (piece, newX, newY, newShape = piece.shape) => {
    for (let y = 0; y < newShape.length; y++) {
      for (let x = 0; x < newShape[y].length; x++) {
        if (newShape[y][x]) {
          const boardX = newX + x;
          const boardY = newY + y;
          if (boardX < 0 || boardX >= 10 || boardY >= 20 || (boardY >= 0 && board[boardY][boardX])) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placePiece = () => {
    const newBoard = board.map(row => [...row]);
    for (let y = 0; y < currentPiece.shape.length; y++) {
      for (let x = 0; x < currentPiece.shape[y].length; x++) {
        if (currentPiece.shape[y][x]) {
          const boardY = currentPiece.y + y;
          if (boardY >= 0) {
            newBoard[boardY][currentPiece.x + x] = currentPiece.color;
          }
        }
      }
    }

    // Clear completed lines
    let linesCleared = 0;
    for (let y = 19; y >= 0; y--) {
      if (newBoard[y].every(cell => cell !== 0)) {
        newBoard.splice(y, 1);
        newBoard.unshift(Array(10).fill(0));
        linesCleared++;
        y++; // Check the same line again
      }
    }

    setScore(prev => prev + linesCleared * 100);
    setBoard(newBoard);
    
    const nextPiece = createNewPiece();
    if (!isValidMove(nextPiece, nextPiece.x, nextPiece.y)) {
      setGameOver(true);
    } else {
      setCurrentPiece(nextPiece);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted) {
        if (e.code === 'Space') {
          e.preventDefault();
          startGame();
        }
        return;
      }

      if (!currentPiece || gameOver) return;

      switch (e.key) {
        case 'ArrowLeft':
          if (isValidMove(currentPiece, currentPiece.x - 1, currentPiece.y)) {
            setCurrentPiece(prev => ({ ...prev, x: prev.x - 1 }));
          }
          break;
        case 'ArrowRight':
          if (isValidMove(currentPiece, currentPiece.x + 1, currentPiece.y)) {
            setCurrentPiece(prev => ({ ...prev, x: prev.x + 1 }));
          }
          break;
        case 'ArrowDown':
          if (isValidMove(currentPiece, currentPiece.x, currentPiece.y + 1)) {
            setCurrentPiece(prev => ({ ...prev, y: prev.y + 1 }));
          } else {
            placePiece();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPiece, board, gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || !currentPiece || gameOver) return;

    const dropInterval = setInterval(() => {
      if (isValidMove(currentPiece, currentPiece.x, currentPiece.y + 1)) {
        setCurrentPiece(prev => ({ ...prev, y: prev.y + 1 }));
      } else {
        placePiece();
      }
    }, 1000);

    return () => clearInterval(dropInterval);
  }, [currentPiece, board, gameStarted, gameOver]);

  const renderBoard = () => {
    const displayBoard = board.map(row => [...row]);
    
    if (currentPiece) {
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x]) {
            const boardY = currentPiece.y + y;
            const boardX = currentPiece.x + x;
            if (boardY >= 0 && boardY < 20 && boardX >= 0 && boardX < 10) {
              displayBoard[boardY][boardX] = currentPiece.color;
            }
          }
        }
      }
    }

    return displayBoard;
  };

  return (
    <div className="w-full h-full bg-purple-900 rounded p-6 flex flex-col items-center justify-center">
      <h3 className="text-white text-2xl mb-4">🧩 Tetris</h3>
      <div className="text-white mb-4">Score: {score}</div>
      
      <div className="relative bg-purple-800 border-2 border-purple-600 rounded p-2">
        <div className="grid grid-cols-10 gap-px" style={{ width: '200px', height: '400px' }}>
          {renderBoard().map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${y}-${x}`}
                className="border border-purple-700"
                style={{
                  backgroundColor: cell ? colors[cell] : 'transparent',
                  width: '18px',
                  height: '18px'
                }}
              />
            ))
          )}
        </div>
        
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <h4 className="text-xl mb-4">Game Over!</h4>
            <p className="mb-4">Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
            >
              Play Again
            </button>
          </div>
        )}
        
        {/* Start Game Overlay */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <p className="mb-4">Press SPACE to start!</p>
            <p className="text-sm">Use arrow keys to move</p>
          </div>
        )}
      </div>
      
      <button
        onClick={onClose}
        className="mt-6 px-6 py-3 bg-purple-600 text-white text-base rounded-lg hover:bg-purple-700 transition-colors"
      >
        Back to Menu
      </button>
    </div>
  );
}

// Pong Game Component
function PongGame({ onClose }) {
  const [leftPaddle, setLeftPaddle] = useState(150);
  const [rightPaddle, setRightPaddle] = useState(150);
  const [ball, setBall] = useState({ x: 200, y: 150, vx: 3, vy: 3 });
  const [score, setScore] = useState({ left: 0, right: 0 });
  const [gameStarted, setGameStarted] = useState(false);

  const PADDLE_HEIGHT = 60;
  const PADDLE_WIDTH = 10;
  const GAME_HEIGHT = 300;
  const GAME_WIDTH = 400;

  const resetBall = () => {
    setBall({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      vx: Math.random() > 0.5 ? 3 : -3,
      vy: (Math.random() - 0.5) * 4
    });
  };

  const startGame = () => {
    setGameStarted(true);
    resetBall();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted) {
        if (e.code === 'Space') {
          e.preventDefault();
          startGame();
        }
        return;
      }

      switch (e.key) {
        case 'w':
        case 'W':
          setLeftPaddle(prev => Math.max(0, prev - 20));
          break;
        case 's':
        case 'S':
          setLeftPaddle(prev => Math.min(GAME_HEIGHT - PADDLE_HEIGHT, prev + 20));
          break;
        case 'ArrowUp':
          setRightPaddle(prev => Math.max(0, prev - 20));
          break;
        case 'ArrowDown':
          setRightPaddle(prev => Math.min(GAME_HEIGHT - PADDLE_HEIGHT, prev + 20));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      setBall(prevBall => {
        let newBall = { ...prevBall };
        newBall.x += newBall.vx;
        newBall.y += newBall.vy;

        // Top and bottom wall collision
        if (newBall.y <= 0 || newBall.y >= GAME_HEIGHT - 10) {
          newBall.vy = -newBall.vy;
        }

        // Left paddle collision
        if (newBall.x <= PADDLE_WIDTH && 
            newBall.y >= leftPaddle && 
            newBall.y <= leftPaddle + PADDLE_HEIGHT) {
          newBall.vx = -newBall.vx;
          newBall.x = PADDLE_WIDTH;
        }

        // Right paddle collision
        if (newBall.x >= GAME_WIDTH - PADDLE_WIDTH - 10 && 
            newBall.y >= rightPaddle && 
            newBall.y <= rightPaddle + PADDLE_HEIGHT) {
          newBall.vx = -newBall.vx;
          newBall.x = GAME_WIDTH - PADDLE_WIDTH - 10;
        }

        // Score
        if (newBall.x < 0) {
          setScore(prev => ({ ...prev, right: prev.right + 1 }));
          return { x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2, vx: 3, vy: 3 };
        }
        if (newBall.x > GAME_WIDTH) {
          setScore(prev => ({ ...prev, left: prev.left + 1 }));
          return { x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2, vx: -3, vy: 3 };
        }

        return newBall;
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [gameStarted, leftPaddle, rightPaddle]);

  return (
    <div className="w-full h-full bg-orange-900 rounded p-6 flex flex-col items-center justify-center">
      <h3 className="text-white text-2xl mb-4">🏓 Pong</h3>
      <div className="text-white mb-4 flex gap-8">
        <span>Player 1: {score.left}</span>
        <span>Player 2: {score.right}</span>
      </div>
      
      <div 
        className="relative bg-orange-800 border-2 border-orange-600 rounded overflow-hidden"
        style={{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }}
      >
        {/* Left Paddle */}
        <div
          className="absolute bg-white"
          style={{
            left: '0px',
            top: `${leftPaddle}px`,
            width: `${PADDLE_WIDTH}px`,
            height: `${PADDLE_HEIGHT}px`
          }}
        />
        
        {/* Right Paddle */}
        <div
          className="absolute bg-white"
          style={{
            right: '0px',
            top: `${rightPaddle}px`,
            width: `${PADDLE_WIDTH}px`,
            height: `${PADDLE_HEIGHT}px`
          }}
        />
        
        {/* Ball */}
        <div
          className="absolute bg-white rounded-full"
          style={{
            left: `${ball.x}px`,
            top: `${ball.y}px`,
            width: '10px',
            height: '10px'
          }}
        />
        
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white opacity-50 transform -translate-x-0.5" />
        
        {/* Start Game Overlay */}
        {!gameStarted && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
            <p className="mb-4">Press SPACE to start!</p>
            <p className="text-sm mb-2">Player 1: W/S keys</p>
            <p className="text-sm">Player 2: Arrow keys</p>
          </div>
        )}
      </div>
      
      <button
        onClick={onClose}
        className="mt-6 px-6 py-3 bg-orange-600 text-white text-base rounded-lg hover:bg-orange-700 transition-colors"
      >
        Back to Menu
      </button>
    </div>
  );
}

export default function NintendoSwitch({ onClose }) {
  const [currentGame, setCurrentGame] = useState(null);

  const games = [
    { id: 'snake', name: 'Snake', emoji: '🐍', color: 'bg-green-600' },
    { id: 'flappy', name: 'Flappy Bird', emoji: '🐦', color: 'bg-sky-600' },
    { id: 'tetris', name: 'Tetris', emoji: '🧩', color: 'bg-purple-600' },
    { id: 'pong', name: 'Pong', emoji: '🏓', color: 'bg-orange-600' },
  ];

  const renderGame = () => {
    const gameComponents = {
      snake: <SnakeGame onClose={() => setCurrentGame(null)} />,
      flappy: <FlappyBirdGame onClose={() => setCurrentGame(null)} />,
      tetris: <TetrisGame onClose={() => setCurrentGame(null)} />,
      pong: <PongGame onClose={() => setCurrentGame(null)} />
    };

    return gameComponents[currentGame] || (
      <div className="w-full h-full bg-gray-900 rounded p-6 flex flex-col items-center justify-center">
        <h3 className="text-white text-2xl mb-6">Coming soon...</h3>
        <button
          onClick={() => setCurrentGame(null)}
          className="px-6 py-3 bg-gray-600 text-white text-base rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Menu
        </button>
      </div>
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="relative w-[900px] h-[600px]">
          <Image
            src="/Switch_outline.png"
            alt="Nintendo Switch"
            fill
            className="object-contain"
            priority
          />
          
          {/* Screen - Adjusted to make it wider */}
          <div className="absolute top-[20%] left-[15%] w-[70%] h-[60%] bg-black rounded-xl overflow-hidden border-2 border-gray-800">
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black">
              {currentGame ? (
                renderGame()
              ) : (
                <div className="h-full flex flex-col p-6">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-white text-xl font-bold">Avi's Arcade</h2>
                    <button
                      onClick={onClose}
                      className="text-white hover:text-gray-300 transition-colors text-xl"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                  
                  {/* Game Selection */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-white text-lg mb-6 text-center">Choose Your Game</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {games.map((game) => (
                        <motion.button
                          key={game.id}
                          onClick={() => setCurrentGame(game.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`${game.color} rounded-xl p-4 text-white flex flex-col items-center gap-2 hover:opacity-90 transition-opacity min-h-[90px]`}
                        >
                          <span className="text-2xl">{game.emoji}</span>
                          <span className="text-sm font-medium">{game.name}</span>
                        </motion.button>
                      ))}
                    </div>
                    <p className="text-gray-400 text-center mt-6 text-sm">
                      More games coming soon! 🚀
                    </p>
                  </div>
                  
                  {/* Bottom indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
}