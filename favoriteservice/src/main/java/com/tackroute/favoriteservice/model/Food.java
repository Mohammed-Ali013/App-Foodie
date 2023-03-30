package com.tackroute.favoriteservice.model;

public class Food {

	private String id;
	private String foodName;
	private String restaurantName;
	private String foodPrice;
	private String category;
	private String image;
	private String description;
	private String rating;

	public Food() {

	}

	public Food(String id, String foodName, String restaurantName, String foodPrice, String category, String image,
			String description, String rating) {

		this.id = id;
		this.foodName = foodName;
		this.restaurantName = restaurantName;
		this.foodPrice = foodPrice;
		this.category = category;
		this.image = image;
		this.description = description;
		this.rating = rating;
	}

	
	
	public String getid() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public String getFoodPrice() {
		return foodPrice;
	}

	public void setFoodPrice(String foodPrice) {
		this.foodPrice = foodPrice;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}


	@Override
	public String toString() {
		return "Food [FoodId=" + id + ", foodName=" + foodName + ", restaurantName=" + restaurantName + ", foodPrice="
				+ foodPrice + ", category=" + category + ", image=" + image + ", description=" + description
				+ ", rating=" + rating + "]";
	}

}
