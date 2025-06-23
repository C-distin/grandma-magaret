import { SpeakingPage } from "./speak";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking - Margaret Kuofie",
  description: "Speaking engagements by Margaret Kuofie - Author & Storyteller",
};

export default function Page() {
  return <SpeakingPage />;
}
