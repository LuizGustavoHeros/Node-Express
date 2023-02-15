import express from "express";
import PlataformasController from "../controllers/plataformaController.js";

const router = express.Router();

router
    .get("/plataformas", PlataformasController.listarPlataformas)
    .get("/plataformas/:id", PlataformasController.listarPlataformaPorId)
    .post("/plataformas", PlataformasController.cadastrarPlataforma)
    .put("/plataformas/:id", PlataformasController.atualizarPlataforma)
    .delete("/plataformas/:id", PlataformasController.excluirPlataforma)

export default router
