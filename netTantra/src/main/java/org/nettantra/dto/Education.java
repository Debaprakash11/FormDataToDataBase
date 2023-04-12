package org.nettantra.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
@Data
@Entity
public class Education {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String hscInstituteName,hscBoard,hscScore,sscInstituteName,sscBoard,sscScore,currentPursing,
	currentInstituteName,overalPercentage,currentBacklogs;
	@OneToOne
	private Person person;
	@JsonIgnore
	public Person getPerson() {
		return person;
	}
}
