package org.nettantra.dao;

import java.util.List;
import java.util.Optional;
import org.nettantra.dto.Person;
import org.nettantra.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class PersonDao {
	@Autowired
	PersonRepository personRepository;
		
	public Person savePerson(Person person) {
		return personRepository.save(person);
	}


	public Optional<Person> getPerson(int id) {
		return personRepository.findById(id);
	}

	public List<Person> getAll() {
		return personRepository.findAll();
	}
}
