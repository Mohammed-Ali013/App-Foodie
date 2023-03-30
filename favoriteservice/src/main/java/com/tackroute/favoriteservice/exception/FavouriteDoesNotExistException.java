package com.tackroute.favoriteservice.exception;

public class FavouriteDoesNotExistException extends RuntimeException {

	public FavouriteDoesNotExistException() {

	}

	public FavouriteDoesNotExistException(String message) {
		super(message);
	}
}
