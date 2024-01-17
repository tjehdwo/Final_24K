package com.penpick.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="payment")
public class Payment {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="payment_seq")
	@SequenceGenerator(name = "payment_seq",sequenceName="payment_seq",allocationSize=1)
	private int id;
	
	

}
