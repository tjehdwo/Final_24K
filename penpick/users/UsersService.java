package com.penpick.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepository usersRepository;
	
	public List<Users> getAllUsers(){
		return usersRepository.findAll();
	}
	
	public void saveUsers(Users users) {
		usersRepository.save(users);
	}
	
	public void deleteUsers(Users users) {
		usersRepository.delete(users);
	}

}
