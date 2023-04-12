package org.nettantra.dao;
import java.util.List;
import java.util.Optional;
import org.nettantra.dto.Document;
import org.nettantra.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DocumentDao {
	@Autowired
	DocumentRepository documentRepository;
	
	public Document saveDocument(Document document) {
		return documentRepository.save(document);

	}
	
	
	public Optional<Document> getDocument(int id) {
		return documentRepository.findById(id);

	}

	public List<Document> getAll() {
		return documentRepository.findAll();

	}
	

}
