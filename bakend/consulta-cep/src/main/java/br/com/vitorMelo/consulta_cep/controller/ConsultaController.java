package br.com.vitorMelo.consulta_cep.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ConsultaController {

    // Requisicao do tipo get
    @GetMapping("/boasvindas")
    public String boasVindas() {
        return "Seja bem-vindo ao sistema de consulta de CEP!";
    }
}
