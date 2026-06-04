export default function LoginBackground() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #003e6f 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}