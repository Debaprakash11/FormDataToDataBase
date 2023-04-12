package org.nettantra.service;

import java.util.List;
import java.util.Optional;

import org.nettantra.dao.DocumentDao;
import org.nettantra.dao.PersonDao;
import org.nettantra.dto.Document;
import org.nettantra.dto.Person;
import org.nettantra.dto.ResponseStructure;
import org.nettantra.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {

	@Autowired
	PersonDao personDao;
	@Autowired
	DocumentDao documentDao;
	
	
	public ResponseEntity<ResponseStructure<Document>> saveDocument(Document document, int hid) {
		Optional<Person> person = personDao.getPerson(hid);
		ResponseStructure<Document> structure = new ResponseStructure<Document>();
		if (person.isPresent()) {
			
			document.setPerson(person.get());
			person.get().setDocument(document);		
			structure.setBody(documentDao.saveDocument(document));
			structure.setMessage("Saved Successfully");
			structure.setCode(HttpStatus.ACCEPTED.value());
		} else {
			throw new IdNotFoundException();
		}

		return new ResponseEntity<ResponseStructure<Document>>(structure, HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<Document>> getDocument(int id) {
		ResponseStructure<Document> structure = new ResponseStructure<Document>();

		Optional<Document> op = documentDao.getDocument(id);
		if (op.isPresent()) {
			structure.setBody(op.get());
			structure.setMessage("Id is present");
			structure.setCode(HttpStatus.FOUND.value());
		} else
			throw new IdNotFoundException();

		return new ResponseEntity<ResponseStructure<Document>>(structure, HttpStatus.FOUND);
	}

	public ResponseEntity<ResponseStructure<List<Document>>> getAll() {
		ResponseStructure<List<Document>> structure = new ResponseStructure<List<Document>>();
		structure.setBody(documentDao.getAll());
		structure.setMessage("Records are fetched");
		structure.setCode(HttpStatus.FOUND.value());
		return new ResponseEntity<ResponseStructure<List<Document>>>(structure, HttpStatus.FOUND);
	}
}