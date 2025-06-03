package com.example.aula.service;

import com.example.aula.exception.NomeDoPratoJaCadastradoException;
import com.example.aula.model.Restaurante;
import com.example.aula.repository.RestauranteRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class RestauranteService {
    private RestauranteRepository restauranteRepository;

    public RestauranteService(RestauranteRepository restauranteRepository) {
        this.restauranteRepository = restauranteRepository;
    }

    public List<Restaurante> listarTodos() {
        return restauranteRepository.findAll();
    }

    public Restaurante salvar(@Valid Restaurante restaurante) {
        if (restauranteRepository.findByNomePrato(restaurante.getNomePrato()).isPresent()) {
            throw new NomeDoPratoJaCadastradoException("Prato já cadastrado.");
        }

        return restauranteRepository.save(restaurante);
    }

    public Restaurante atualizar(@Valid Restaurante restaurante) {
        Restaurante restauranteAtualizar = restauranteRepository.findById(restaurante.getId())
                .orElseThrow(() -> new IllegalArgumentException("Prato não encontrado."));

        restauranteAtualizar.setNomePrato(restaurante.getNomePrato());
        restauranteAtualizar.setDescricao(restaurante.getDescricao());
        restauranteAtualizar.setPreco(restaurante.getPreco());
        restauranteAtualizar.setCategoria(restaurante.getCategoria());
        restauranteAtualizar.setDisponibilidade(restaurante.getDisponibilidade());
        restauranteAtualizar.setImagemUrl(restaurante.getImagemUrl());

        return restauranteRepository.save(restauranteAtualizar);
    }

    public void excluir(Long id) {
        Restaurante restauranteExcluir = restauranteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prato não encontrado"));

        restauranteRepository.deleteById(restauranteExcluir.getId());
    }

}
