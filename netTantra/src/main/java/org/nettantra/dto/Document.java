package org.nettantra.dto;

import java.io.File;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Document {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    private File passportSizePhoto,hscMarkSheet,sscMarkSheet,allSemesterMarksheet;
	@OneToOne
	private Person person;
	@JsonIgnore
	public Person getPerson() {
		return person;
	}
	
}
