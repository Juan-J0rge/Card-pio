package com.Juan_J0rge.cardapio.dto;

import com.Juan_J0rge.cardapio.Entity.Food;

public record FoodResponseDTO(Long id, String title, String image, Integer price) {
    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}
