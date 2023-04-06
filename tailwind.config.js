/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        ModalShead: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        TopProduct: {
          "0%": {
            opacity: "0",
          },
          "30%": {
            opacity: "0.2",
          },
          "60%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
          },
        },
        CartIcon: {
          "0%": {
            transform: "scale(2)",
            opacity: "0.2",
          },
          "30%": {
            transform: "scale(1.5)",
            opacity: "0.6",
          },
          "60%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        Loading: {
          "0%": {
            transform: "scale(.8)",
          },
          "25%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "75%": {
            transform: "scale(1.5)",
          },
          "100%": {
            transform: "scale(.8)",
          },
        },
      },
      animation: {
        "ease-in": "ModalShead 1s",
        carticon: "CartIcon 0.3s",
        Loading: "Loading 1.5s infinite",
        topproduct: "TopProduct 1.5s",
      },
      colors: {
        "gunjain-main": "#faf4f0",
        "gunjain-main-500": "#FAECE1",
      },
    },
    plugins: [],
  },
};
