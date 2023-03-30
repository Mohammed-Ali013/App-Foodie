package com.tackroute.favoriteservice.exception;

public class FavouriteListDoesNotExist extends RuntimeException{
	
	public FavouriteListDoesNotExist() {
		
	}

	public FavouriteListDoesNotExist(String message) {
        super(message);
    }
}
