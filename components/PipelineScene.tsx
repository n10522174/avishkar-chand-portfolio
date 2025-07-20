'use client'; // Correctly specify the directive for Next.js

export default function PipelineScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src="/car.gif" // Ensure the GIF is placed in the public folder
        alt="Rocket Animation"
        className="w-96 h-auto" // Adjust size as needed
      />
    </div>
  );
}