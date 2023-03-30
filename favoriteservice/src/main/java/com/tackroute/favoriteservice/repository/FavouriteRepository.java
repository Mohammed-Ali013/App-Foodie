package com.tackroute.favoriteservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.tackroute.favoriteservice.model.Favourite;


@Repository
public interface FavouriteRepository extends MongoRepository<Favourite, String> {


}
