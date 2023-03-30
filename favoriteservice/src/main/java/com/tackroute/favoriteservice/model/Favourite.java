package com.tackroute.favoriteservice.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "favourite")
public class Favourite {

	@Id
	private String userEmail;
	private List<Food> foodItems;

	
	public Favourite() {

	}

	public Favourite(String userEmail, List<Food> foodItems) {
		this.userEmail = userEmail;
		this.foodItems = foodItems;
	}

	
	
	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public List<Food> getFoodItems() {
		return foodItems;
	}

	public void setFoodItems(List<Food> foodItems) {
		this.foodItems = foodItems;
	}

	
	@Override
	public String toString() {
		return "Favourite [userEmail=" + userEmail + ", foodItems=" + foodItems + "]";
	}

	
	
	

}