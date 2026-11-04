package com.Juan_J0rge.cardapio.controller;

import com.Juan_J0rge.cardapio.Entity.Food;
import com.Juan_J0rge.cardapio.Repository.FoodRepository;
import com.Juan_J0rge.cardapio.dto.FoodRequestDTO;
import com.Juan_J0rge.cardapio.dto.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/food")
@RestController
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        Food foodData = new Food(data);
        foodRepository.save(foodData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listfood")
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = foodRepository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
