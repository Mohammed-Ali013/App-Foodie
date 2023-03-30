package com.tackroute.favoriteservice.exception;

public class FavouriteAlreadyExistException extends RuntimeException{

	public FavouriteAlreadyExistException()
    {

    }

    public FavouriteAlreadyExistException(String message)
    {
        super(message);
    }
}
