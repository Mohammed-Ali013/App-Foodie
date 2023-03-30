package com.tackroute.favoriteservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tackroute.favoriteservice.exception.FavouriteAlreadyExistException;
import com.tackroute.favoriteservice.model.Favourite;
import com.tackroute.favoriteservice.service.FavouriteService;

@RestController
@RequestMapping(path = "/api/v1/")
public class FavouriteController {

	private FavouriteService favouriteService;

	@Autowired
	public FavouriteController(FavouriteService favouriteService) {
		this.favouriteService = favouriteService;
	}

	
	@GetMapping("/welcome")
	public String welcome() {
		return "welcome";
	}
	
	
	
	@PostMapping("favourite")
	public ResponseEntity<?> addToFavourites(@RequestBody Favourite favourite) {
		try {
			Favourite response = favouriteService.addToFavourite(favourite);
			return new ResponseEntity<Favourite>(response, HttpStatus.OK);
		} catch (FavouriteAlreadyExistException exception) {
			return new ResponseEntity<String>("Food Item is already exist.", HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("favourite/{userEmail}/getAllFavourites")
    public ResponseEntity<?> getAllFavourites(@PathVariable String userEmail) {
        return new ResponseEntity<>(this.favouriteService.getAllFavourites(userEmail), HttpStatus.OK);
    }
	
	
	 @DeleteMapping("favourite/{userEmail}/deleteFromFavourite/{foodName}")
	    public void  deleteFavouriteByFavouriteId(@PathVariable("userEmail") String userEmail, @PathVariable("foodName") String foodName) {
	        favouriteService.deleteFavouriteByFavouriteId(userEmail, foodName);
	    }
	
	 @PostMapping("{userEmail}/createFavouriteList")
	    public ResponseEntity<?> createFavouriteList(@PathVariable("userEmail") String userEmail, @RequestBody Favourite user) {
	        return new ResponseEntity<>(this.favouriteService.createFavouriteList(userEmail, user), HttpStatus.CREATED);
	    }
	
	
	
	
	



}
