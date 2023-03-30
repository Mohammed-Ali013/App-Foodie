package com.stackroute.searchservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Optional;
@RestController
//@RequestMapping(path = "/restaurants")
@RequestMapping(path = "api/v1")
public class SearchController {
    private RestTemplate restTemplate;
    @Autowired
    public SearchController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    @GetMapping("/{dishName}/{citycode}")
    
    public ResponseEntity<?> getLogin(@PathVariable("dishName") String dishName,@PathVariable("citycode") int citycode) {
//        String url="https://developers.zomato.com/api/v2.1/search?entity_id="+citycode+"&entity_type=city&q="+dishName;
//    	String url="https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&q=maggi";
    	String url="https://developers.zomato.com/api/v2.1/search?entity_id="+citycode+"&entity_type=city&q="+dishName;
//    	RestTemplate rt=new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("user-key", "5ffb698e3d9a8ea8d51fb8847c216058");
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>(headers);
        return restTemplate.exchange(url, HttpMethod.GET, entity, Object.class);
//        String message=restTemplate.getForObject(url, String.class);
//        return message;
    }
    

}
