package org.nettantra.dao;

import java.util.List;
import java.util.Optional;
import org.nettantra.dto.Education;
import org.nettantra.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class EducationDao {
	@Autowired
	EducationRepository educationRepository;
	public Education saveEducation(Education education) {
		return educationRepository.save(education);

	}


	public Optional<Education> getEducation(int id) {
		return educationRepository.findById(id);

	}

	public List<Education> getAll() {
		return educationRepository.findAll();

	}
}

