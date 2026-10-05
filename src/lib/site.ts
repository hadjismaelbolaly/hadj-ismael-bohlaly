export const site = {
  name: "Hadj Ismael Bohlaly",
  title: "Hadj Ismael Bohlaly — Accompagnement spirituel",
  tagline: "Un accompagnement discret, pour retrouver clarté et sérénité.",
  phone: "+22603809292",
  phoneDisplay: "+226 66 72 58 52 ",
  whatsappLink: "https://wa.me/message/5XUQKSLTFK6RO1",
  whatsappNumberLink: "https://wa.me/message/5XUQKSLTFK6RO1",
  instagram: "https://www.instagram.com/hadjismaelbohlaly?igsh=YWJvMzA5eXd0YXF2&utm_source=qr",
  youtube: "https://youtube.com/@hadjismaelbolalyofficiel?si=763Gf_R1vp2TvE9A",

  email: "contact@hadjismaelbolaly.com",
  url: "https://www.hadjismaelbohlaly.com",
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `${site.whatsappNumberLink}?text=${encoded}`;
}
