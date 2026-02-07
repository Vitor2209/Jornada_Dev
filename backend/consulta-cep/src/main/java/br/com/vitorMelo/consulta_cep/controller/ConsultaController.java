package br.com.vitorMelo.consulta_cep.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import br.com.vitorMelo.consulta_cep.domain.CepDomain;

@RestController
@RequestMapping("/api/cep")
@CrossOrigin(origins = "http://localhost:3000") // <-- Aqui você libera o React
public class ConsultaController {

    // Requisicao do tipo get
    // http://localhost:8080/api/cep/{cep}
    @GetMapping("/{cep}")
    public CepDomain consultaCep(@PathVariable("cep") String cep) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<CepDomain> resp = restTemplate.getForEntity(
           String.format("https://viacep.com.br/ws/%s/json/", cep),
           CepDomain.class
        );
        return resp.getBody();
    }
}
