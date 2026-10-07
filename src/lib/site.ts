export const site = {
  name: "Hadj Ismael Bohlaly",
  title: "Hadj Ismael Bohlaly — Accompagnement spirituel",
  tagline: "Un accompagnement discret, pour retrouver clarté et sérénité.",
  phone: "+22604469454",
  phoneDisplay: "+226 04 46 94 54",
  whatsappLink: "https://wa.me/message/7ZPNT4WUNBYGI1",
  whatsappNumberLink: "https://wa.me/22604469454",
  instagram: "https://www.instagram.com/hadjismaelbohlaly?igsh=YWJvMzA5eXd0YXF2&utm_source=qr",
  youtube: "https://youtube.com/@hadjismaelbolalyofficiel?si=763Gf_R1vp2TvE9A",

  email: "contact@hadjismaelbolaly.com",
  url: "https://www.hadjismaelbohlaly.org",
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `${site.whatsappNumberLink}?text=${encoded}`;
}
