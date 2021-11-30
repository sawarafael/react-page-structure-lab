export const WhoAmI = (cliente: string) => {
  const Detran: string = "detran";
  const Ananindeua: string = "ananin";

  const tokenDetran = "";
  const tokenAnan = "";

  if (cliente === Ananindeua) {
    return tokenAnan;
  } else if (cliente === Detran) {
    return tokenDetran;
  }
};
