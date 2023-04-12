package org.nettantra.controller;

import java.util.List;

import org.nettantra.dto.Education;
import org.nettantra.dto.ResponseStructure;
import org.nettantra.service.EducationService;
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
public class EducationController {
	@Autowired
	EducationService educationService; 
	
	@PostMapping("/education/{hid}")
	public ResponseEntity<ResponseStructure<Education>> saveEducation(@RequestBody Education education, @PathVariable int hid) {
		return educationService.saveEducation(education, hid);
	}

	@GetMapping("/education/{id}")
	public ResponseEntity<ResponseStructure<Education>> getEducation(@PathVariable int id) {
		return educationService.getEducation(id);
	}

	@GetMapping("/education/all")
	public ResponseEntity<ResponseStructure<List<Education>>> getAll() {
		return educationService.getAll();
	}

	
}
