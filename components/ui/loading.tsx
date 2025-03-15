import { VscLoading } from "react-icons/vsc";

export default function Loading() {
  return (
    <>
      <VscLoading
        className="absolute top-0 left-0 animate-spin text-white"
        style={{ animationDuration: "1s" }}
      />
      <VscLoading
        className="absolute top-0 left-0 animate-spin text-white rotate-180"
        style={{
          animationDuration: "1s",
          animationDelay: "0.25s",
        }}
      />
      <VscLoading
        className="absolute top-0 left-0 animate-spin text-white rotate-180"
        style={{
          animationDuration: "1s",
          animationDelay: "0.5s",
        }}
      />
    </>
  );
}
