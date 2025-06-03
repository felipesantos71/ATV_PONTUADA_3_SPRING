package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tab_restaurante")
public class Restaurante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    private String nomePrato;

    private String descricao;

    @NotBlank(message = "Preço é obrigatória.")
    private Double preco;

    private String categoria;

    private String disponibilidade;

    private String imagemUrl;

    public Restaurante() {
    }

    public Restaurante(Long id, String nomePrato, String descricao, Double preco, String categoria, String disponibilidade, String imagemUrl) {
        this.id = id;
        this.nomePrato = nomePrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.imagemUrl = imagemUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome do prato é obrigatório.") String getNomePrato() {
        return nomePrato;
    }

    public void setNomePrato(@NotBlank(message = "Nome do prato é obrigatório.") String nomePrato) {
        this.nomePrato = nomePrato;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public @NotBlank(message = "Preço é obrigatória.") Double getPreco() {
        return preco;
    }

    public void setPreco(@NotBlank(message = "Preço é obrigatória.") Double preco) {
        this.preco = preco;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(String disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    @Override
    public String toString() {
        return "Restaurante{" +
                "id=" + id +
                ", nomePrato='" + nomePrato + '\'' +
                ", descricao='" + descricao + '\'' +
                ", preco=" + preco +
                ", categoria='" + categoria + '\'' +
                ", disponibilidade='" + disponibilidade + '\'' +
                ", imagemUrl='" + imagemUrl + '\'' +
                '}';
    }
}
