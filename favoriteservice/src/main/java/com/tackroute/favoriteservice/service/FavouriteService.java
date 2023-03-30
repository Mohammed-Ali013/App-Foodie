package com.tackroute.favoriteservice.service;

import java.util.List;
import java.util.Optional;

import com.tackroute.favoriteservice.exception.FavouriteAlreadyExistException;
import com.tackroute.favoriteservice.model.Favourite;
import com.tackroute.favoriteservice.model.Food;


public interface FavouriteService {

	Favourite addToFavourite(Favourite favourite) throws FavouriteAlreadyExistException;

	Optional<Favourite> getAllFavourites(String userEmail);

	List<Food> deleteFavouriteByFavouriteId(String userEmail, String foodName);

	Favourite createFavouriteList(String email, Favourite favourite);

}
