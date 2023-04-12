package org.nettantra.service;

import java.util.List;
import java.util.Optional;

import org.nettantra.dao.EducationDao;
import org.nettantra.dao.PersonDao;
import org.nettantra.dto.Education;
import org.nettantra.dto.Person;
import org.nettantra.dto.ResponseStructure;
import org.nettantra.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class EducationService {
	@Autowired
	EducationDao educationDao;
	@Autowired
	PersonDao personDao;
	public ResponseEntity<ResponseStructure<Education>> saveEducation(Education education, int hid) {
		Optional<Person> person = personDao.getPerson(hid);
		ResponseStructure<Education> structure = new ResponseStructure<Education>();
		if (person.isPresent()) {
			
			education.setPerson(person.get());
			person.get().setEducation(education);		
			structure.setBody(educationDao.saveEducation(education));
			structure.setMessage("Saved Successfully");
			structure.setCode(HttpStatus.ACCEPTED.value());
		} else {
			throw new IdNotFoundException();
		}

		return new ResponseEntity<ResponseStructure<Education>>(structure, HttpStatus.ACCEPTED);
	}

	
	public ResponseEntity<ResponseStructure<Education>> getEducation(int id) {
		ResponseStructure<Education> structure = new ResponseStructure<Education>();

		Optional<Education> op = educationDao.getEducation(id);
		if (op.isPresent()) {
			structure.setBody(op.get());
			structure.setMessage("Id is present");
			structure.setCode(HttpStatus.FOUND.value());
		} else
			throw new IdNotFoundException();

		return new ResponseEntity<ResponseStructure<Education>>(structure, HttpStatus.FOUND);
	}

	public ResponseEntity<ResponseStructure<List<Education>>> getAll() {
		ResponseStructure<List<Education>> structure = new ResponseStructure<List<Education>>();
		structure.setBody(educationDao.getAll());
		structure.setMessage("Records are fetched");
		structure.setCode(HttpStatus.FOUND.value());
		return new ResponseEntity<ResponseStructure<List<Education>>>(structure, HttpStatus.FOUND);
	}
}
