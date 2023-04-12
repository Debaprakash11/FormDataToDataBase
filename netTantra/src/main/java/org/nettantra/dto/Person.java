package org.nettantra.dto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String dob;
	private String fathername;
	private String mothername;
	private String gender;
	private String nationlity;
	private String street;
	private String city;
	private String state;
	private long phone;
	@OneToOne
	private Education education;
	@OneToOne
	private Document document;
	
	
	
}
