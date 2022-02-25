"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (request, response) => {
    return response.json("Bem vindo antonio a volta ao backend world!");
});
app.get("/products", (request, response) => {
    return response.json("Bem vindo a rota de cadastro de produtos!");
});
app.listen(3333);
