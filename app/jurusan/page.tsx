import JurusanClient from "@/app/jurusan/JurusanClient";

export const metadata = {
  title: "Jurusan | SMK Telkom Purwokerto",
  description:
    "Daftar program keahlian dan jurusan di SMK Telkom Purwokerto.",
};

export default function Jurusan() {
  return <JurusanClient />;
}
