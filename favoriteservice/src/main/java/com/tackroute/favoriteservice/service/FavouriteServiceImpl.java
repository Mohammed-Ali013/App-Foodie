package com.tackroute.favoriteservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tackroute.favoriteservice.exception.FavouriteAlreadyExistException;
import com.tackroute.favoriteservice.exception.FavouriteDoesNotExistException;
import com.tackroute.favoriteservice.exception.FavouriteListDoesNotExist;
import com.tackroute.favoriteservice.exception.UserAlreadyExistsException;
import com.tackroute.favoriteservice.exception.UserNotFoundException;
import com.tackroute.favoriteservice.model.Favourite;
import com.tackroute.favoriteservice.model.Food;
import com.tackroute.favoriteservice.repository.FavouriteRepository;

@Service
public class FavouriteServiceImpl implements FavouriteService{

	
	
	    private FavouriteRepository favouriteRepository;

	    @Autowired
	    public FavouriteServiceImpl(FavouriteRepository favouriteRepository) {
	        this.favouriteRepository = favouriteRepository;
	    }

	    @Override
	    public Favourite addToFavourite(Favourite favourite) throws FavouriteAlreadyExistException {
	        Optional<Favourite> favouriteResult = favouriteRepository.findById(favourite.getUserEmail());
	        if(favouriteResult.isPresent()){
	            List<Food> foodList = favouriteResult.get().getFoodItems();
	            boolean present = false;
	            for(Food food: foodList){
	                if(food.getFoodName().equals(favourite.getFoodItems().get(0).getFoodName())){
	                    present = true;
	                }
	            }
	            if(present) throw new FavouriteAlreadyExistException();
	            favouriteResult.get().getFoodItems().add(favourite.getFoodItems().get(0));
	            return favouriteRepository.save(favouriteResult.get());
	        }else return favouriteRepository.save(favourite);
	    }

	   

//	    @Override
//	    public List<Food> getFavouriteFood(String userEmail) throws FavouriteListDoesNotExist {
//	    	Optional<Favourite> favouriteResult=favouriteRepository.findById(userEmail);
//	        if(favouriteResult.isPresent())
//	        {
//	        	List<Food> foodItems = favouriteResult.get().getFoodItems();
//	            if(foodItems.size()>=1)
//	            {
//	                return foodItems;
//	            }
//	            else
//	            {
//	                throw  new FavouriteListDoesNotExist();
//	            }
//	        	
//	        }
//	        return null;
//	    }


	    
//	    @Override
//	    public Favourite removeFromFavourite(String userEmail, String foodName) throws FavouriteDoesNotExistException {
//	    	return null;
//	    }
	    
	    
	    @Override
	    public List<Food> deleteFavouriteByFavouriteId(String userEmail, String foodName) throws FavouriteDoesNotExistException, UserNotFoundException {
	    	Optional<Favourite> fav = getAllFavourites(userEmail);
	        int index = 0;
	        boolean found = false;
	        if (fav != null) {
	            List<Food> details = fav.get().getFoodItems();
	            for (int i = 0; i < details.size(); i++) {
	                if (details.get(i).getFoodName().equals(foodName)) {
	                    index = i;
	                    found = true;
	                    break;
	                }
	            }
	            if (found) {
	                Food favdetail = details.get(index);
	                details.remove(index);
	                fav.get().setFoodItems(details);
	                favouriteRepository.save(fav.get());
	                return details;
	            } else {
	                throw new FavouriteDoesNotExistException("Favourite Not Found");
	            }
	        } else {
	            throw new UserNotFoundException("User Not Found");
	        }
	    }

	    
	    
	    @Override
	    public Favourite createFavouriteList(String userEmail, Favourite favourite) throws UserAlreadyExistsException {
	        final Optional<Favourite> user=favouriteRepository.findById(userEmail);
	        if(user.isPresent()){
	            throw new UserAlreadyExistsException("User Already Exist");
	        }
	        else
	        {
	            return favouriteRepository.save(favourite);
	        }
	    }

	    
	    
		@Override
		public Optional<Favourite> getAllFavourites(String userEmail) {
			  final Optional<Favourite> allFavourite = this.favouriteRepository.findById(userEmail);
			  if (allFavourite.isPresent())
		            return allFavourite;
		        else
		            throw new UserNotFoundException();
		}
	    
	    
	    
	    
	    
	    
	    
}
