 const plugins = []

 if (process.env.NODE_ENV !== "production") {
   plugins.push("react-refresh/babel");
 }

 module.exports = {
   presets: [
     require.resolve("@babel/preset-env"),
     [
       require.resolve("@babel/preset-react"),
       {
         runtime: "automatic",
       },
     ],
   ],
   plugins: plugins,
 };