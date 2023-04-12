package org.nettantra.controller;

import java.util.List;

import org.nettantra.dto.Person;
import org.nettantra.dto.ResponseStructure;
import org.nettantra.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("http://localhost:3000")
@RestController
public class PersonController {
	@Autowired
	PersonService  personService; 
	
	@PostMapping("/person")
	public ResponseEntity<ResponseStructure<Person>> savePerson(@RequestBody Person person) {
		return personService.savePerson(person);
	}

	@GetMapping("/person/{id}")
	public ResponseEntity<ResponseStructure<Person>> getPerson(@PathVariable int id) {
		return personService.getPerson(id);
	}

	@GetMapping("/person/all")
	public ResponseEntity<ResponseStructure<List<Person>>> getAll() {
		return personService.getAll();
	}
	
}
