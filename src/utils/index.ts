export const appIsOnProduction = () => {
  return process.env.NODE_ENV === "production";
};

console.log("hola");
