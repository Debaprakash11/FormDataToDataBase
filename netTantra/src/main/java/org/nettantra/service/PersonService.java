package org.nettantra.service;
import java.util.List;
import java.util.Optional;

import org.nettantra.dao.PersonDao;
import org.nettantra.dto.Person;
import org.nettantra.dto.ResponseStructure;
import org.nettantra.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class PersonService {
	
	@Autowired
	PersonDao personDao;
	
	
	public ResponseEntity<ResponseStructure<Person>> savePerson(Person person) {
		ResponseStructure<Person> structure = new ResponseStructure<Person>();
		
		structure.setBody(personDao.savePerson(person));
		structure.setMessage(" Person Saved Successfully");
		structure.setCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Person>>(structure, HttpStatus.ACCEPTED);
	}
	

	public ResponseEntity<ResponseStructure<Person>> getPerson(int id) {
		ResponseStructure<Person> structure = new ResponseStructure<Person>();

		Optional<Person> op = personDao.getPerson(id);
		if (op.isPresent()) {
			structure.setBody(op.get());
			structure.setMessage("Id is present");
			structure.setCode(HttpStatus.FOUND.value());
		} else
			throw new IdNotFoundException();

		return new ResponseEntity<ResponseStructure<Person>>(structure, HttpStatus.FOUND);
	}

	public ResponseEntity<ResponseStructure<List<Person>>> getAll() {
		ResponseStructure<List<Person>> structure = new ResponseStructure<List<Person>>();
		structure.setBody(personDao.getAll());
		structure.setMessage("Records are fetched");
		structure.setCode(HttpStatus.FOUND.value());
		return new ResponseEntity<ResponseStructure<List<Person>>>(structure, HttpStatus.FOUND);
	}
}
