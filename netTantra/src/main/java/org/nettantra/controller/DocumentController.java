package org.nettantra.controller;

import java.util.List;

import org.nettantra.dto.Document;
import org.nettantra.dto.Education;
import org.nettantra.dto.ResponseStructure;
import org.nettantra.service.DocumentService;
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
public class DocumentController {
	@Autowired
	DocumentService documentService;
	
	@PostMapping("/document/{hid}")
	public ResponseEntity<ResponseStructure<Document>> saveDocument(@RequestBody Document document, @PathVariable int hid) {
		return documentService.saveDocument(document, hid);
	}

	
	@GetMapping("/document/{id}")
	public ResponseEntity<ResponseStructure<Document>> getDocument(@PathVariable int id) {
		return documentService.getDocument(id);
	}

	@GetMapping("/document/all")
	public ResponseEntity<ResponseStructure<List<Document>>> getAll() {
		return documentService.getAll();
	}
}
