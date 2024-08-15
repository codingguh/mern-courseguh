export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Nama API Anda",
      description: "Deskripsi API Anda",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000", // Ganti sesuai URL API Anda
        description: "Server lokal",
      },
    ],
  },
  apis: ["./routes/*.ts"], // Path ke file yang berisi definisi rute API Anda
};
