package org.nettantra.repository;


import org.nettantra.dto.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository  extends JpaRepository<Document, Integer>{

}
