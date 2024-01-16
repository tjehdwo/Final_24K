package com.penpick.model;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="QUESTION")
public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="question_seq")
	@SequenceGenerator(name="question_seq",sequenceName="question_seq",allocationSize=1)
	private int question_num;
	private int user_num;
	private String question_title;
	private String question_content;
	private Date question_date;

}
