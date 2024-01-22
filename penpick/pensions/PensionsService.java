package com.penpick.pensions;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PensionsService {
	
	@Autowired
	private PensionsRepository pensionsRepository;
	
	public List<Pensions> getAllPensions(){
		return pensionsRepository.findAll();
	}
	
	public Optional<Pensions> getPensions(int id){
		return pensionsRepository.findById(id);
	}

}
