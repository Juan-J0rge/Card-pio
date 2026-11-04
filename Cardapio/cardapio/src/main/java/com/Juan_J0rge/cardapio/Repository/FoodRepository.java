package com.Juan_J0rge.cardapio.Repository;

import com.Juan_J0rge.cardapio.Entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
